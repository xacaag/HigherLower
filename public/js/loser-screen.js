document.getElementById("mouse").addEventListener("mouseover", mouseOver);
document.getElementById("mouse").addEventListener("mouseout", mouseOut);
let bg = document.getElementById("bg");

var highlight = localStorage.getItem("highlight");
var highest = localStorage.getItem("highest");

document.getElementsByClassName("light_score")[0].innerHTML = `${highlight}`;
if (highest < highlight) {
  document.getElementsByClassName(
    "highest_score"
  )[0].innerHTML = `Шинэ дээд оноо вүүүүүү: ${highlight}`;
} else {
  document.getElementsByClassName(
    "highest_score"
  )[0].innerHTML = `Одоогоор таны дээд оноо: ${highest}`;
}

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
  location.href = "./classic.html ";
};
const menu = () => {
  location.href = "./index.html ";
};

// if (performance.type == performance.TYPE_RELOAD) {
//   window.location = 'index.html'
// }

// console.log(PerformanceNavigation.TYPE_RELOAD)

// if (PerformanceNavigation.type === PerformanceNavigation.TYPE_RELOAD) {
//     window.location = 'index.html'
// } else {
//   console.info( "This page is not reloaded");
// }
