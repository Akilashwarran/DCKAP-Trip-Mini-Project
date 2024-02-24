
"use strict"



let sign_in_btn = document.querySelector("#sign-in-btn");
sign_in_btn.addEventListener("click",()=>{
    sign_in_btn.href = "login.html";
    console.log("he");
})
//--------------------------- menus ------------------------------

let destination = document.querySelector("#destination-menu");
destination.addEventListener("click",()=>{
    destination.href="destination.html";
});

let planner = document.querySelector("#planner-menu");
planner.addEventListener("click",()=>{
    planner.href="planner.html";
});

let collections = document.querySelector("#collections-menu");
collections.addEventListener("click",()=>{
    collections.href="collections.html";
});


//--------------------explore buttons ----------------------------

let destination_explore = document.querySelector("#destination-explore");
destination_explore.addEventListener("click",()=>{
    destination_explore.href="destination.html";
});

let planner_explore = document.querySelector("#planner-explore");
planner_explore.addEventListener("click",()=>{
    planner_explore.href="planner.html";
});

let collections_explore = document.querySelector("#collections-explore");
collections_explore.addEventListener("click",()=>{
    collections_explore.href="collections.html";
});

