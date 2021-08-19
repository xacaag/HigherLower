let roomdiv = document.getElementById("roomid");

let param = new URLSearchParams(window.location.search);
let roomid = param.get("roomid");

if (roomid.length > 0) {
  roomdiv.innerHTML = `Код : ${roomid}`;
}

const startGame = () => {
  db.collection("links")
    .doc(`${roomid}`)
    .get()
    .then((el) => {
      let link = el.data().link;
      db.collection("rooms").doc(link).update({
        start: true,
      });
    });
};
var a;
const kino = () => {
  a = "classic";
};
const duu = () => {
  a = "music";
};
const insta = () => {
  a = "insta";
};
const tglm = () => {
  a = "game";
};

db.collection("links")
  .doc(`${roomid}`)
  .get()
  .then((el) => {
    let code = el.data().link;
    db.collection("rooms")
      .doc(`${code}`)
      .onSnapshot((el) => {
        let startbutton = el.data().start;
        if (startbutton === true) {
          setTimeout(() => {
            window.location = `./${a}.html`;
          }, 1000);
        }
      });
  });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
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
                    user.email;
                }
                break;
              case 2:
                {
                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName("words")[0].innerHTML =
                    user.email;
                }
                break;
              case 3:
                {
                  document.getElementsByClassName(
                    "playersID3"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName("words")[0].innerHTML =
                    user.email;
                }
                break;
              case 4:
                {
                  document.getElementsByClassName(
                    "playersID4"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName("words")[0].innerHTML =
                    user.email;
                }
                break;
              case 5:
                {
                  document.getElementsByClassName(
                    "playersID5"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName("words")[0].innerHTML =
                    user.email;
                }
                break;
              case 6:
                {
                  document.getElementsByClassName(
                    "playersID6"
                  )[0].style.visibility = "visible";
                  document.getElementsByClassName("words")[0].innerHTML =
                    user.email;
                }
                break;
              default:
                console.log("asd");
            }
          });
      });
  } else {
  }
});
