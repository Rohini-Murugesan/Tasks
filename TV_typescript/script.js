var TV = /** @class */ (function () {
    function TV(songs) {
        this.songs = songs;
        this.totalSongs = songs.length;
        this.currentSong = songs[0];
        this.currentSongIndex = 0;
        generateCards(this.songs);
        console.log("Hello");
    }
    TV.prototype.addSong = function (song) {
        this.songs.push(song);
        this.totalSongs++;
    };
    TV.prototype.playSong = function () {
        return this.songs[this.currentSongIndex];
    };
    TV.prototype.getCurrentIndex = function () {
        return this.currentSongIndex;
    };
    TV.prototype.playNext = function () {
        if (this.currentSongIndex === this.totalSongs - 1) {
            this.currentSongIndex = 0;
        }
        else {
            this.currentSongIndex += 1;
        }
        addMusicSymbol();
        // let audio = <HTMLAudioElement>document.getElementById("audio")
        var video = document.getElementById("video");
        // audio.setAttribute("src", this.songs[this.currentSongIndex].songPath)
        video.setAttribute("src", this.songs[this.currentSongIndex].videopath);
        // audio.play()
        video.play();
        var button = document.getElementById("play-pause");
        button.innerHTML = "PAUSE <i class='fas fa-pause'>";
    };
    TV.prototype.playPrev = function () {
        if (this.currentSongIndex === 0) {
            this.currentSongIndex = this.totalSongs - 1;
        }
        else {
            this.currentSongIndex -= 1;
        }
        addMusicSymbol();
        // let audio = <HTMLAudioElement>document.getElementById("audio")
        var video = document.getElementById("video");
        // audio.setAttribute("src", this.songs[this.currentSongIndex].songPath)
        video.setAttribute("src", this.songs[this.currentSongIndex].videopath);
        // audio.play()
        video.play();
        var button = document.getElementById("play-pause");
        button.innerHTML = "PAUSE <i class='fas fa-pause'>";
    };
    return TV;
}());
var createElmAndSetAttr = function (AllAttributes, Elmtype) {
    var Elm = document.createElement(Elmtype);
    for (var attr in AllAttributes) {
        Elm.setAttribute(attr, AllAttributes[attr]);
    }
    return Elm;
};
//Display Songs
var generateCards = function (data) {
    var Main1 = document.getElementById("TV");
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        var Song = data[i];
        //card
        var carddiv = createElmAndSetAttr({ 'class': 'card mt-2', 'style': 'height:90px;width: 100%;' }, "div");
        Main1.append(carddiv);
        //row
        var cardrow = createElmAndSetAttr({ 'class': 'row' }, "div");
        carddiv.append(cardrow);
        //row - col 1
        var cardcol1 = createElmAndSetAttr({ 'class': 'col-2' }, "div");
        cardrow.append(cardcol1);
        //card img
        var cardImg = createElmAndSetAttr({ 'class': 'card-img', 'style': 'height:80px;width:80px', 'src': Song.imgPath }, "img");
        cardcol1.append(cardImg);
        //row - col 2
        var cardcol2 = createElmAndSetAttr({ 'class': 'col-8' }, "div");
        cardrow.append(cardcol2);
        //row - col 3
        var cardcol3 = createElmAndSetAttr({ 'class': 'col-2', 'id': 'col-id-' + i }, "div");
        cardrow.append(cardcol3);
        //card body
        var cardBody = createElmAndSetAttr({ 'class': 'card-body' }, "div");
        cardcol2.append(cardBody);
        var cardtext1 = createElmAndSetAttr({ 'class': 'card-text', 'id': 'song-name' }, "h6");
        cardtext1.innerText = Song.songName;
        var cardtext2 = createElmAndSetAttr({ 'class': 'card-text', 'id': 'artist' }, "span");
        cardtext2.innerText = Song.artist + " | ";
        var cardtext3 = createElmAndSetAttr({ 'class': 'card-text', 'id': 'release-year' }, "span");
        cardtext3.innerText = Song.releaseYear + " | ";
        var cardtext4 = createElmAndSetAttr({ 'class': 'card-text', 'id': 'song-type' }, "span");
        cardtext4.innerText = Song.songType;
        cardBody.append(cardtext1, cardtext2, cardtext3, cardtext4);
    }
};
var song1 = { songName: "Leja Re",
    artist: "Dhvani Bhanushali",
    releaseYear: "2019",
    songPath: ".\\songs\\Leja Re.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\Lejare.jpg",
    videopath: ".\\Videos\\Leja_Re.mp4" };
var song2 = { songName: "Blank Space",
    artist: "Taylor Swift",
    releaseYear: "2014",
    songPath: ".\\songs\\Blank Space.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\Blank-space.jpg",
    videopath: ".\\Videos\\Blank_Space.mp4" };
var song3 = { songName: "Love Story",
    artist: "Taylor Swift",
    releaseYear: "2008",
    songPath: ".\\songs\\Love Story.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\LoveStory.jpg",
    videopath: ".\\Videos\\Love_Story.mp4" };
var song4 = { songName: "Tera Ghata",
    artist: "Gajendra Verma",
    releaseYear: "2018",
    songPath: ".\\songs\\Tera Ghata.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\TeraGhata.jpg",
    videopath: ".\\Videos\\Tera_Ghata.mp4" };
var song5 = { songName: "You Are Not Alone",
    artist: "Michael Jackson",
    releaseYear: "1995",
    songPath: ".\\songs\\You Are Not Alone.mp3",
    songType: "Album song",
    imgPath: ".\\Images\\You_Are_Not_Alone.jpg",
    videopath: ".\\Videos\\You_Are_Not_Alone.mp4" };
var obj = new TV([song2, song1, song3, song4, song5]);
var currentSong = obj.playSong();
//audio obj
// let audio = <HTMLAudioElement>createElmAndSetAttr({'id':'audio','src':currentSong.songPath},"audio")
// audio.autoplay = false
// audio.muted = true
// let colDiv = document.getElementById("TV")
// colDiv.appendChild(audio);
//video obj
var video = createElmAndSetAttr({ 'id': 'video', 'width': '450', 'height': '500', 'src': currentSong.videopath }, "video");
video.autoplay = false;
var colDiv1 = document.getElementById("Video");
colDiv1.appendChild(video);
//<i class="fas fa-music"></i>
document.getElementById("play-pause").addEventListener("click", function () {
    // let audio = <HTMLAudioElement>document.getElementById("audio")
    var video = document.getElementById("video");
    var button = document.getElementById("play-pause");
    if (!video.paused) {
        // audio.pause()
        video.pause();
        button.innerHTML = 'PLAY <i class="fas fa-play-circle"></i>';
    }
    else {
        //card img2
        addMusicSymbol();
        // audio.play()   
        video.play();
        button.innerHTML = "PAUSE <i class='fas fa-pause'>";
    }
});
//prev
document.getElementById("previous").addEventListener("click", function () {
    obj.playPrev();
});
//next
document.getElementById("next").addEventListener("click", function () {
    obj.playNext();
});
var addMusicSymbol = function () {
    try {
        var cardImg2 = document.getElementById("now-playing");
        if (cardImg2) {
            cardImg2.remove();
        }
    }
    finally {
        var cardImg2 = createElmAndSetAttr({ 'class': 'card-img', 'style': 'height:4vw;width:3vw', 'src': '.\\Images\\music.png', 'id': 'now-playing' }, "img");
        var index = obj.getCurrentIndex();
        var cardcol3 = document.getElementById("col-id-" + index);
        cardcol3.append(cardImg2);
    }
};
