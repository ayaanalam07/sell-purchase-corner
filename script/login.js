import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { auth, db } from "../config.js";
 

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener("submit" , async (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    window.location = "index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    alert('Error')
  });

  
  
})