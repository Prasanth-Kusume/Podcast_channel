
let rangeEl=document.getElementById("podcast-range");
let songEl=document.getElementById("audio");
    let playBtn=document.getElementById("pbtn");
   

    let isPlaying = false;
songEl.onloadedmetadata=function() {
     rangeEl.max=songEl.duration;
     rangeEl.value=songEl.currentTime;
}



playBtn.onclick = function () {
 if (isPlaying) {
     songEl.pause();
     playBtn.classList.remove("fa-pause");
     playBtn.classList.add("fa-play");
 } else {
     songEl.play();
     playBtn.classList.add("fa-pause");
     playBtn.classList.remove("fa-play");

 }
 isPlaying = !isPlaying   
} 
rangeEl.onchange = function() {
   songEl.currentTime=rangeEl.value;
   songEl.play()
   playBtn.classList.add("fa-pause");
     playBtn.classList.remove("fa-play");
} 

if (songEl.play()===true) {
 songEl.load()
  setInterval(() => {
           rangeEl.value=songEl.currentTime;
  },500);
  
}

/*--------------JS FOR SONGS SWITCHING AND LOADING----------------------*/
let  music=[
 {
    music_path:"testing_songs/privateparty.mp3",
    artist_photo:"images/thaman.jpg",
},
{
    music_path:"testing_songs/musthaffa.mp3",
    artist_photo:"images/rahman.jpg",
},
{
    music_path:"testing_songs/badass.mp3",
    artist_photo:"images/anirudh.jpg",
   

},
{
    music_path:"testing_songs/whoareyou.mp3",
    artist_photo:"images/dsp.jpeg",

},

{
    music_path:"testing_songs/temper.mp3",
    artist_photo:"images/anup.jpg",

}
 
]


let podcast_player=document.getElementById("podcast-player");
// let song_nameEl=document.getElementById("song_name");
// let artist_nameEl=document.getElementById("artist_name");
// let song_pathEl=document.getElementById("song");
let forwardbtnEl=document.getElementById("forwardbtn");
let backwardbtnEl=document.getElementById("backwardbtn");

window.onload = function() {
  let currentMusic=0;
  addthemusic(music[0])

};

let currentMusic=0;
forwardbtnEl.addEventListener('click',() => {

if (currentMusic >=0 && currentMusic <(music.length)) {
        currentMusic=currentMusic+1;

        addthemusic();
}
else if (currentMusic== music.length) {
    currentMusic=0;
    songEl.load()
    addthemusic(music[0]);
}
})
backwardbtnEl.addEventListener('click',function() {

if (currentMusic >0 && currentMusic <=(music.length)) {
        currentMusic=currentMusic-1;

        addthemusic();
}
else if (currentMusic== 0) {
     currentMusic=music.length;
    songEl.load()
    addthemusic(music[music.length]);
}
})


function addthemusic() {
songEl.load();
let song = music[currentMusic];

podcast_player.style.backgroundImage = 'url("' + song.artist_photo + '")';
podcast_player.style.backgroundSize = 'cover';
podcast_player.style.backgroundRepeat = 'no-repeat';

songEl.src = song.music_path;


songEl.addEventListener('canplay', function () {
    if (isPlaying) {
        songEl.play();
    }
});


songEl.ontimeupdate = function () {
    rangeEl.value = songEl.currentTime;
};


songEl.addEventListener('playing', function () {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
});


songEl.addEventListener('pause', function () {
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
});
}


let crossbtn=document.getElementById("crossbtn");
let listennowbtn=document.getElementById("listennowbtn");

  listennowbtn.addEventListener('click',function() {
         podcast_player.style.display="flex";
         const page = podcast_player.getAttribute('data-page');
         let song;
switch (page) {
case 'homepage':
  song = music[0];
  break;
  default:
    song = music[0];
}
    podcast_player.style.backgroundImage = 'url("' + song.artist_photo + '")';            
    currentMusic = music.indexOf(song);
    addthemusic(); 
         

  })

  crossbtn.addEventListener('click', function() {
    podcast_player.classList.add('music-player-invisible');
    podcast_player.style.display="none";
    // podcast_player.style.width="0px";
    songEl.pause()  
  });






