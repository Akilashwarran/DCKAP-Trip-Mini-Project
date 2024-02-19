"use strict"

//--------------------------------- review ------------------------------------

let review_added = document.getElementById("review-added")
review_added.addEventListener("click",()=>{
    alert("Review added clicked")
})

//--------------------------------- templates menu ---------------------------------

let templates_menu = document.querySelector(".menu");
templates_menu.addEventListener("click",()=>{
   alert("template menu clicked")
})

let explore_templates = document.querySelector("#templates-btn");
explore_templates.addEventListener("click",()=>{
    alert("explore templates clicked")
})

//--------------------------------- planner menu -----------------------------------

let planner_menu = document.querySelector(".menu2");
planner_menu.addEventListener("click",()=>{
    alert("planner menu clicked")
})

let explore_planner = document.querySelector("#planner-btn");
explore_planner.addEventListener("click",()=>{
    alert("explore planner clicked")
})

//-------------------------------- critique collections --------------------------------

let critique_collections_menu = document.querySelector(".menu3");
critique_collections_menu.addEventListener("click",()=>{
    alert("Critique collections menu clicked");
});

let explore_critique_collections = document.querySelector("#Critique-collections-btn");
explore_critique_collections.addEventListener("click",()=>{
    alert("explore critique collections clicked")
})

//-------------------------------- login/signup page ----------------------------------

// let login_signup_page = document.querySelector("#login-signup-btn");
// login_signup_page.addEventListener("click",()=>{
//     alert("login-signup page clicked");
// })

//------------------------------- search --------------------------------------

// let search = document.querySelector("#search");
// let dropdown = document.querySelector(".dropdown");

// search.addEventListener("click",(event)=>{
//     event.preventDefault();
//    dropdown.classList.add("dropdown");
// })
// let p_tags = document.querySelectorAll(".pname");
// let alertmsg = document.querySelector("h3");
// console.log(p_tags);
// let value=0;

// search.addEventListener("keyup",()=>{
 
//     let Change_Uppercase_value = search.value.toUpperCase();
//     console.log(Change_Uppercase_value);
//     let str=1;
   
//     p_tags.forEach((Product_name,index) => {
//         value=p_tags[index].parentElement;
//         value.classList.add("opacity");
//         Product_name = Product_name.innerHTML.toUpperCase();
//         console.log(Product_name);
//         if(Product_name.includes(Change_Uppercase_value) ){
//                 value.classList.remove("opacity");
//                 alertmsg.classList.remove("no_math_product_name");
//                 str=0;
//         }
//     });

//     if(str)
//     {
//         alertmsg.classList.add("no_math_product_name");
//     }

// })