canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="blue";
var wol=5;
var mt="";
var lx,ly;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mt="mousedown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mt="mouseup";
    
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mt="mouseleave";
    
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
cx=e.clientX-canvas.offsetLeft;
cy=e.clientY-canvas.offsetTop;
if (mt=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=wol;
ctx.arc(cx,cy,25,0,2*Math.PI)
    ctx.stroke();
}
lx=cx;
ly=cy;
}

function clear1(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}