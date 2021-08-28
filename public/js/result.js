let id = localStorage.getItem("id");
let gamerScore = localStorage.getItem("gamerScore");

document.getElementById("loader").style.display = "block";
document.getElementsByClassName("pillar_holder")[0].style.filter = "blur(10px)";
firebase.auth().onAuthStateChanged(async (user) => {
  await db
    .collection("links")
    .doc(`${id}`)
    .get()
    .then((el) => {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(async (n) => {
          let code = el.data().link;
          let arr;
          await db
            .collection("rooms")
            .doc(`${code}`)
            .get()
            .then((el) => {
              let object = { name: n.data().name, points: gamerScore };
              arr = el.data().gamer;
              arr.push(object);
            });
          await db.collection("rooms").doc(`${code}`).set(
            {
              gamer: arr,
            },
            { merge: true }
          );
        });
    });

  await db
    .collection("links")
    .doc(`${id}`)
    .onSnapshot(async (el) => {
      let code = el.data().link;
      await db
        .collection("rooms")
        .doc(`${code}`)
        .onSnapshot(async (elm) => {
          let medals = elm.data().gamer;

          let sorted = _.chain(medals).sortBy("points").reverse().value();

          await sorted.forEach((el, ind) => {
            document.getElementById(`p${1 + ind}_name`).innerHTML = el.name;
            document.getElementById(
              `p${1 + ind}_points`
            ).innerHTML = `${el.points} оноо`;
            if (medals.length === elm.data().total) {
              document.getElementById("loader").style.display = "none";
              document.getElementsByClassName("pillar_holder")[0].style.filter =
                "none";
              document.getElementsByClassName("big_text")[0].innerHTML =
                " --- Тоглолтын тооны харьцаа ---";
            }
          });

          if (document.getElementById("p6_name").innerHTML === "") {
            document.getElementById("p6id").style.display = "none";
          }
          if (document.getElementById("p5_name").innerHTML === "") {
            document.getElementById("p5id").style.display = "none";
          }
          if (document.getElementById("p4_name").innerHTML === "") {
            document.getElementById("p4id").style.display = "none";
          }
          if (document.getElementById("p3_name").innerHTML === "") {
            document.getElementById("p3id").style.display = "none";
          }
          if (document.getElementById("p2_name").innerHTML === "") {
            document.getElementById("p2id").style.display = "none";
          }
          if (document.getElementById("p1_name").innerHTML === "") {
            document.getElementById("p1id").style.display = "none";
          }
        });
    });
});

// setTimeout(() => {
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  location.href = "multiplayer.html";
});
// }, 5000);
