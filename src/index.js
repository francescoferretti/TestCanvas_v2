var keys;
var spriteConfig = {
    imgPath : "sprite/sprite.png",
    frameX: 0,
    frameY: 0,
    frameW : 400,
    frameH : 600,
    facing : "d", //d sx dx u
    initalFrame : { //TODO
        d:0,
        u:4,
        dx:12,
        sx:8
    }
};
var x=250;
var y = 250;
var img = new Image();
img.src =spriteConfig.imgPath;


var frames = [
    {x:0, y:0},{x:1, y:0},{x:2, y:0},{x:3, y:0},
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

function spinMeAround()
{
    //ctx.clearRect(390,390,250,250);
    printBackgound();
    moveThis();
    ctx.save();
    //ctx.translate(x, y);
    ctx.drawImage(img,spriteConfig.frameW*spriteConfig.frameX,spriteConfig.frameH*spriteConfig.frameY,spriteConfig.frameW,spriteConfig.frameH,x,y,spriteConfig.frameW/2,spriteConfig.frameH/2);

    ctx.restore();

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
        spriteConfig.frameX = 0;
        if(spriteConfig.frameY == 3)
        {
            spriteConfig.frameX=1;
        }
    }

    if (keys && keys[37]) {
        spriteConfig.facing = "sx";
        if(spriteConfig.frameY != frames[8].y)
        {
            spriteConfig.frameX = frames[8].x;
            spriteConfig.frameY = frames[8].y; 
        }
        x=x-2;
    } //sinistra
    if (keys && keys[39]) {
        spriteConfig.facing = "dx";
        if(spriteConfig.frameY != frames[12].y)
        {
            spriteConfig.frameX = frames[12].x;
            spriteConfig.frameY = frames[12].y; 
        }
        x=x+2;
    } //destra
    if (keys && keys[38]) {
        spriteConfig.facing ="u";
        if(spriteConfig.frameY != frames[4].y)
        {
            spriteConfig.frameX = frames[4].x;
            spriteConfig.frameY = frames[4].y; 
        }
        y=y-2;
    } //su
    if (keys && keys[40]) {
        spriteConfig.facing = "d";
        if(spriteConfig.frameY != frames[0].y)
        {
            spriteConfig.frameX = frames[0].x;
            spriteConfig.frameY = frames[0].y; 
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
        spriteConfig.frameX = spriteConfig.frameX+1;
        switch(spriteConfig.facing)
        {
            case "u":
                if(spriteConfig.frameX > 3)
                {
                    spriteConfig.frameX = frames[4].x;
                    spriteConfig.frameY = frames[4].y; 
                };
            case "d":
                if(spriteConfig.frameX > 3)
                {
                    spriteConfig.frameX = frames[0].x;
                    spriteConfig.frameY = frames[0].y; 
                };
            case "dx":
                if(spriteConfig.frameX > 3)
                {
                    spriteConfig.frameX = frames[12].x;
                    spriteConfig.frameY = frames[12].y; 
                };
            case "sx":
                if(spriteConfig.frameX > 3)
                {
                    spriteConfig.frameX = frames[8].x;
                    spriteConfig.frameY = frames[8].y; 
                };
        };
    }
}