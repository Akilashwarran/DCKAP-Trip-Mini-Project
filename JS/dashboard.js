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

let login_div = document.querySelector(".home-page-login-signup-btn");
let change_account = document.querySelector(".home-page-account-creation");
console.log(change_account);


let login_signup_page = document.querySelector("#login-signup-btn");

login_signup_page.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("hello");
    alert("signup successfully")
    // let account_div = document.createElement("div")
    // account_div.className = "account_div";

    // let account_link = document.createElement("span")
    // account_link =`<i class="fa-regular fa-circle-user account_creation"></i>`
    // let account_p_tag = document.createElement("p")

    // login_div.innerHTML = `<i class="fa-regular fa-circle-user account_creation"></i>`
    // account_p_tag.innerText = "Account";
    // account_div.append(account_p_tag,account_link);
    // login_div.append(account_div)
})

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


