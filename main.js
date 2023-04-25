x = 0;
y = 0;


function preload() {
   im = loadImage('https://i.postimg.cc/zBbmp5x6/Untitled.png');
}
function setup () {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    PoseNet = ml5.poseNet(video, modalLoaded);
    PoseNet.on('pose', gotPoses);
}
 function modalLoaded() {
console.log("PoseNet is Initialized");
 }
 function gotPoses(results){
     if(results.length>0){
         console.log(results);

         x = results[0].pose.leftEye.x;
         y = results[0].pose.leftEye.y;
         
         console.log("nose x = "+ x);
         console.log("nose y = "+ y);
     }
 }

function draw () {
    image(video,0,0,300,300);
    image(im,x-21,y-25,60,60);

}
function take_snap() {
    save('myFilterimg.png');
}