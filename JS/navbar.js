
let sign_in_btn = document.querySelector("#sign-in-btn");
let user_profile_div = document.querySelector(".user_profile");

// sessionStorage.clear();
if(sessionStorage.getItem('userData'))

{ 
  let sessionStorage_value=sessionStorage.getItem('userData');
  console.log("email: "+sessionStorage_value)
  sign_in_btn.style.display = 'none';
  user_profile_div.classList.add("user-profile_blk")

 }
else{
  sign_in_btn.style.display = 'block'
}    
     

sign_in_btn.addEventListener("click",()=>{
  
    sign_in_btn.href = "login.html";
  

})


//--------------------------- menus ------------------------------

let destination = document.querySelector("#destination-menu");
destination.addEventListener("click",()=>{
    destination.href="destinations.html";
});

let planner = document.querySelector("#planner-menu");
planner.addEventListener("click",()=>{
    planner.href="planner.html";
});

let collections = document.querySelector("#collections-menu");
collections.addEventListener("click",()=>{
    collections.href="collections.html";
});

let dashboard = document.querySelector("#dashboard");
dashboard.style.display = "none"
dashboard.addEventListener("click",()=>{
    dashboard.href="admin.html";
})