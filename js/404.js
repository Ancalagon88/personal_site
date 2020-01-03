setInterval(function(){ TweenMax.to('#boat', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone}); }, 2000);
setInterval(function(){ TweenMax.to('#wave1', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone}); }, 2500);
setInterval(function(){ TweenMax.to('#wave2', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone}); }, 1500);
setInterval(function(){ TweenMax.to('#wave3', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone}); }, 2000);
setInterval(function(){ TweenMax.to('#wave4', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone}); }, 1000);

setInterval(function(){ 
  document.getElementById('cloud1').style.left = '-5%';
  TweenLite.to('#cloud1', 23, { ease: Power3.easeNone, left: '110%'}); }, 23000);
setInterval(function(){ 
  document.getElementById('cloud2').style.left = '-5%';
  TweenLite.to('#cloud2', 20, { ease: Power2.easeNone, left: '110%'}); }, 20000);
setInterval(function(){ 
  document.getElementById('cloud3').style.left = '-5%';
  TweenLite.to('#cloud3', 15, { ease: Power1.easeNone, left: '110%'}); }, 15000);

// init first movements
TweenLite.to('#cloud1', 23, { ease: Power3.easeNone, left: '110%'});
TweenLite.to('#cloud2', 20, { ease: Power2.easeNone, left: '110%'});
TweenLite.to('#cloud3', 15, { ease: Power1.easeNone, left: '110%'});
TweenMax.to('#wave4', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone});
TweenMax.to('#wave3', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone});
TweenMax.to('#wave2', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone});
TweenMax.to('#wave1', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone});
TweenMax.to('#boat', 3, {bezier:[{x:50, y:0}, {x:0, y:25}, {x:0, y:25}, {x:0, y:0}], ease:Linear.easeNone});

const audioPlayer = document.getElementById("audio");
const boat = document.getElementById("boat");
let volInc = 0

audioPlayer.volume = 0.0;
audioPlayer.autoplay = true;
var fadeAudio = setInterval(function () {
    if (audioPlayer.volume < 1.0 ) {
            if (volInc > 1) {
                volInc = 1;
            }
            audioPlayer.volume = volInc;
            volInc += .01;
        }
    if (audioPlayer.volume === 1.0) {
            clearInterval(fadeAudio);
        }
}, 500);


function playAudio(){
  if(audioPlayer.paused){;
    audioPlayer.play();
  }else{
    audioPlayer.pause();
  } 
}

function startAudio(){
  if (audioPlayer.volume === 1){
    clearInterval(fadeAudio)};
  playAudio();
}

boat.addEventListener("click", startAudio);
