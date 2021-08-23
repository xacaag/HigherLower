let roomdiv = document.getElementById("roomid");

let classic = document.getElementById("classic")
let genre = document.getElementById("genre")
let start = document.getElementById("startB")

let movie = document.getElementById("multiplayer-movie")
let instagram = document.getElementById("multiplayer-instagram")
let game = document.getElementById("multiplayer-game")
let music = document.getElementById("multiplayer-music")
console.log(start)



let param = new URLSearchParams(window.location.search);
let roomid = param.get("roomid");

if (roomid) {
  roomdiv.innerHTML = `Код : ${roomid}`;
}

var admin = localStorage.getItem('admin')
console.log(admin)
var a = parseFloat(admin)

if(a === 1){
  start.style.display="flex"
}else{
      start.disabled = true;
      movie.onclick = () => {}
      instagram.onclick = () => {}
      game.onclick = () => {}
      music.onclick = () => {}
      console.log('asd')
      
      // classic.disabled =true;
      // genre.disabled = true;
}

const typer = async (e) => {
  await db.collection("links")
  .doc(`${roomid}`)
  .get()
  .then(async(el) => {
    let roomname = el.data().link;
    await db.collection("rooms").doc(roomname).update({
      name : e.id
    });
  });
}

const startGame = async () => { 
          
  await db.collection("links")
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
                    "playersID"
                  )[0].style.visibility = "visible";

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
                    "playersID"
                  )[0].style.visibility = "visible";

                  document.getElementsByClassName(
                    "playersID2"
                  )[0].style.visibility = "visible";

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
                  document.getElementsByClassName("words")[0].innerHTML =
                    user.email;
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
                  document.getElementsByClassName("words")[0].innerHTML =
                    user.email;
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

db.collection("links")
  .doc(`${roomid}`)
  .onSnapshot((el)=> {
    let roomname = el.data().link;
    db.collection("rooms")
      .doc(`${roomname}`)
      .onSnapshot((el) => {
        let startbutton = el.data().start; 
        let type = el.data().name
        if (startbutton === true) {
          window.location = `./${type}.html`;  
        }
      });
  });