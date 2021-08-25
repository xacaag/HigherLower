let logind = document.getElementById("login")
let signupd = document.getElementById("signup")
let profiled = document.getElementById("profile")
let leaderboard = document.getElementById("leaderboard")

let ner = document.getElementById("ner")

document.getElementById("myBtn").onclick = function () {
  myFunction();
};
function myFunction() {
  document.getElementById("touch").classList.add("show");
  document.getElementById("overlay").style.display = "block";
}

document.getElementById("myBtn2").onclick = function () {
  myFunction2();
};
function myFunction2() {
  document.getElementById("touch2").classList.add("show");
  document.getElementById("overlay").style.display = "block";
}

document.getElementById("myBtn3").onclick = function () {
  myFunction3();
};
function myFunction3() {
  document.getElementById("touch3").classList.add("show");
  document.getElementById("overlay").style.display = "block";
}

function myFunction4() {
  document.getElementById("touch4").classList.add("show");
  document.getElementById("overlay").style.display = "block";
}
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("touch").classList.remove("show");
  document.getElementById("touch2").classList.remove("show");
  document.getElementById("touch3").classList.remove("show");
  document.getElementById("touch4").classList.remove("show");
}

