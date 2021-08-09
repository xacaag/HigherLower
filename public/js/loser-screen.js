document.getElementById("mouse").addEventListener("mouseover", mouseOver);
document.getElementById("mouse").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mouse").style.background = "white";
  document.getElementById("mouse").style.color = "black";
}
function mouseOut() {
  document.getElementById("mouse").style.background = "transparent";
  document.getElementById("mouse").style.color = "white";
}

document.getElementById("demo").addEventListener("mouseover", mouseoover);
document.getElementById("demo").addEventListener("mouseout", mouseoout);

function mouseoover() {
  document.getElementById("demo").style.background = "white";
  document.getElementById("demo").style.color = "black";
}
function mouseoout() {
  document.getElementById("demo").style.background = "transparent";
  document.getElementById("demo").style.color = "white";
}
