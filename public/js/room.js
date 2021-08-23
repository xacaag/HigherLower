const randomIdGenerator = () => {
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  var uniqid = randLetter + Date.now();
  return uniqid;
};

var a;
const createroom = async () => {
  // await db
  // .collection("multiplayer-score").doc(`${cu}`).set({
  // score: 0,
// });  
  a = 1;
  document.getElementById("loader").style.visibility = "visible";
  let ref = await db.collection("rooms").add({
    players: 1,
    ready: false,
    start: false,
    time: firebase.firestore.FieldValue.serverTimestamp(),
    
  });
  localStorage.setItem('admin', a);

  let uid = randomIdGenerator().slice(8);
  await db.doc(`links/${uid}`).set({
    link: ref.id,
  });
  window.location = `lobby.html?roomid=${uid}`;
};

const join = async () => {
  const joincode = document.getElementById("join").value;

  let doc = await db.collection("links").doc(`${joincode}`).get();

  let { link } = doc.data();

  let roomData = await db.collection("rooms").doc(`${link}`).get();

  let { players } = roomData.data();
  await db
  .collection("multiplayer-score").doc(`${user.uid}`).set({
  score: 0,
});  
  if (players > 5) {
    alert("Өрөө дүүрсэн байна");
    return;
  }
  await db
    .collection("rooms")
    .doc(`${link}`)
    .set(
      {
        players: ++players,
        ready: true,
      },
      { merge: true }
    );
  window.location = `lobby.html?roomid=${joincode}`;
};
