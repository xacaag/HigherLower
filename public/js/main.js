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

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("touch").classList.remove("show");
  document.getElementById("touch2").classList.remove("show");
  document.getElementById("touch3").classList.remove("show");
}

const Login = () => {
  location.href="./login.html"
}
const SignUp = () => {
  location.href="./signUp.html"
}

