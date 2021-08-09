
// const login = () => {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
// };

// const signIn = () => {
//   console.log('asd')
// }

// const signInWithFacebook = () => {

//     var provider = new firebase.auth.FacebookAuthProvider();

//     firebase
//         .auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             var user = result.user;})
//             .catch(err => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 alert(err)
//             })

//     const facebookProvider = new firebase.auth.FacebookAuthProvider();
//     console.log(facebookProvider)
//         auth.signInWithPopup(facebookProvider)
//         .then(() => {
//             window.location.assign('./profile');
//         })
//         .catch(error => {
//             console.error(error);
//         })
// }

// const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };