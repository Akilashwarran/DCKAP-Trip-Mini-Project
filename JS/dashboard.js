
"use strict"

let destination = document.querySelector("#destination");
destination.addEventListener("click",()=>{
    destination.href="destination.html";
})

let sign_in_btn = document.querySelector("#sign-in-btn");
sign_in_btn.addEventListener("click",()=>{
    sign_in_btn.href = "login.html";
    console.log("he");
})
