import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import { db } from "./firebaseconfig.js"




// const inputFile = document.querySelector("#inputFile");
const productTitle = document.querySelector("#product-title");
const productDesc = document.querySelector("#product-description");
const productName = document.querySelector("#product-name");
const productNumber = document.querySelector("#product-number");
const productPrice = document.querySelector("#product-price");
const div = document.querySelector("#cont");
let arr= []

// const postImg = inputFile.files[0]


const form = document.querySelector("#form");


form.addEventListener("submit" , async(event)=>{
  event.preventDefault();
  const postData = {
      Title: productTitle.value,
      Description: productDesc.value,
      Price: productPrice.value,
      Name: productName.value,
      Number:productNumber.value
  
  }


try {
    const docRef = await addDoc(collection(db, "PostAd"), postData);
    console.log("Document written with ID: ", docRef.id);
    arr.push(postData);
    setInterval(() => {
      window.location = "./index.html" 
    }, 1000);

  } catch (e) {
    console.error("Error adding document: ", e);
  }


  

















productTitle.value="" 
productDesc.value="" 
productPrice.value="" 
productName.value="" 
productNumber.value=""
})