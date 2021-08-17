let roomdiv = document.getElementById("roomid");

let param = new URLSearchParams(window.location.search);
let roomid = param.get("roomid");
console.log(roomid);

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
console.log(a);

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
