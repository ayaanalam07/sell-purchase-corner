import {  onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {  getDocs , collection } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import { auth , db } from "./firebaseconfig.js";



const logout = document.querySelector('#Logout')




const btnDiv = document.querySelector("#btnDiv")


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      btnDiv.innerHTML = `
  <a class="link link-primary " href="./login.html">Login</a>
   `
    }
  });
  logout.addEventListener('click',()=>{
    signOut(auth).then(() => {
    window.location = 'login.html'
    }).catch((error) => {
      // An error happened.
    });
  })

const productTitle = document.querySelector("#product-title");
const productDesc = document.querySelector("#product-description");
const productName = document.querySelector("#product-name");
const productNumber = document.querySelector("#product-number");
const productPrice = document.querySelector("#product-price");

const div = document.querySelector("#cont");


async function renderData(){
  
  const postData = {
    Title: productTitle,
    Description: productDesc,
    Price: productPrice,
    Name: productName,
    Number:productNumber

}

  const querySnapshot = await getDocs(collection(db, "PostAd"),postData);
  querySnapshot.forEach((item) => {
    console.log(`${item.id} =>`)
    console.log(item.data());

    div.innerHTML+= `
    <div class="flex flex-wrap justify-center">
    <div class="card bg-white w-96 h-85 mt-[3rem] m-[8rem] shadow-xl">
    <div class="card-body">
    <h2 class=" text-black">${item.Title}</h2>
    <p class="text-black">${item.Description}</p>
    <h3 class=" text-black">${item.Price}</h3>
    <h2 class=" text-black">${item.Name}</h2>
    <h3 class=" text-black">${item.Number}</h3>
    <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
    </div>
    </div>
    </div>
    </div>
    `

    
  });
}

renderData();


    


