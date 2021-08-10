
// const firebaseConfig = {
//     apiKey: "AIzaSyAvvrAOt9qx870I4CGmPEk9ptLAkv8A4d0",
//     authDomain: "higherlowergame-176e9.firebaseapp.com",
//     projectId: "higherlowergame-176e9",
//     storageBucket: "higherlowergame-176e9.appspot.com",
//     messagingSenderId: "20417069692",
//     appId: "1:20417069692:web:807d158b9decae1947bff9"
//   };

//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
  const auth = firebase.auth;


  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth().signInWithPopup(provider);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        location.href = "./index.html";
      }
    });
  };

  const signInWithFb = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth().signInWithPopup(provider);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        location.href = "./index.html";
      }
    });
  }

  const signUp = () => {
    let email = document.getElementById("signup_email").value;
    let password = document.getElementById("signup_password").value;
        db.collection('users').add({
            name: email,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((result) => {
            let user = result.user;
            let uid = user.uid;
          })
          .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            alert(err);
          });
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              location.href = "./index.html";
            //   document.getElementsByClassName("LogOut")[0].display= "none";
            // }else {
            //     document.getElementsByClassName("LogOut")[0].visibility = "visible";
            }
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

        firebase.auth().signInWithEmailAndPassword(email, password)
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
