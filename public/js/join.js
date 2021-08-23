let roomdiv = document.getElementById("roomid");

let classic = document.getElementById("classic");
let genre = document.getElementById("genre");
let start = document.getElementById("startB");

let movie = document.getElementById("multiplayer-movie");
let instagram = document.getElementById("multiplayer-instagram");
let game = document.getElementById("multiplayer-game");
let music = document.getElementById("multiplayer-music");

let param = new URLSearchParams(window.location.search);
let roomid = param.get("roomid");

if (roomid) {
  roomdiv.innerHTML = `Код : ${roomid}`;
}
var admin = localStorage.getItem("admin");
var a = parseFloat(admin);

if (a === 1) {
  start.style.display = "flex";
} else {
  start.disabled = true;
  movie.onclick = () => {};
  instagram.onclick = () => {};
  game.onclick = () => {};
  music.onclick = () => {};
  console.log("asd");

  // classic.disabled =true;
  // genre.disabled = true;
}

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
    let arr = [];
    await db
      .collection("users")
      .doc(user.uid)
      .get()
      .then((el) => {
        arr.push(el.data().name);
        db.collection("links")
          .doc(`${roomid}`)
          .get()
          .then((el) => {
            let code = el.data().link;
            db.collection("rooms").doc(`${code}`).set(
              {
                nameArr: arr,
              },
              { merge: true }
            );
          });
      });

    db.collection("links")
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
  .onSnapshot((el) => {
    let roomname = el.data().link;
    db.collection("rooms")
      .doc(`${roomname}`)
      .onSnapshot((el) => {
        let startbutton = el.data().start;
        let type = el.data().name;
        if (startbutton === true) {
          window.location = `./${type}.html`;
        }
      });
  });

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

  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    firebase.auth().onAuthStateChanged(async (user) => {
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

              tt.then((a) => {
                let newArr = arr.filter((word) => word !== a.name);
                db.collection("rooms").doc(`${code}`).update({
                  players: toglogchid,
                  nameArr: newArr,
                });
              });
            });
        });
    });
  });
});
