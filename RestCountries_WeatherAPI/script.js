

let p =  fetch("https://restcountries.eu/rest/v2/all")
p.then(function(response){
    return response.json()
})
.then(function(data){
    generateCards(data)
})
.catch(function(error){
    console.log(error)
})


let getWeatherDetails = function(capital){
    let URL = "https://api.openweathermap.org/data/2.5/weather?q=" + capital + "&appid=51ea188a97625ddf670379a1aa8e42ca"
    let p =  fetch(URL)
    p.then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        displayWeatherDetails(data)
    }).catch(function(err){
        console.log(err)
    })
}

let displayWeatherDetails = function(data){
document.getElementById("temp").innerText = "TEMPERATURE : "+data.main.temp
document.getElementById("feels_like").innerText = "FEELS LIKE : "+data.main.feels_like
document.getElementById("pressure").innerText = "PRESSURE : "+data.main.pressure
document.getElementById("temp_max").innerText = "TEMP MAX : "+data.main.temp_max
document.getElementById("temp_min").innerText = "TEMP MIN : "+data.main.temp_min
document.getElementById("humidity").innerText = "HUMIDITY : "+data.main.humidity
document.getElementById("title").innerText = "Weather Details  -  "+data.sys.country+" - "+data.name
}

let createElmAndSetAttr = function(AllAttributes,Elmtype){
    var Elm = document.createElement(Elmtype)
    for(attr in AllAttributes){
        Elm.setAttribute(attr,AllAttributes[attr])
    }
    return Elm
}    

let generateCards = function(data){
    maindiv = createElmAndSetAttr({'class':'container'},"div")
    rowdiv = createElmAndSetAttr({'class':'row'},"div")
    maindiv.append(rowdiv)
    document.body.append(maindiv)
    for(i=0;i<data.length;i++){
        console.log(data[i])
        country = data[i]
        //card
        carddiv = createElmAndSetAttr({'class':'card m-5 ','style':'height:420px;width:250px'},"div")
        rowdiv.append(carddiv)

        //card header
        cardheader = createElmAndSetAttr({'class':'card-header header'},"div")
        cardheader.innerText = country.name
        carddiv.append(cardheader)

        //card img
        cardImg = createElmAndSetAttr({'class':'card-img p-2','style':'height:150px;width:250px','src':country.flag},"img")
        carddiv.append(cardImg)
        cardBody = createElmAndSetAttr({'class':'card-body'},"div")
        carddiv.append(cardBody)
        //card body
        cardtext1 = createElmAndSetAttr({'class':'card-text'},"p")
        cardtext1.innerText = "Capital : "+country.capital
        cardBody.append(cardtext1)

        //card body
        cardtext2 = createElmAndSetAttr({'class':'card-text'},"p")
        cardtext2.innerText = "Region : "+country.region
        cardBody.append(cardtext2)

        //card body
        cardtext3 = createElmAndSetAttr({'class':'card-text'},"p")
        cardtext3.innerText = "Country Code : "+country.alpha3Code
        cardBody.append(cardtext3)        
        
        
        //card body
        button = createElmAndSetAttr({'class':'btn btn-primary','data-toggle':'modal','data-target':'#Modal1','onclick':'getWeatherDetails("'+country.capital+'")'},"button")
        button.innerText = "Click for Weather"
        cardBody.append(button)  
    }
}

//modal
modalDiv = createElmAndSetAttr({'class':'modal','id':'Modal1'},"div")
modalDia = createElmAndSetAttr({'class':'modal-dialog'},"div")
modalContent = createElmAndSetAttr({'class':'modal-content'},"div")
modalHeader = createElmAndSetAttr({'class':'modal-header'},"div")
h5 = createElmAndSetAttr({'class':'modal-title','id':'title'},'h5')
// h5.innerText = "Weather Details "
button = createElmAndSetAttr({'type':'button','class':'close','data-dismiss':'modal','aria-label':'Close'},"button")
span = createElmAndSetAttr({'aria-hidden':'true'},'span')
span.innerText = "x"
button.append(span)
modalHeader.append(h5)
modalHeader.append(button)
modalContent.append(modalHeader)
modalDia.append(modalContent)
modalDiv.append(modalDia)

//modalbody
modalBody = createElmAndSetAttr({'class':'modal-body'},"div")
p1 = createElmAndSetAttr({'id':'temp'},'p')
p2 = createElmAndSetAttr({'id':'feels_like'},'p')
p3 = createElmAndSetAttr({'id':'pressure'},'p')
p4 = createElmAndSetAttr({'id':'temp_max'},'p')
p5 = createElmAndSetAttr({'id':'temp_min'},'p')
p6 = createElmAndSetAttr({'id':'humidity'},'p')
modalBody.append(p1,p2,p3,p4,p5,p6)
modalContent.append(modalBody)
document.body.append(modalDiv)








