"use strict"


let home_page_main_container = document.querySelector(".home-page-main-container")
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
let overlap = document.querySelector(".overlap")


let login_signup_page = document.querySelector("#login-signup-btn");

login_signup_page.addEventListener("click",()=>{

    let navigate_to_login = document.getElementById("change");
    navigate_to_login.href="login.html";

    let account_div = document.createElement("div")
    account_div.className = "account_div";
    let account_p_tag = document.createElement("p")
    account_p_tag.id = "account-text"

    login_div.innerHTML = `<i class="fa-regular fa-circle-user account_creation"></i>`
    account_p_tag.innerText = "Account";
    account_div.append(account_p_tag);
    login_div.append(account_div)

    account_p_tag.addEventListener("click",()=>{
        alert("navigate profile page")
    })
    
    //    alert("successfully")

})



//------------------------------- search --------------------------------------


