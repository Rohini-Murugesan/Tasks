var createElmAndSetAttr = function(AllAttributes,Elmtype){
    var Elm = document.createElement(Elmtype)
    for(attr in AllAttributes){
        Elm.setAttribute(attr,AllAttributes[attr])
    }
    return Elm
}

var validateExp = function(){
    var exp = document.getElementById('inputVal').value
    try{
    document.getElementById('inputVal').value = eval(exp)
    }
    catch{
        alert("Invalid Input!!")
        document.getElementById('inputVal').value = ''
    }
}
document.onkeydown = function (e){
    console.log(e)
    charCode = e.keyCode
    if(e.key==="Enter"){
        validateExp()
    }else if((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)){
        if(!e.ctrlKey){
        alert("Invalid Input!!")
        document.getElementById('inputVal').value = ''
        }
    }
}


function onClickElm(button_val){
    button_val = String(button_val).trim()
    //console.log(button_val,typeof button_val)
    if(button_val==='AC' || button_val==="C"){
        document.getElementById('inputVal').value = ''
    }else if(button_val==='<---'){
        let val = document.getElementById('inputVal').value.split('')
        val.pop()
        document.getElementById('inputVal').value = val.join('')
    }else if(button_val === '='){
        validateExp()
    }else{
    document.getElementById('inputVal').value += String(button_val)
    }

}


//div
var maindiv_obj = {'class':'maindiv'}
var divmain = createElmAndSetAttr(maindiv_obj,'div')
document.body.appendChild(divmain)

var calcDiv_obj = {'class':'calcDiv'}
var calcDiv = createElmAndSetAttr(calcDiv_obj,'div')
calcDiv.innerHTML = "CALCULATOR"
divmain.appendChild(calcDiv)

//input
var input_main_obj = {'class':'inputVal','type':'text','id':'inputVal'}
divmain.appendChild(createElmAndSetAttr(input_main_obj,'input'))


var button_obj = {'type':'button','class':'button-class'}
var buttons_list = [' . ',' AC ',' C ', ' + ',' 9 ',' 8 ',' 7 ',' - ',' 6 ',' 5 ',' 4 ',' * ',' 3 ',' 2 ',' 1 ',' / ',' <--- ',' 0 ',' = ',' % ']
divkeys = createElmAndSetAttr({'class':'keys'},'div')
for(list in buttons_list){
    button_obj.value = buttons_list[list]
    button_obj.id = 'id-'+ list
    button_obj.onclick = "onClickElm('"+button_obj.value+"')"
    button_elm = createElmAndSetAttr(button_obj,'input')
    //button_elm.addEventListener('click', onClickElm(button_obj)); 
    divkeys.appendChild(button_elm)
}
divmain.appendChild(divkeys)


