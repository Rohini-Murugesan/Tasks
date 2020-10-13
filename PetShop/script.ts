type adoptionOptions = true | false ;
type availability = 'yes' | 'sold';
interface petDetails{
    name: string;
    type: string;
    age: number;
    color: string;
    canBeAdopted: adoptionOptions; 
    availability: availability;
    food?:string;
}


let allPetDetails: petDetails[] = [
{name:'pet1',type:'dog',age:1,color:'black',canBeAdopted:true,availability:'yes',food:"dogFood"},
{name:'pet2',type:'cat',age:2,color:'grey',canBeAdopted:true,availability:'yes'},
{name:'pet3',type:'rabbit',age:3,color:'white',canBeAdopted:true,availability:'yes',food:"rabbitFood"},
{name:'pet4',type:'parrot',age:4,color:'green',canBeAdopted:true,availability:'yes'}
];

class petAvailability{
    // add diff pets
    // get count of available pets
    petsCount: number;
    petsAvailabilityCount: Record<string,number>;
    petDetails: petDetails[];
    constructor(allPetDetails:petDetails[]){
        this.petDetails = allPetDetails;
    }
    getAllPetsDetails():petDetails[]{
        return this.petDetails
    }
    addPetDetail(petDetail:petDetails):void{
        this.petDetails.push(petDetail)
    }
    setAllPetsDetails(allPetDetails:petDetails[]){
        this.petDetails = allPetDetails
    }

    getPetAvailabilityCount(): Record<string,number>{
        let Arr = this.petDetails
        this.petsAvailabilityCount = {};
        for(let i=0;i<Arr.length;i++){
            if(Arr[i].availability === "yes" && Arr[i].canBeAdopted === true){
                if(Arr[i].type in this.petsAvailabilityCount){
                    this.petsAvailabilityCount[Arr[i].type] += 1
                    
                }else{
                    this.petsAvailabilityCount[Arr[i].type] = 1
                }   
            }
        }
        return this.petsAvailabilityCount
    }
}

class requestClass extends petAvailability{
    enquiry: Record<string,number>;
    AllEnquiries : Record<string,number>[];
    constructor(allPetDetails:petDetails[],AllEnquiries:Record<string,number>[]){
        super(allPetDetails);
        this.AllEnquiries = AllEnquiries
    }

    addEnquiry(enquiry:Record<string,number>):void{
        this.AllEnquiries.push(enquiry)
    }

    getAllEnquiries():Record<string,number>[]{
        return this.AllEnquiries
    }

    makePetsSold(enquiry:Record<string,number>):void{
        let AllPetsDetails = this.getAllPetsDetails()
        console.log("Enquiry ",enquiry," is available in the Pet Shop - Below Pets are sold to this request")
        for(let j in enquiry){
            for(let i=0;i<enquiry[j];i++){
                for(let k=0;k<AllPetsDetails.length;k++){
                    if(AllPetsDetails[k].type === j && AllPetsDetails[k].availability === "yes"){
                        AllPetsDetails[k].availability = "sold"
                        console.log(AllPetsDetails[k].name+" is sold \n")
                        break
                    }
                }
            }
        }
        this.setAllPetsDetails(AllPetsDetails)
        //console.log(AllPetsDetails)
    }

    findStatusOfAllEnquiries():Record<string,string>{
        let availabilityList = this.getPetAvailabilityCount()
        let finaloutput = {}
        for(let i=0;i<this.AllEnquiries.length;i++){
            let enq = this.AllEnquiries[i]
            let availableStatus = false
            for(let j in enq){
                // console.log(j)
                if(enq[j] <= availabilityList[j]){
                    availableStatus = true
                    availabilityList[j] -= enq[j]
                }else{
                    availableStatus = false
                    break
                }
            }
            if(availableStatus===true){
                this.makePetsSold(enq)
            }
            finaloutput['Enquiry_'+(i+1)] = availableStatus

        }
        console.log("ENQUIRY STATUS : ",finaloutput)
        return finaloutput;
    }
}
// Enquiries
let Enquiries = [{'dog':1,'cat':1},{'cat':1},{'rabbit':1},{'parrot':1},{'parrot':1,'dog':1}]
let petShopObj = new requestClass(allPetDetails,Enquiries)

// check Pets details
console.log("All Pets Details : ", petShopObj.getAllPetsDetails())
console.log("Pets Availability : ",petShopObj.getPetAvailabilityCount())

//Add new pet details
petShopObj.addPetDetail({name:'pet5',type:'dog',age:2,color:'grey',canBeAdopted:true,availability:'yes',food:"dogFood"})
console.log("All Pets Details after adding new pet : ", petShopObj.getAllPetsDetails())
console.log("Pets Availability after adding new pet: ",petShopObj.getPetAvailabilityCount())

// add new enquiries
console.log("Enquiries : ",petShopObj.getAllEnquiries())
petShopObj.addEnquiry({'rabbit':1})
console.log("Enquiries after adding new: ",petShopObj.getAllEnquiries())

// Map the enquiries with available pets and find the status of each enquiry
petShopObj.findStatusOfAllEnquiries()
console.log("Pets Availability after all requests are completed: ",petShopObj.getPetAvailabilityCount())