diffrence = 0;

right_wrist_X = 0;
left_wrist_x = 0;

function setup(){
    canvas = createCanvas(500 , 500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(500,500)

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("#84FAD2");
    document.getElementById("font_size").innerHTML = "font_size will be : " +diffrence+"px";
    textSize(diffrence);
    fill("#FF4900");
    text("Kunal Rana ", 50 , 400);
}

function modalLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        right_wrist_X = results[0].pose.rightWrist.x;
        left_wrist_x =  results[0].pose.leftWrist.x;
        diffrence = floor(left_wrist_x - right_wrist_X);
        console.log("left Wrist X = "+ left_wrist_x + "Right Wrist X ="+right_wrist_X + "Diffrence"+ diffrence);
    }
}