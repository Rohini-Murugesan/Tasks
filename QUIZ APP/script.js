// index.html                                                       
const MAX_QUES = 10
let currentQues = 1
let currentScore = 0
let APIDetails;

var createElmAndSetAttr = function(AllAttributes,Elmtype){
    var Elm = document.createElement(Elmtype)
    for(attr in AllAttributes){
        Elm.setAttribute(attr,AllAttributes[attr])
    }
    return Elm
}


let displayHighScores = ()=>{
    // localStorage.setItem("HighScores",JSON.stringify({demo:10,demo1:20,demo2:30,demo4:50}))
    let results = JSON.parse(localStorage.getItem("HighScores"))
    highScores = document.getElementById("high-scores")
    if(results!==null){     
        let k = Object.keys(results).slice(0,9).sort(function(a,b){return results[b]-results[a]})
        // console.log(k)
        for(i=0;i<k.length;i++){
            let span = createElmAndSetAttr({"class":"mt-2 text-danger"},"p")
            span.innerText = k[i].toUpperCase()  + " - " +results[k[i]]
            highScores.append(span)
        }
    }else{
        let span = createElmAndSetAttr({},"p")
            span.innerText = "No highscores yet"
            highScores.append(span)
    }
}


let saveHighScore = ()=>{
    let results = JSON.parse(localStorage.getItem("HighScores"))
    if(results===null){
        results = {}
    }
    let userName = document.getElementById("username").value
    let score = JSON.parse(localStorage.getItem("currentScore"))
    results[userName] = score
    localStorage.setItem("HighScores",JSON.stringify(results))
    document.getElementById("saveScoreBtn").disabled = true
    document.getElementById("username").disabled = true
    alert("Score Saved")
}


async function getQuestions(){
    let url = "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple"
    let apiData = await fetch(url)
    let questions = await apiData.json()
    // console.log(questions)
    return questions
}



//APIDetails

let createQuestionsPage = (questions)=>{    
    //container
    divC = createElmAndSetAttr({'class':'container','id':'container1'},"div")
    document.body.append(divC)
    //row
    divR = createElmAndSetAttr({'class':'row mt-5'},"div")
    divC.append(divR)
    
    //div1
    divcol1 = createElmAndSetAttr({'class':'col-md-6 col-sm-6 text-info text-center font-weight-bold','id':'high-scores'},"div")
    span1 = createElmAndSetAttr({'style':'font-size: 25px;','id':'progress'},"span")
    span1.innerText = "Question "+currentQues+"/"+ MAX_QUES
    div1 = createElmAndSetAttr({'class':'progress mt-2'},"div")
    div2 = createElmAndSetAttr({'class':'progress-bar bg-info progress-bar-striped','role':'progressbar','style':'width: '+currentQues*10+'%','aria-valuenow':'1','aria-valuemin':'0','aria-valuemax':MAX_QUES,'id':'progress-bar'},"div")
    div1.append(div2)
    divcol1.append(span1)
    divcol1.append(div1)
    
    
    //div2
    divcol2 = createElmAndSetAttr({'class':'col-md-6 col-sm-6 text-info text-center font-weight-bold'},"div")
    span = createElmAndSetAttr({"class":"text-info",'style':'font-size: 25px;'},"span")
    span.innerText = "Score"
    span2 = createElmAndSetAttr({"class":"text-info d-block",'style':'font-size: 25px;','id':'score'},"span")
    span2.innerText = currentScore
    divcol2.append(span,span2)
    divR.append(divcol1,divcol2)


    //Ques
    createQuestionAndChoices(questions,currentQues)

}

let createQuestionAndChoices = (questions,currentQues)=>{
    
    divC = createElmAndSetAttr({'class':'container','id':'container2'},"div")
    document.body.append(divC)
    divR = createElmAndSetAttr({'class':'row mt-5'},"div")
    divC.append(divR)

    // Question
    divcol1 = createElmAndSetAttr({'class':'text-info text-center font-weight-bold'},"div")
    span1 = createElmAndSetAttr({'id':'question','style':'font-size: 20px;'},"span")
    span1.innerHTML = questions.results[currentQues-1].question
    divcol1.append(span1)
    divR.append(divcol1)


    let correctAns = questions.results[currentQues-1].correct_answer
    let Choices =  [...questions.results[currentQues-1].incorrect_answers]
    let rand = Math.floor(Math.random() * 4) + 1  
    Choices.splice(rand-1, 0, correctAns);
    // console.log(rand-1,Choices,correctAns)
    let options = ['A','B','C','D']
    Choices.forEach(element => {
            // Choices
        divR = createElmAndSetAttr({'class':'row mt-3'},"div")
        divC.append(divR)
        let id = Choices.indexOf(element)
        divcol1 = createElmAndSetAttr({'class':'p-1 m-1 border border-info bg-info text-info text-center font-weight-bold'},"div")
        span1 = createElmAndSetAttr({'id':'question','style':'font-size: 20px;color:white'},"span")
        span1.innerHTML = options[id]
        divcol1.append(span1)
        
        let choice = "choice-"+id
        divcol2 = createElmAndSetAttr({'style':'color:#217eb0','id':choice,'class':'choice-text col-4 col-sm-3 m-1 border border-info text-left font-weight-bold'},"div")
        span2 = createElmAndSetAttr({'id':'question','style':'font-size: 20px;'},"span")
        span2.innerHTML = element
        divcol2.append(span2)
        divR.append(divcol1,divcol2)
        divcol2.setAttribute("onClick","validateAnswer(this.id)")
        
        
    });
    
    divR = createElmAndSetAttr({'class':'row mt-3'},"div")
    divC.append(divR)
    Button = createElmAndSetAttr({"class":"btn btn-primary bg-info d-block m-2","role":"button",'id':'Next','onClick':'nextQuestion()'},"button")
    Button.innerText = "Next"
    Button.disabled = true
    span3 = createElmAndSetAttr({'id':'result','style':'font-size: 15px;font-weight:bolder','class':'text-danger'},"span")
    divC.append(span3)
    divR.append(Button)
}

let nextQuestion = ()=>{
    if(currentQues< MAX_QUES){
        // console.log(currentQues)
        currentQues++;
        document.getElementById("container2").remove()
        createQuestionAndChoices(APIDetails,currentQues)   
        document.getElementById("progress").innerText = "Question "+currentQues+"/"+ MAX_QUES
        document.getElementById('progress-bar').setAttribute('style','width: '+currentQues*10+'%')
    }else if(currentQues === MAX_QUES){
        location.href = "end.html";
        localStorage.setItem("currentScore",JSON.stringify(currentScore))
    }
}


let validateAnswer = (id)=> {
    element = document.getElementById(id).innerText
    // console.log(APIDetails,currentQues,element,id)
    if(APIDetails.results[currentQues-1].correct_answer === element){
        document.getElementById(id).style.backgroundColor = "#2cad18"
        currentScore += 10
        document.getElementById("score").innerText = currentScore
        document.getElementById("result").setAttribute('class','text-success')
        document.getElementById("result").innerText = "Right Answer!!!"     
    }else{
        document.getElementById(id).style.backgroundColor = "#ff4133"
        document.getElementById("result").innerText = "Right answer is "+APIDetails.results[currentQues-1].correct_answer
    }
    document.getElementById(id).style.color = "white"
    let Arr = ['choice-0','choice-1','choice-2','choice-3']
    Arr.forEach(val => {
        document.getElementById(val).removeAttribute('onClick')
    });
    document.getElementById('Next').disabled = false
}