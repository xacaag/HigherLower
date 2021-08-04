var firebaseConfig = {
    apiKey: "AIzaSyAvvrAOt9qx870I4CGmPEk9ptLAkv8A4d0",
    authDomain: "higherlowergame-176e9.firebaseapp.com",
    projectId: "higherlowergame-176e9",
    storageBucket: "higherlowergame-176e9.appspot.com",
    messagingSenderId: "20417069692",
    appId: "1:20417069692:web:807d158b9decae1947bff9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
console.log = db;
console.log = storage;