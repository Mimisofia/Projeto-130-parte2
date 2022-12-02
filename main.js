song1
song2

song1_status =
 song2_status =

 scoreRightwrist = 0;
 scoreLeftwrist = 0;

 rightwristx = 0;  
rightwristy = 0;

leftwristx = 0;
 leftwristy = 0;
function preload()
{
song1 = loadSound("music1.mp3");
song2 = loadSound("music2.mp3");

}
 function setup() {
canvas = createCanvas(600, 500); canvas.center();
video = createCapture (VIDEO); video.hide();
poseNet = m15. poseNet (video, modelLoaded); 
poseNet.on('pose', gotPoses);
}
function modelLoaded () {
console.log('PoseNet Is Initialized');

}
   function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
scoreRightWrist = results[0].pose.keypoints [10].score; 
scoreLeftwrist results[0].pose.keypoints[9].score;
console.log("scoreRightWrist + scoreRightWrist + " scoreLeftwrist + scoreLeftwrist);

rightwristx = results[0].pose.rightwrist.x; 
rightwristy results[0].pose.rightwrist.y;
console.log("rightwristx = " + rightwristx +" rightwristy = "+ rightwristy);

leftwristX = results[0].pose.leftwrist.x; 
leftwristY results[0].pose.leftwrist.y;
console.log("leftwristx = " + leftwristx +" leftwristy = "+ leftwristy);
}
}

function draw() {
image(video, 0, 0, 600, 500);
song1_status = song1.isPlaying();
song2_status = song2.isplaying();
fill("#FF0000");
stroke("#FF0000");
 if(scoreRightWrist > 0.2)
{
circle(rightwristx, rightwristy, 20);
song2.stop();
}
if(song1_status -- false)
{
songi.play();
document.getElementById("song").innerHTML = "Tocando: BEAT IT-Michael Jackson!"

}

}
if(scoret leftwrist > 0.2)
{
circle(leftwristx, leftwristy, 20);
song1.stop();
if(song2_status -- false)
{
song2.play();
document.getElementById("song").innerHTML="Tocando: Evidências-Xitãozinho e Xororó!"
}

function play()
{
song.play(); 
song.setVolume(1); 
song.rate(1);
}
}