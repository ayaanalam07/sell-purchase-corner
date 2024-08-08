import { createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {ref , uploadBytes,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { auth, db , storage } from "../config.js";

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const profileImg = document.querySelector('#profile-img');


    form.addEventListener('submit',async (event)=>{
        event.preventDefault()
        console.log('email===>', email.value);
        console.log('password===>', password.value);
        console.log('firstname===>', firstname.value);
        console.log('lastname ===>', lastname.value);
        console.log('lastname ===>', profileImg.files[0]);
        
        const profileImgURL = await showUrl(profileImg.files[0])


        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async(userCredential) => {
          console.log(userCredential)
          alert('You have sucessfully Registered')
            window.location="login.html"

            try {
              const docRef = await addDoc(collection(db, "users"), {
                email: email.value,
                firstname: firstname.value,
                lastname: lastname.value,
                profileImg:profileImgURL
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
            

          
    
        })

        .catch((error) => {
          
          const errorMessage = error.message;
          console.log(errorMessage);
          alert('Error')
          // ..
        });

        
      })




      

async function showUrl(files) {
const storageRef = ref(storage, email.value); 
try {
const uploadImg = await uploadBytes(storageRef, files);
 const url = await getDownloadURL(storageRef);
console.log(url);
return url;
}
 catch (error){ 
  console.log(error);
}
}