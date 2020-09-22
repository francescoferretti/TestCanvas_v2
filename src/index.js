var keys;
var x=250;
var y = 250;
var img = new Image();
img.src ="sprite/sprite.png";
var frameX= 0;
var frameY= 0;
var frameW = 400;
var frameH = 600;
var frames = [{x:0, y:0},{x:1, y:0},{x:2, y:0},{x:3, y:0},
    {x:0, y:1},{x:1, y:1},{x:2, y:1},{x:3, y:1},
    {x:0, y:2},{x:1, y:2},{x:2, y:2},{x:3, y:2},
    {x:0, y:3},{x:1, y:3},{x:2, y:3},{x:3, y:3}];

img.onload = ()=>{
    setInterval(spinMeAround,20);
    setInterval(drawMe,350);
}

window.addEventListener('keydown', function (e) {
    e.preventDefault();
    keys = (keys || []);
    keys[e.keyCode] = (e.type == "keydown");
})
window.addEventListener('keyup', function (e) {
    keys[e.keyCode] = (e.type == "keydown");
})

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(0,0,100,100);

var angolo = 0;



ctx.fillRect(20,500,30,30);


function spinMeAround()
{
    //ctx.clearRect(390,390,250,250);
    printBackgound();
    moveThis();
    ctx.save();
    //ctx.translate(x, y);
    ctx.drawImage(img,frameW*frameX,frameH*frameY,frameW,frameH,x,y,frameW/2,frameH/2);
    //ctx.rotate(angolo);
    //ctx.fillStyle="gold";
    //ctx.fillRect(-100,-10,200,20);
    ctx.restore();
    //if(angolo < 6.28319)
    //{
    //angolo = angolo+0.1;
    //}
    //else
    //{
    //    angolo = 0;
    //}
}

function printBackgound()
{
    ctx.save();
    ctx.fillStyle="grey";
    ctx.fillRect(0,0,1000,1000);
    ctx.restore();
}

function moveThis()
{
    if(keys && ((keys[37] && keys[38]) || (keys[39] && keys[38]) || (keys[37] && keys[40]) || (keys[39] && keys[40])))
    {
        return;
    }
    if(keys && !keys[37]&& !keys[39]&& !keys[38]&& !keys[40])
    {
        frameX = 0;
        if(frameY == 3)
        {
            frameX=1;
        }
    }

    if (keys && keys[37]) {
        if(frameY != frames[8].y)
        {
            frameX = frames[8].x;
            frameY = frames[8].y; 
        }
        x=x-2;
    } //sinistra
    if (keys && keys[39]) {
        if(frameY != frames[12].y)
        {
            frameX = frames[12].x;
            frameY = frames[12].y; 
        }
        x=x+2;
    } //destra
    if (keys && keys[38]) {
        if(frameY != frames[4].y)
        {
            frameX = frames[4].x;
            frameY = frames[4].y; 
        }
        y=y-2;
    } //su
    if (keys && keys[40]) {
        if(frameY != frames[0].y)
        {
            frameX = frames[0].x;
            frameY = frames[0].y; 
        }
        y=y+2;
    } //giu

    
}

function drawMe()
{
    if(keys && ((keys[37] && keys[38]) || (keys[39] && keys[38]) || (keys[37] && keys[40]) || (keys[39] && keys[40])))
    {
        
        return;
    }
    if(keys)
    {
        frameX = frameX+1;
    }
    if (keys && keys[40]) {
            if(frameX > 3)
            {
                frameX = frames[0].x;
                frameY = frames[0].y; 
            }
        
    } //giu
    if (keys && keys[38]) {
            if(frameX > 3)
            {
                frameX = frames[4].x;
                frameY = frames[4].y; 
            }
    } //su
    if (keys && keys[37]) {
        if(frameX > 3)
        {
            frameX = frames[8].x;
            frameY = frames[8].y; 
        }

    } //sinistra
    if (keys && keys[39]) {
        if(frameX > 3)
        {
            frameX = frames[12].x;
            frameY = frames[12].y; 
        }
    } //destra*/

}