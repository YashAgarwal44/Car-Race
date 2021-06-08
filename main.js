canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_x = 10;
car2_x = 10;
car1_y = 10;
car2_y = 100;
background_img = "RaceTrack.jpg";
car1_img = "Car1.jpg";
car2_img = "Car2.jpg";
car1_height = 70;
car1_width = 100;
car2_height = 70;
car2_width = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.src = background_img;
    background_imgTag.onload = uploadBackground;

    car1_imgTag = new Image();
    car1_imgTag.src = car1_img;
    car1_imgTag.onload = uploadCar1;

    car2_imgTag = new Image();
    car2_imgTag.src = car2_img;
    car2_imgTag.onload = uploadCar2;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keyDown);
function my_keyDown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (key_pressed == "38") {
        car1Up();
        console.log("car1_up");
    }
    if (key_pressed == "40") {
        car1Down();
        console.log("car1_down");
    }
    if (key_pressed == "37") {
        car1Left();
        console.log("car1_left");
    }
    if (key_pressed == "39") {
        car1Right();
        console.log("car1_right");
    }
    if (key_pressed == "87") {
        car2Up();
        console.log("car2_up");
    }
    if (key_pressed == "83") {
        car2Down();
        console.log("car2_down");
    }
    if (key_pressed == "65") {
        car2Left();
        console.log("car2_left");
    }
    if (key_pressed == "68") {
        car2Right();
        console.log("car2_Right");
    }
    if(car1_x > 700){
        console.log("Car1 Won!")
        document.getElementById("game_status").innerHTML = "Car 1 Won!!";
    }
    
    if(car2_x > 700){
        console.log("Car2 Won!")
        document.getElementById("game_status").innerHTML = "Car 2 Won!!";
    }
}

function car1Up(){
    if(car1_y >= 0){
        car1_y-=10;
        console.log("when up arrow is pressed x = "+car1_x+" y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1Down(){
    if(car1_y <= 500){
        car1_y+=10;
        console.log("when down arrow is pressed x = "+car1_x+" y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}   

function car1Left(){
    if(car1_x >= 0){
        car1_x-=10;
        console.log("when left arrow is pressed x = "+car1_x+" y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1Right(){
    if(car1_x <= 700){
        car1_x+=10;
        console.log("when right arrow is pressed x = "+car1_x+" y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2Up(){
    if(car2_y >= 0){
        car2_y-=10;
        console.log("when up arrow is pressed x = "+car2_x+" y = "+car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function car2Down(){
    if(car2_y <= 500){
        car2_y+=10;
        console.log("when down arrow is pressed x = "+car2_x+" y = "+car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}   

function car2Left(){
    if(car2_x >= 0){
        car2_x-=10;
        console.log("when left arrow is pressed x = "+car2_x+" y = "+car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function car2Right(){
    if(car2_x <= 700){
        car2_x+=10;
        console.log("when right arrow is pressed x = "+car2_x+" y = "+car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

