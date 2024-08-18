import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { uploadBytes , getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { collection , addDoc , getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { auth , storageRef , db } from "./firebaseconfig.js"



const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const profileImg = document.querySelector("#profile-img");


form.addEventListener("submit" , async(event)=>{
    event.preventDefault();
    

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // window.location = "login.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    });


    const Collection = collection(db , "Profile-Details");


    console.log(profileImg.files[0])
    console.log(email.value)
    console.log(password.value)

    //upload files to the storage
    uploadBytes(storageRef, profileImg.files[0], email.value , password.value)
    .then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(storageRef)
  .then((url) => {
    console.log("url==>" , url)

    addDoc(Collection , {
      email: email.value,
      password: password.value,
      profileUrl: url,
      category: "Profile-images"
    }).then(()=>{
      console.log("Document updated to the DB");
      
    }).catch((error)=>{
      console.error(error);

    })
  })
  .catch((error)=>{
    console.log(error);
    
  })
    })
    .catch((err)=>{
      console.log(err);
      
    })


    email.value=""
    password.value=""
})

export async function getImageFromDb(){
  const querySnapshot = await getDocs(storageRef);
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id}`);
  console.log(doc.data());
  
});
}