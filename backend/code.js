// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_i7tf3YUipCVKN-GPGZExsPSo08LaCLc",
    authDomain: "eduversa-f2b8a.firebaseapp.com",
    projectId: "eduversa-f2b8a",
    storageBucket: "eduversa-f2b8a.appspot.com",
    messagingSenderId: "337229396700",
    appId: "1:337229396700:web:e273b5e8a9472fb3ef1219",
    measurementId: "G-T4K38LBVNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

login.addEventListener('click', (e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
          alert("Login Success")
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage)
      });
 });