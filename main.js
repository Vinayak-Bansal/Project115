nosex=0
nosey=0
function preload(){
mushtasenose=loadImage("mustache.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotposes)
}
function draw(){
image(video ,0,0,300,300 )
image(mushtasenose,nosex,nosey,80,35)
}
function hello(){
save("img.png")
}
function modeLoaded (){
console.log("posenet is inaitiled")
}
function gotposes(results){
    if(results.length>0){
    nosex=results[0].pose.nose.x-40
    nosey=results[0].pose.nose.y
    }
}