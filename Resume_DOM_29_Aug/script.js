
// ATTRIBUTES FOR ALL ELEMENTS
var main_div_obj = {'style': 'background-color: #585c5b;height: 300px;width:60%;margin: auto'}
var div2_obj = {'class':'relative','style':'background-color: #ebeded;height: 30px;width:800px;margin: auto;'}
var avatar_obj = {'src':'empty-avatar.png','height':'200px','width':'30%','class':'avatar'}
var NameTag_obj = {'class':'NameTag'}
var Contact_Info_obj = {'style':'font-size:small;position: absolute;top: 330px;width:59%;text-align: center'}
var main_table_obj = {'style' : 'justify-content:center;position: relative;top:130px;width:100;'}
var td1_obj = {"style":"padding-right:20px;border-right:2px solid darkgrey;width: 50%","class":"side-heading"}
var profile_img_obj = {"src":"profile.png","style":"border-radius: 50%;border: 4px dotted #d9c10b"}
var skills_img_obj = {"src":"Skills.png","style":"border-radius: 50%;border: 4px dotted #d9c10b"}
var range_slider_obj = {"type":"range","min":"1","max":"100","value":"50"}
var table_skills_obj = {"style":"width: 100%;font-size: 14px"}
var skills_td_obj = {"colspan":"2","align":"center"}
var work_exp_img_obj = {"src":"WorkExp.png","style":"border-radius: 50%;border: 4px dotted #d9c10b"}
var work_exp_span_obj = {"style":"font-size: 14px;line-height: 1px"}
var td2_obj = {"style":"padding-left:20px;position:relative;top:0px","class":"side-heading"}
var edu_img_obj = {"src":"Education.png","style":"border-radius: 50%;border: 4px dotted #d9c10b"}




li_list = ["Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.",
"Brought new bushiest to the organization through relentless networking and stewardship which helped the company wn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women",
"Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations."]


li_list1 = ["Arranging presentations and pitch deck.",
"Designing a PR plan and establishing important focus points.",
"Designing, creating and managing content across multiple communication platforms.",
"Building relationships with key media players.",
"Brought new bushiest to the organization through relentless networking and stewardship which helped the company wn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women"]


li_list2 = ["Developed a full•stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.",
"Developed a language learning app, 'Foodie Phonetics' using spaced repetition and a Ihked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.",
"Developed a concierge app, 'Pley', for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-devebped RESTful API, Geospatial searching, and user authentication with JWT"]

// To set all the attributes
var create_Elm_And_Set_Attr = function(AllAttributes,Elmtype){
    console.log("hy",Elmtype)
    var Elm = document.createElement(Elmtype)
    for(attr in AllAttributes){
        Elm.setAttribute(attr,AllAttributes[attr])
    }
    return Elm
}

var create_range_slider = function(RangeName){
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    td1.innerHTML = RangeName
    var td2 = document.createElement('td')
    input = create_Elm_And_Set_Attr(range_slider_obj,'input')
    td2.append(input)
    tr.append(td1,td2)
    return tr
}

var add_li = function(ul_tag,li_List){
        for(li_val of li_List){
            var li = document.createElement('li')
            li.innerHTML = li_val
            ul_tag.append(li)
        }
        return ul_tag
}