nose_x=0;
nose_y=0;

function preload(){
lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}
classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
console.log("model is loaded");
}


function draw(){
  image(video,0,0,300,300);
  image(lipstick,nose_x,nose_y,40,30);

}

function take_snapshot(){
    save("your_pic.png");
}

function gotPoses(results){
    if(results.length>0)
    {console.log(results);
    nose_x=results[0].pose.nose.x-20;
    nose_y=results[0].pose.nose.y+15;
    console.log("nose x="+nose_x);
console.log("nose y="+nose_y);
}
}