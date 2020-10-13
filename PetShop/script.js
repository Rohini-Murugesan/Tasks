var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var allPetDetails = [
    { name: 'pet1', type: 'dog', age: 1, color: 'black', canBeAdopted: true, availability: 'yes', food: "dogFood" },
    { name: 'pet2', type: 'cat', age: 2, color: 'grey', canBeAdopted: true, availability: 'yes' },
    { name: 'pet3', type: 'rabbit', age: 3, color: 'white', canBeAdopted: true, availability: 'yes', food: "rabbitFood" },
    { name: 'pet4', type: 'parrot', age: 4, color: 'green', canBeAdopted: true, availability: 'yes' }
];
var petAvailability = /** @class */ (function () {
    function petAvailability(allPetDetails) {
        this.petDetails = allPetDetails;
    }
    petAvailability.prototype.getAllPetsDetails = function () {
        return this.petDetails;
    };
    petAvailability.prototype.addPetDetail = function (petDetail) {
        this.petDetails.push(petDetail);
    };
    petAvailability.prototype.setAllPetsDetails = function (allPetDetails) {
        this.petDetails = allPetDetails;
    };
    petAvailability.prototype.getPetAvailabilityCount = function () {
        var Arr = this.petDetails;
        this.petsAvailabilityCount = {};
        for (var i = 0; i < Arr.length; i++) {
            if (Arr[i].availability === "yes" && Arr[i].canBeAdopted === true) {
                if (Arr[i].type in this.petsAvailabilityCount) {
                    this.petsAvailabilityCount[Arr[i].type] += 1;
                }
                else {
                    this.petsAvailabilityCount[Arr[i].type] = 1;
                }
            }
        }
        return this.petsAvailabilityCount;
    };
    return petAvailability;
}());
var requestClass = /** @class */ (function (_super) {
    __extends(requestClass, _super);
    function requestClass(allPetDetails, AllEnquiries) {
        var _this = _super.call(this, allPetDetails) || this;
        _this.AllEnquiries = AllEnquiries;
        return _this;
    }
    requestClass.prototype.addEnquiry = function (enquiry) {
        this.AllEnquiries.push(enquiry);
    };
    requestClass.prototype.getAllEnquiries = function () {
        return this.AllEnquiries;
    };
    requestClass.prototype.makePetsSold = function (enquiry) {
        var AllPetsDetails = this.getAllPetsDetails();
        console.log("Enquiry ", enquiry, " is available in the Pet Shop - Below Pets are sold to this request");
        for (var j in enquiry) {
            for (var i = 0; i < enquiry[j]; i++) {
                for (var k = 0; k < AllPetsDetails.length; k++) {
                    if (AllPetsDetails[k].type === j && AllPetsDetails[k].availability === "yes") {
                        AllPetsDetails[k].availability = "sold";
                        console.log(AllPetsDetails[k].name + " is sold \n");
                        break;
                    }
                }
            }
        }
        this.setAllPetsDetails(AllPetsDetails);
        //console.log(AllPetsDetails)
    };
    requestClass.prototype.findStatusOfAllEnquiries = function () {
        var availabilityList = this.getPetAvailabilityCount();
        var finaloutput = {};
        for (var i = 0; i < this.AllEnquiries.length; i++) {
            var enq = this.AllEnquiries[i];
            var availableStatus = false;
            for (var j in enq) {
                // console.log(j)
                if (enq[j] <= availabilityList[j]) {
                    availableStatus = true;
                    availabilityList[j] -= enq[j];
                }
                else {
                    availableStatus = false;
                    break;
                }
            }
            if (availableStatus === true) {
                this.makePetsSold(enq);
            }
            finaloutput['Enquiry_' + (i + 1)] = availableStatus;
        }
        console.log("ENQUIRY STATUS : ", finaloutput);
        return finaloutput;
    };
    return requestClass;
}(petAvailability));
// Enquiries
var Enquiries = [{ 'dog': 1, 'cat': 1 }, { 'cat': 1 }, { 'rabbit': 1 }, { 'parrot': 1 }, { 'parrot': 1, 'dog': 1 }];
var petShopObj = new requestClass(allPetDetails, Enquiries);
// check Pets details
console.log("All Pets Details : ", petShopObj.getAllPetsDetails());
console.log("Pets Availability : ", petShopObj.getPetAvailabilityCount());
//Add new pet details
petShopObj.addPetDetail({ name: 'pet5', type: 'dog', age: 2, color: 'grey', canBeAdopted: true, availability: 'yes', food: "dogFood" });
console.log("All Pets Details after adding new pet : ", petShopObj.getAllPetsDetails());
console.log("Pets Availability after adding new pet: ", petShopObj.getPetAvailabilityCount());
// add new enquiries
console.log("Enquiries : ", petShopObj.getAllEnquiries());
petShopObj.addEnquiry({ 'rabbit': 1 });
console.log("Enquiries after adding new: ", petShopObj.getAllEnquiries());
// Map the enquiries with available pets and find the status of each enquiry
petShopObj.findStatusOfAllEnquiries();
console.log("Pets Availability after all requests are completed: ", petShopObj.getPetAvailabilityCount());
