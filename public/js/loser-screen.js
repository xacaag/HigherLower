document.getElementById("mouse").addEventListener("mouseover", mouseOver);
document.getElementById("mouse").addEventListener("mouseout", mouseOut);
let bg = document.getElementById("bg");

var highlight = localStorage.getItem("highlight");

firebase.auth().onAuthStateChanged(async (user) => {
  var highest;
  await db
    .collection("users")
    .doc(user.uid)
    .onSnapshot((el) => {
      highest = el.data().score;
      document.getElementsByClassName(
        "light_score"
      )[0].innerHTML = `${highlight}`;
      if (highest < highlight) {
        document.getElementsByClassName(
          "highest_score"
        )[0].innerHTML = `Шинэ дээд оноо вүүүүүү: ${highlight}`;
      } else {
        document.getElementsByClassName(
          "highest_score"
        )[0].innerHTML = `Одоогоор таны дээд оноо: ${highest}`;
      }
    });
});

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
let data = [];
let i = 0;

db.collection("loser")
  .get()
  .then((docs) => {
    docs.forEach((doc) => {
      data.push(doc.data());
    });
    data = data.sort(() => Math.random() - 0.5);
  });

setTimeout(() => {
  bg.style.backgroundImage = `url(${data[i].bg})`;
  bg.style.backgroundSize = "cover";
  bg.style.backgroundRepeat = "round";
}, 2000);

const retry = () => {
  window.history.back();
};
const menu = () => {
  location.href = "./index.html ";
};
