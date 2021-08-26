const video=document.getElementById('video');
const controls=document.querySelector('.controls');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');

video.addEventListener('click',togglevideo);
video.addEventListener('play',playvideo)
video.addEventListener('pause',playvideo);
video.addEventListener('timeupdate',updatevideo);
play.addEventListener('click',togglevideo);
stop.addEventListener('click',stopvideo);
progress.addEventListener('click',updatevideoprogress);

function togglevideo(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
function playvideo(){
    if(video.paused){
        play.innerHTML=`<i class="fas fa-play fa-2x"></i>`;
    }else{
        play.innerHTML=`<i class="fas fa-pause fa-2x"></i>`;
    }
}
function updatevideo(){
    let mins=Math.floor(video.currentTime/60);
    if(mins<10){
        mins="0"+mins;
    }

    let secs=Math.floor(video.currentTime%60);
    if(secs<10){
        secs="0"+secs;

    }

    timestamp.innerText=`${mins} : ${secs}`;
}
function stopvideo(){
    video.currentTime=0;
    video.pause();
}
function updatevideoprogress(){
    video.currentTime=(progress.value*video.duration)/100;
}