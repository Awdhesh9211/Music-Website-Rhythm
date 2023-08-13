const music = new Audio('Songs/1.mp3');

 // Step 1: Create the songarr array
var songarr = [
    { id: "1", songname: `Priyanka Chopra <br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/1.jpg" },
    { id: "2", songname: `Undead Army<br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/2.jpg" },
    { id: "3", songname: `Cocain Bear<br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/3.jpg" },
    { id: "4", songname: `Top 3 Stories<br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/4.jpg" },
    { id: "5",songname: `Mysteries<br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/5.jpg" },
    { id: "6", songname: `Prision break <br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/6.jpg" },
    { id: "7", songname: `Princess diana <br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/7.jpg" },
    { id: "8", songname: `Tesla <br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/8.jpg" },
    { id: "9", songname: `Osama<br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/9.jpg" },
    { id: "10", songname: `Attention<br><div class = "subtitle" >Podcast</div>`, postert: "PodcastPosters/10.jpg" },
   
]

Array.from(document.getElementsByClassName('songItems')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songarr[i].postert;
    e.getElementsByTagName('h5')[0].innerHTML=songarr[i].songname;
})


let index=0;
let poster=document.getElementById('small_poster');
let DownloadMusic = document.getElementById('DownloadMusic');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        poster.src=`PodcastPosters/${index}.jpg`;
        DownloadMusic.href=`PodcastSongs/${index}.mp3`;
        music.src=`PodcastSongs/${index}.mp3`;
        if (music.paused || music.currentTime<=0) {
            music.play();
        } else {
            music.pause();
        }
        
    })
})

// Scrolling=========================================================


let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
})

let pop_artist_left=document.getElementById('pop_artist_left');
let pop_artist_right=document.getElementById('pop_artist_right');
let item=document.getElementsByClassName('items1')[0];

pop_artist_right.addEventListener('click',()=>{
    item.scrollLeft+=330;
})
pop_artist_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
})
// Play - Left - Right ================================================================

let masterplay=document.getElementById('master_play'); 
let wave = document.getElementsByClassName('wave');
masterplay.addEventListener('click',()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        wave.classList.add('active2');
        masterplay.classList.remove("bi bi-play");
        masterplay.classList.add("bi bi-pause");
    } else {
        music.pause();
        wave.classList.remove('active2');
        masterplay.classList.add("bi bi-play");
        masterplay.classList.remove("bi bi-pause");
    }
})
// Left - Right ===============================
music.addEventListener('ended',()=>{
    if ( index==songarr.length){
        index=1;

    }
    else{
        index++;
    }
    music.src=`PodcastSongs/${index}.mp3`;
    poster.src=`PodcastPosters/${index}.jpg`;
    music.play();
})

const left_play=document.getElementById('left_play');
const right_play=document.getElementById('right_play');

left_play.addEventListener('click',()=>{
    if ( index==1){
        index=songarr.length;

    }
    else{
        index--;
    }
    music.src=`PodcastSongs/${index}.mp3`;
    poster.src=`PodcastPosters/${index}.jpg`;
    music.play();
})

right_play.addEventListener('click',()=>{
    if ( index==songarr.length){
        index=1;

    }
    else{
        index++;
    }
    music.src=`PodcastSongs/${index}.mp3`;
    poster.src=`PodcastPosters/${index}.jpg`;
    music.play();
})



// Seekbar ====================================================================

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }

    currentend.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentstart.innerText=`${min2}:${sec2}`;
    let progressbar = parseInt((music_curr/music_dur)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;

    dot.style.left=`${seekbar}%`;


})

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
})

// Volume bar================================================================

let volIcon = document.getElementById('V_icon');
let vol=document.getElementById('vol');
let volbar=document.getElementById('vol_bar1');
let voldot=document.getElementById('dot1');

vol.addEventListener('change',()=>{

    
    if(vol.value==0)
    {
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0)
    {
        
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.add('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50)
    {
        
        volIcon.classList.add('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    volbar.style.width=`${vol_a}%`;
    voldot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;

})

