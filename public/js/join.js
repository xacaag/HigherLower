let roomdiv = document.getElementById("roomid");

let classic = document.getElementById("classic");
let genre = document.getElementById("genre");
let start = document.getElementById("startB");
let profile = document.getElementsByClassName("profile")[0];
let movie = document.getElementById("multiplayer-movie");
let instagram = document.getElementById("multiplayer-instagram");
let game = document.getElementById("multiplayer-game");
let music = document.getElementById("multiplayer-music");
let ner = document.getElementById("ner");
let param = new URLSearchParams(window.location.search);
let roomid = param.get("roomid");
let classic_button = document.getElementById("multiplayer-classic");

localStorage.setItem("id", roomid);

if (roomid) {
  roomdiv.innerHTML = `Код : ${roomid}`;
}
var admin = localStorage.getItem("admin");
var a = parseFloat(admin);

if (a === 1) {
  start.style.display = "flex";
} else {
  start.disabled = true;
  start.style.display = "none"
  movie.onclick = () => {};
  instagram.onclick = () => {};
  game.onclick = () => {};
  music.onclick = () => {};
  classic_button.disabled = true;
  // genre.disabled = true;
}

db.collection("links")
  .doc(roomid)
  .get()
  .then((el) => {
    let code = el.data().link;
    db.collection("rooms")
      .doc(code)
      .onSnapshot((item) => {
        let redy = item.data().ready;
        if (!redy) {
          document.getElementById("startB").disabled = true;
          document.getElementById("startB").style.backgroundColor = "grey";
          document.getElementById("startB").style.cursor = "not-allowed";
        } else {
          document.getElementById("startB").disabled = false;
          document.getElementById("startB").style.backgroundColor = "#ecd55a";
          document.getElementById("startB").style.cursor = "pointer";
        }
      });
  });
let uls = document.getElementById("genres");
let lobbygenre = document.getElementById("lobby_genre");

const lobbyGenre = () => {
  if (uls.classList.contains("none")) {
    uls.setAttribute("class", "flex");
    uls.classList.add("genre_list_anim");
  } else {
    uls.classList.remove("genre_list_anim");
    uls.setAttribute("class", "none");
  }

 

};
const classic_b = () => {
  uls.setAttribute("class", "none");
  classic_button.classList.add("chosen_style");
  lobbygenre.classList.remove("chosen_style");

  movie.style.fontSize = "20px";
  game.style.fontSize = "20px";
  music.style.fontSize = "20px";
  instagram.style.fontSize = "20px";
  movie.style.color = "white";
  game.style.color = "white";
  music.style.color = "white";
  instagram.style.color = "white";

  movie.style.marginTop = "0px";
  movie.style.marginBottom = "0px";
  game.style.marginTop = "0px";
  game.style.marginBottom = "0px";
  music.style.marginTop = "0px";
  music.style.marginBottom = "0px";
  instagram.style.marginBottom = "0px";
  instagram.style.marginTop = "0px";
};
const typer = async (e) => {
  await db
    .collection("links")
    .doc(`${roomid}`)
    .get()
    .then(async (el) => {
      let roomname = el.data().link;
      await db.collection("rooms").doc(roomname).update({
        name: e.id,
      });
    });
};

const startGame = async () => {
  await db
    .collection("links")
    .doc(`${roomid}`)
    .get()
    .then((el) => {
      let link = el.data().link;
      db.collection("rooms").doc(`${link}`).update({
        start: true,
      });
      db.collection("rooms").doc(`${link}`).update({
        start: false,
      });
    });
};

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((name) => {
        db.collection("links")
          .doc(`${roomid}`)
          .get()
          .then((el) => {
            let code = el.data().link;
            db.collection("rooms")
              .doc(`${code}`)
              .get()
              .then((doc) => {
                let arr = doc.data().nameArr;
                if(name.data().name.length > 12){
                  arr.push(name.data().name.slice(0 , name.data().name.length-12));
                }else{
                  arr.push(name.data().name);
                }
                db.collection("rooms").doc(`${code}`).set(
                  {
                    nameArr: arr,
                  },
                  { merge: true }
                );
               
                
                
              });
          });
      });
      

    await db
      .collection("links")
      .doc(`${roomid}`)
      .get()
      .then((el) => {
        let code = el.data().link;
        db.collection("rooms")
          .doc(`${code}`)
          .onSnapshot((el) => {
            let toglogchid = el.data().players;
            switch (toglogchid) {
              case 1:
                {
                  document.getElementsByClassName(
                    "playersID"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "hidden";
                  document.getElementsByClassName("words")[0].innerHTML =
                    el.data().nameArr[0];
                }
                break;
              case 2:
                {
                  document.getElementsByClassName(
                    "playersID"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName(
                    "playersID3"
                  )[0].style.visibility = "hidden";
                  document.getElementsByClassName("words")[0].innerHTML =
                    el.data().nameArr[0];
                  document.getElementsByClassName("words2")[0].innerHTML =
                    el.data().nameArr[1];
                }
                break;
              case 3:
                {
                  document.getElementsByClassName(
                    "playersID"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID3"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName(
                    "playersID4"
                  )[0].style.visibility = "hidden";
                  document.getElementsByClassName("words")[0].innerHTML =
                    el.data().nameArr[0];
                  document.getElementsByClassName("words2")[0].innerHTML =
                    el.data().nameArr[1];
                  document.getElementsByClassName("words3")[0].innerHTML =
                    el.data().nameArr[2];
                }
                break;
              case 4:
                {
                  document.getElementsByClassName(
                    "playersID"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID3"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID4"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName(
                    "playersID5"
                  )[0].style.visibility = "hidden";
                  document.getElementsByClassName("words")[0].innerHTML =
                    el.data().nameArr[0];
                  document.getElementsByClassName("words2")[0].innerHTML =
                    el.data().nameArr[1];
                  document.getElementsByClassName("words3")[0].innerHTML =
                    el.data().nameArr[2];
                  document.getElementsByClassName("words4")[0].innerHTML =
                    el.data().nameArr[3];
                }
                break;
              case 5:
                {
                  document.getElementsByClassName(
                    "playersID"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID3"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID4"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID5"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID6"
                  )[0].style.visibility = "hidden";
                  document.getElementsByClassName("words")[0].innerHTML =
                    el.data().nameArr[0];
                  document.getElementsByClassName("words2")[0].innerHTML =
                    el.data().nameArr[1];
                  document.getElementsByClassName("words3")[0].innerHTML =
                    el.data().nameArr[2];
                  document.getElementsByClassName("words4")[0].innerHTML =
                    el.data().nameArr[3];
                  document.getElementsByClassName("words5")[0].innerHTML =
                    el.data().nameArr[4];
                }
                break;
              case 6:
                {
                  document.getElementsByClassName(
                    "playersID"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID3"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID4"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID5"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID6"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName("words")[0].innerHTML =
                    el.data().nameArr[0];
                  document.getElementsByClassName("words2")[0].innerHTML =
                    el.data().nameArr[1];
                  document.getElementsByClassName("words3")[0].innerHTML =
                    el.data().nameArr[2];
                  document.getElementsByClassName("words4")[0].innerHTML =
                    el.data().nameArr[3];
                  document.getElementsByClassName("words5")[0].innerHTML =
                    el.data().nameArr[4];
                  document.getElementsByClassName("words6")[0].innerHTML =
                    el.data().nameArr[5];
                }
                break;
              default:
                console.log("default");
            }
          });
      });
  } else {
  }
});

db.collection("links")
  .doc(`${roomid}`)
  .get()
  .then((el) => {
    let roomname = el.data().link;
    db.collection("rooms")
      .doc(`${roomname}`)
      .onSnapshot((el) => {
        let startbutton = el.data().start;
        let type = el.data().name;
        if (startbutton === true) {
          if (type === "lobby_genre") {
            alert("Төрөлөө сонгоно уу!");
          } else {
            window.location = `./${type}.html`;
          }
        }
      });
  });

const back = () => {
  firebase.auth().onAuthStateChanged(async (user) => {
    const tt = new Promise((res, rej) => {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          let test = doc.data();
          res(test);
        });
    });
    await db
      .collection("links")
      .doc(`${roomid}`)
      .get()
      .then(async (el) => {
        let code = el.data().link;
        await db
          .collection("rooms")
          .doc(`${code}`)
          .get()
          .then(async (elem) => {
            let toglogchid = elem.data().players;
            toglogchid--;
            let arr = elem.data().nameArr;
            await tt.then(async (a) => {
              let newArr = arr.filter((word) => word !== a.name);
              db.collection("rooms").doc(`${code}`).update({
                players: toglogchid,
                nameArr: newArr,
              });
            });
          });
        await db
          .collection("links")
          .doc(`${roomid}`)
          .get()
          .then((el) => {
            let code = el.data().link;
            db.collection("rooms")
              .doc(code)
              .onSnapshot((shot) => {
                if (shot.data().players <= 0) {
                  db.collection("rooms").doc(code).delete();
                } else {
                  console.log("no error");
                }
                location.href = "/multiplayer.html";
              });
          });
      });
  });
};
