function preload(){

}
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Pose net is initialised");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log('nose x :-' + results[0].pose.nose.x);
        console.log('nose y :-' + results[0].pose.nose.y);
    }
}
function draw(){
    
}
function take_snapshot(){
    save('myFilterImage.png');
}