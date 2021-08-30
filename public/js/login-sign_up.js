// let loader_ani = documnet.getElementById("loader")
let logo = document.getElementById("logo_")
const auth = firebase.auth;

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth().signInWithPopup(provider);
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      await db
        .collection("users")
        .doc(`${user.uid}`)
        .onSnapshot((el) => {
          if (el.data() === undefined) {
            db.collection("users").doc(`${user.uid}`).set({
              name: user.email,
              time: firebase.firestore.FieldValue.serverTimestamp(),
              score: 0,
            });
          } else {
            console.log("asuudalgui baina");
          }
        });
        document.getElementById("loader").style.visibility = "visible";
      setTimeout(() => {
        location.href = "./index.html";
      }, 2000);

    }
  });
 

};
const logo_button = () =>{
 location.href="index.html";

}
const signInWithFb = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth().signInWithPopup(provider);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      db.collection("users").doc(`${user.uid}`).set({
        name: user.email,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        score: 0,
      });
      location.href = "./index.html";
    }
  });
};

const signUp = () => {
  let email = document.getElementById("signup_email").value;
  let password = document.getElementById("signup_password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      let user = userCredential.user;
      await db.collection("users").doc(`${user.uid}`).set({
        name: email,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        score: 0,
      });
      location.href = "./index.html";
    })
    .catch((err) => {
      alert(err);
    });
};

const LogOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      location.href = "./index.html";
      alert("Bye");
    })
    .catch((error) => {
      alert(error);
    });
};

const login = () => {
  let email = document.getElementById("login_email").value;
  let password = document.getElementById("login_password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.href = "./index.html";
      //   document.getElementsByClassName("LogOut")[0].display = "none";
      // }else {
      //     document.getElementsByClassName("LogOut")[0].visibility = "visible";
    }
  });
};
