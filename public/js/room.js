const randomIdGenerator = () => {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    return uniqid;
  };
  
  const createroom = async () => {
    let roomName = document.getElementById("room-input").innerText;
    let ref = await db.collection("rooms").add({
      roomName: roomName,
      players: 0,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });  
    await db
      .collection("rooms")
      .get()
      .then((doc) => {
        doc.forEach((el) => {
          console.log(el.data());
          let playersNumber = el.data().players;
          playersNumber++;
          db.collection("rooms").doc(el.id).update({
            players: playersNumber,
          });
        });
      });
  
    let uid = randomIdGenerator().slice(8);
    await db.doc(`links/${uid}`).set({
      link: ref.id,
    });
  
    sessionStorage.setItem("roomid", uid);
  
    window.location = `lobby.html?roomid=${uid}`;
  };
  
  const join = async () => {
    let realcode;
    const joincode = document.getElementById("join").value;
  
    await db
      .collection("links")
      .doc(`${joincode}`)
      .get()
      .then((el) => {
        realcode = el.data().link;
      });
  
    await db
      .collection("rooms")
      .doc(`${realcode}`)
      .get()
      .then((el) => {
        console.log(el.data());
        let playersNumber = el.data().players;
        playersNumber++;
        db.collection("rooms").doc(el.id).update({
          players: playersNumber,
        });
        setTimeout(() => {
          window.location = `lobby.html?roomid=${el.id}`;
        }, 500);
      });
  };