img_bed="";

function preload()
{
img_bed=loadImage('desk.jpg');
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
}

function draw()
{
image(img_bed,0,0,640,420);
}