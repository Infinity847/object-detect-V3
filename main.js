var img = [];
var imgat = 0;
var stats = "";
var objects = [];
var v;
function setup() {
    canvas = createCanvas(640,420);
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded() {
console.log("Cocossd is loaded.");
stats = true;
objectDetector.detect(img[imgat],gotResult);
}
function gotResult(error,results) {
if(error) {
    console.error(error);
}
{
    console.log(results);  
objects = results;
}
}
function preload() {
    img = [loadImage('Bedroom.jpg'),loadImage('Bottles.jpg'),loadImage('Desk.jpg'),loadImage('StuffedAnimal.jpg'),loadImage('TV&AC.jpg')];
}
function draw() {
    image(img[imgat],0,0,640,420);
    if (stats == true) {
for (i = 0; i < objects.length; i++) {
    if (objects.length > 0) {
        document.getElementById("status").innerHTML = "Status : Object Detected"
    }else {Detected
        document.getElementById("status").innerHTML = "Status : No Objects Detected";
    }
    fill("#FF0000");
    strokeWeight(1);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].normalized.x,objects[i].normalized.y);
    noFill();
    stroke("#FF0000");
    strokeWeight(4);
    rect(objects[i].normalized.x,objects[i].normalized.y,objects[i].normalized.width,objects[i].normalized.height);
} }
}
function changeimg() {
v = document.getElementById("Images").value;
console.log(v);
if (v == "Bedroom") {
imgat = 0;
}else if (v == "Bottles") {
imgat = 1;
}else if (v == "Desk") {
imgat = 2;
}else if (v == "StuffedAnimal") {
imgat = 3;
}else if (v == "TV&AC") {
imgat = 4;
}
}