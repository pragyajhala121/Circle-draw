mouseEvent="";
var last_x,last_y;
canvas=document.getElementById("drawing_area");
ctx=canvas.getContext("2d");
radius=20;
color="black";
line_width=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
  mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
  mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
  current_x=e.clientX-canvas.offsetLeft;
  current_y=e.clientY-canvas.offsetTop;
if(mouseEvent == "mousedown"){
  console.log("Current postion of x and y coordinates")
  console.log("x="+current_x+" y = "+current_y);
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=line_width;
  ctx.arc(current_x,current_y,radius,0,2 * Math.PI);
  ctx.stroke();
}
    
}
function clearAll() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
