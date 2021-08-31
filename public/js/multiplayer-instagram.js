let data = [];
let timeLeft;

db.collection("instagram")
  .get()
  .then((docs) => {
    docs.forEach((doc) => {
      data.push(doc.data());
    });
    data = data.sort(() => Math.random() - 0.5);
    document.getElementById("loader").style.display = "none";
  });

let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let followers1 = document.getElementById("followers1");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let followers2 = document.getElementById("r_ammount");
let R_TEXT = document.getElementById("r_ammount_text");
let score = document.getElementById("score");
let R_BUTTON = document.getElementById("higher");
let L_BUTTON = document.getElementById("lower");
let link1 = document.getElementById("link");
let link2 = document.getElementById("link2");

let i = 0;

setTimeout(() => {
  followers1.innerHTML = data[i].followers.toLocaleString();
  followers2.innerHTML = data[i + 1].followers.toLocaleString();
  name1.innerHTML = data[i].account;
  name2.innerHTML = data[i + 1].account;
  container1.style.backgroundImage = `url(${data[i].photo})`;
  container2.style.backgroundImage = `url(${data[i + 1].photo})`;
  container1.style.backgroundSize = "cover";
  container2.style.backgroundSize = "cover";
  container1.style.transitionDelay = "2.5s";
  container2.style.transitionDelay = "2.5s";
  link1.href = data[i].photo;
  link2.href = data[i + 1].photo;
  link1.innerHTML = data[i].account;
  link2.innerHTML = data[i + 1].account;

  VS2.classList.add("invisible");
}, 2000);

let onoo = 0;
let highScore;
const higher = async () => {
  const currentUser = firebase.auth().currentUser;

  if (data[i].followers <= data[i + 1].followers) {
    setTimeout(function () {
      name1.innerHTML = data[i].account;
      link1.innerHTML = data[i].account;
    }, 2530);
    setTimeout(function () {
      name2.innerHTML = data[i + 1].account;
      link2.innerHTML = data[i + 1].account;
    }, 2530);
    setTimeout(function () {
      followers1.innerHTML = data[i].followers.toLocaleString();
    }, 2530);
    container1.style.backgroundImage = `url(${data[i + 1].photo})`;
    container2.style.backgroundImage = `url(${data[i + 2].photo})`;
    Answer = true;
    followers2.innerHTML = data[i + 1].followers.toLocaleString();
    correct_animation_1();
    link1.href = data[i + 1].photo;
    link2.href = data[i + 2].photo;
    link1.innerHTML = data[i].account;
    link2.innerHTML = data[i + 1].account;
    i++;
    onoo++;
    reset();
    document.getElementById("Bscore").innerHTML = `Оноо: ${onoo}`;
  } else {
    setTimeout(function () {
      name1.innerHTML = data[i].account;
      link1.innerHTML = data[i].account;
    }, 2530);
    setTimeout(function () {
      name2.innerHTML = data[i + 1].account;
      link2.innerHTML = data[i + 1].account;
    }, 2530);
    setTimeout(function () {
      followers1.innerHTML = data[i].followers.toLocaleString();
    }, 2530);
    container1.style.backgroundImage = `url(${data[i + 1].photo})`;
    container2.style.backgroundImage = `url(${data[i + 2].photo})`;
    followers2.innerHTML = data[i + 1].followers.toLocaleString();
    link1.href = data[i + 1].photo;
    link2.href = data[i + 2].photo;
    wrong_animation_1();
    i++;

    reset();
    document.getElementById("Bscore").innerHTML = `Оноо: ${onoo}`;
  }
  if (i > 20) {
    location.href = "./result.html";
    localStorage.setItem("gamerScore", onoo);
  } else {
  }
};

const lower = async () => {
  const currentUser = firebase.auth().currentUser;
  if (data[i].followers >= data[i + 1].followers) {
    setTimeout(function () {
      name1.innerHTML = data[i].account;
      link1.innerHTML = data[i].account;
    }, 2530);
    setTimeout(function () {
      name2.innerHTML = data[i + 1].account;
      link2.innerHTML = data[i + 1].account;
    }, 2530);
    setTimeout(function () {
      followers1.innerHTML = data[i].followers.toLocaleString();
    }, 2530);
    container1.style.backgroundImage = `url(${data[i + 1].photo})`;
    container2.style.backgroundImage = `url(${data[i + 2].photo})`;
    followers2.innerHTML = data[i + 1].followers.toLocaleString();
    link1.href = data[i + 1].photo;
    link2.href = data[i + 2].photo;
    correct_animation_1();
    i++;
    onoo++;
    reset();
    document.getElementById("Bscore").innerHTML = `Оноо: ${onoo}`;
  } else {
    setTimeout(function () {
      name1.innerHTML = data[i].account;
      link1.innerHTML = data[i].account;
    }, 2530);
    setTimeout(function () {
      name2.innerHTML = data[i + 1].account;
      link2.innerHTML = data[i + 1].account;
    }, 2530);
    setTimeout(function () {
      followers1.innerHTML = data[i].followers.toLocaleString();
    }, 2530);
    container1.style.backgroundImage = `url(${data[i + 1].photo})`;
    container2.style.backgroundImage = `url(${data[i + 2].photo})`;
    followers2.innerHTML = data[i + 1].followers.toLocaleString();
    link1.href = data[i + 1].photo;
    link2.href = data[i + 2].photo;
    wrong_animation_1();
    i++;

    reset();
    document.getElementById("Bscore").innerHTML = `Оноо: ${onoo}`;
  }
  if (i > 20) {
    location.href = "./result.html";
    localStorage.setItem("gamerScore", onoo);
  } else {
  }
};

var Answer;
var isplayercorrect;
let high_score = document.getElementById("hi_score");
let current_score = document.getElementById("cur_score");
// getting the players answer
// in answer true = higher , false = lower
// activating animations
let VS = document.getElementById("vs_id");
let VS2 = document.getElementById("vs_id2");
let BUTTON = document.getElementById("button_id");

function correct_animation_1() {
  R_BUTTON.disabled = true;
  L_BUTTON.disabled = true;
  VS.innerHTML = "";
  setTimeout(function () {
    R_BUTTON.disabled = true;
  }, 0);
  setTimeout(function () {
    L_BUTTON.disabled = true;
  }, 0);
  setTimeout(function () {
    VS2.classList.add("vs_correct");
  }, 0);
  setTimeout(function () {
    VS2.classList.remove("invisible");
  }, 0);
  setTimeout(function () {
    VS2.classList.add("invisible");
  }, 4000);
  setTimeout(function () {
    BUTTON.classList.add("button_dissapear");
  }, 0);
  setTimeout(animation_3, 300);
  setTimeout(animation_4, 2000);
  setTimeout(correct_animation_2, 4000);
  setTimeout(function () {
    R_BUTTON.disabled = false;
  }, 4000);
  setTimeout(function () {
    L_BUTTON.disabled = false;
  }, 4000);
  setTimeout(function () {
    VS2.classList.remove("vs_correct");
  }, 4000);
  VS.classList.remove("invisible");
}
function wrong_animation_1() {
  // setTimeout(function(){ VS.innerHTML = ("");;}, 0)
  // setTimeout(function(){ VS.classList.add('vs_wrong');},0)
  R_BUTTON.disabled = true;
  L_BUTTON.disabled = true;
  setTimeout(function () {
    VS2.classList.add("vs_wrong");
  }, 0);
  setTimeout(function () {
    VS2.classList.remove("invisible");
  }, 0);
  setTimeout(function () {
    VS2.classList.add("invisible");
  }, 4000);
  setTimeout(function () {
    BUTTON.classList.add("button_dissapear");
  }, 0);
  setTimeout(animation_3, 300);
  setTimeout(animation_4, 2000);
  setTimeout(correct_animation_2, 4000);
  setTimeout(function () {
    R_BUTTON.disabled = false;
  }, 4000);
  setTimeout(function () {
    L_BUTTON.disabled = false;
  }, 4000);
  VS.classList.remove("invisible");
  setTimeout(function () {
    VS2.classList.remove("vs_wrong");
  }, 4000);
}

function correct_animation_1_2() {
  VS.innerHTML = "VS";
}
function correct_animation_2() {
  R_BUTTON.disabled = true;
  L_BUTTON.disabled = true;
  BUTTON.classList.remove("button_dissapear");
  VS.classList.remove("vs_correct");
}
function animation_3() {
  followers2.classList.remove("invisible");
  R_TEXT.classList.remove("invisible");
  followers2.classList.add("right_ammount_appear");
  R_TEXT.classList.add("right_ammount_appear");
}
function animation_4() {
  setTimeout(function () {
    followers2.classList.add("invisible");
  }, 500);
  setTimeout(function () {
    R_TEXT.classList.add("invisible");
  }, 500);
  setTimeout(function () {
    followers2.classList.remove("right_ammount_appear");
  }, 2200);
  setTimeout(function () {
    R_TEXT.classList.remove("right_ammount_appear");
  }, 2200);
}

timeLeft = 10;

let intervala = setInterval(() => {
  if (timeLeft < 1) {
    setTimeout(function () {
      name1.innerHTML = data[i].account;
      link1.innerHTML = data[i].account;
    }, 2530);
    setTimeout(function () {
      name2.innerHTML = data[i + 1].account;
      link2.innerHTML = data[i + 1].account;
    }, 2530);
    setTimeout(function () {
      followers1.innerHTML = data[i].followers.toLocaleString();
    }, 2530);
    container1.style.backgroundImage = `url(${data[i + 1].photo})`;
    container2.style.backgroundImage = `url(${data[i + 2].photo})`;
    followers2.innerHTML = data[i + 1].followers.toLocaleString();
    link1.href = data[i + 1].photo;
    link2.href = data[i + 2].photo;
    wrong_animation_1();
    i++;

    reset();
    document.getElementById("Bscore").innerHTML = `Оноо: ${onoo}`;
  } else {
    VS.innerHTML = String(timeLeft);
    timeLeft--;
  }
}, 1000);

let reset = () => {
  timeLeft = 12;
};

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  window.location = "./multiplayer.html";
});
