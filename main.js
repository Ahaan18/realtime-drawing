nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
   video = createCapture(VIDEO);
   video.size(550, 500);
   x = ml5.poseNet(video, gotposes);
   x.on('pose', poses);
}
function gotposes(){
    console.log("got poses");
}
function poses(result){
if(result.length > 0){
    console.log(result);
    nosex = result[0].pose.nose.x;
    nosey = result[0].pose.nose.y;
    leftwristx = result[0].pose.leftWrist.x;
    rightwristx = result[0].pose.rightWrist.x;
    difference = floor(leftwristx - rightwristx);
    console.log(nosex, nosey, leftwristx, rightwristx, difference);
}
}
function draw(){
background('#A020F0');
document.getElementById('d').innerHTML = "Width and height of the square will be: "+difference+"px";
fill('#00FF00');
stroke("#FFFF00");
square(nosex, nosey, difference);
}