type typeOfSong = "Movie song" | "Album song";
interface songconfig{
    songName: string,
    artist: string,
    releaseYear: string,
    songPath: string,
    songType: typeOfSong,
    imgPath:string
}
class TV{
    songs:Array<songconfig>
    currentSong: songconfig
    currentSongIndex: number
    totalSongs: number
    constructor(songs:Array<songconfig>){
        this.songs = songs
        this.totalSongs = songs.length
        this.currentSong = songs[0]
        this.currentSongIndex = 0
        generateCards(this.songs)
        console.log("Hello")
    }

    addSong(song: songconfig):void{
        this.songs.push(song)
        this.totalSongs++
    }
    playSong(): songconfig{
        return this.songs[this.currentSongIndex]
    }

    getCurrentIndex():number{
        return this.currentSongIndex
    }
    playNext(): void{

        if(this.currentSongIndex=== this.totalSongs-1){
            this.currentSongIndex = 0
        }else{
            this.currentSongIndex += 1
        }
        addMusicSymbol()
        let audio = <HTMLAudioElement>document.getElementById("audio")
        audio.setAttribute("src", this.songs[this.currentSongIndex].songPath)
        audio.play()
        let button = <HTMLButtonElement> document.getElementById("play-pause")
        button.innerHTML = "PAUSE <i class='fas fa-pause'>"
    }

    playPrev():void{
        if(this.currentSongIndex=== 0){
            this.currentSongIndex = this.totalSongs - 1
        }else{
            this.currentSongIndex -= 1
        }
    addMusicSymbol() 
    let audio = <HTMLAudioElement>document.getElementById("audio")
    audio.setAttribute("src", this.songs[this.currentSongIndex].songPath)
    audio.play()
    let button = <HTMLButtonElement> document.getElementById("play-pause")
    button.innerHTML = "PAUSE <i class='fas fa-pause'>"
    }

}

let createElmAndSetAttr = function(AllAttributes:Record<string,string>,Elmtype:string):HTMLElement{
    var Elm = document.createElement(Elmtype)
    for(let attr in AllAttributes){
        Elm.setAttribute(attr,AllAttributes[attr])
    }
    return Elm
} 

//Display Songs
let generateCards = function(data:Array<songconfig>){
    let Main1 = document.getElementById("TV")
    for(let i=0;i<data.length;i++){
        console.log(data[i])
        let Song = data[i]
        //card
        let carddiv = createElmAndSetAttr({'class':'card mt-2','style':'height:90px;width: 100%;'},"div")
        Main1.append(carddiv)

        //row
        let cardrow = createElmAndSetAttr({'class':'row'},"div")
        carddiv.append(cardrow)

        //row - col 1
        let cardcol1 = createElmAndSetAttr({'class':'col-2'},"div")
        cardrow.append(cardcol1)

        //card img
        let cardImg = createElmAndSetAttr({'class':'card-img','style':'height:80px;width:80px','src':Song.imgPath},"img")
        cardcol1.append(cardImg)

        //row - col 2
        let cardcol2 = createElmAndSetAttr({'class':'col-8'},"div")
        cardrow.append(cardcol2)

        //row - col 3
        let cardcol3 = createElmAndSetAttr({'class':'col-2','id':'col-id-'+i},"div")
        cardrow.append(cardcol3)

        //card body
        let cardBody = createElmAndSetAttr({'class':'card-body'},"div")
        cardcol2.append(cardBody)

        let cardtext1 = createElmAndSetAttr({'class':'card-text','id':'song-name'},"h6")
        cardtext1.innerText = Song.songName 
        let cardtext2 = createElmAndSetAttr({'class':'card-text','id':'artist'},"span")
        cardtext2.innerText = Song.artist + " | "
        let cardtext3 = createElmAndSetAttr({'class':'card-text','id':'release-year'},"span")
        cardtext3.innerText =  Song.releaseYear + " | "
        let cardtext4 = createElmAndSetAttr({'class':'card-text','id':'song-type'},"span")
        cardtext4.innerText = Song.songType
        cardBody.append(cardtext1,cardtext2,cardtext3,cardtext4)
        
    }
}

let song1:songconfig = { songName: "Leja Re",
    artist: "Dhvani Bhanushali",
    releaseYear: "2019",
    songPath: ".\\songs\\Leja Re.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\Lejare.jpg"}

let song2:songconfig = { songName: "Blank Space",
    artist: "Taylor Swift",
    releaseYear: "2014",
    songPath: ".\\songs\\Blank Space.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\Blank-space.jpg"}

let song3:songconfig = { songName: "Love Story",
    artist: "Taylor Swift",
    releaseYear: "2008",
    songPath: ".\\songs\\Love Story.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\LoveStory.jpg"}
    
let song4:songconfig = { songName: "Tera Ghata",
    artist: "Gajendra Verma",
    releaseYear: "2018",
    songPath: ".\\songs\\Tera Ghata.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\TeraGhata.jpg"}
    
let song5:songconfig = { songName: "You Are Not Alone",
    artist: "Michael Jackson",
    releaseYear: "1995",
    songPath: ".\\songs\\You Are Not Alone.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\You_Are_Not_Alone.jpg"}



let obj = new TV([song2,song1,song3,song4,song5])
let currentSong = obj.playSong()

//audio obj
let audio = <HTMLAudioElement>createElmAndSetAttr({'id':'audio','src':currentSong.songPath},"audio")
audio.autoplay = false
let colDiv = document.getElementById("TV")
colDiv.appendChild(audio);

//<i class="fas fa-music"></i>

(<HTMLButtonElement>document.getElementById("play-pause")).addEventListener("click", function(){
    let audio = <HTMLAudioElement>document.getElementById("audio")
    let button = <HTMLButtonElement> document.getElementById("play-pause")
    if(!audio.paused){
        audio.pause()
        button.innerHTML = 'PLAY <i class="fas fa-play-circle"></i>'
    }else{
        //card img2
        addMusicSymbol()
        audio.play()   
        button.innerHTML = "PAUSE <i class='fas fa-pause'>"

    }
});

//prev
(<HTMLButtonElement>document.getElementById("previous")).addEventListener("click", function(){
    obj.playPrev()
});

//next
(<HTMLButtonElement>document.getElementById("next")).addEventListener("click", function(){
    obj.playNext()
});

let addMusicSymbol = function(){

    try{
        let cardImg2 = document.getElementById("now-playing")
        if(cardImg2){cardImg2.remove()}
        

    }finally{
        let cardImg2 = createElmAndSetAttr({'class':'card-img','style':'height:6vw;width:6vw','src':'.\\Images\\music.gif','id':'now-playing'},"img")
        let index = obj.getCurrentIndex()
        let cardcol3 = document.getElementById("col-id-"+index)
        cardcol3.append(cardImg2)
    }

}

