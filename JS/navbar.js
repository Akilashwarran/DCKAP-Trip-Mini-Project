
//-------------------------- login signup process --------------------------

let sign_in_btn = document.querySelector("#nav-btn");
let user_profile_div = document.querySelector("#nav-profile");
// let username = document.querySelector("#user-profile");

// sessionStorage.clear();
if(sessionStorage.getItem('userData'))

{ 
  let sessionStorage_value=sessionStorage.getItem('userData');
  console.log("email: "+sessionStorage_value)
  
if (sessionStorage.getItem('userData')) {

    let userDataString = sessionStorage.getItem('userData');
    
  
    let userData = JSON.parse(userDataString);
    if (userData.username_signup) {
      
        let user_name = userData.username_signup;
        username.innerText = user_name
        console.log("Username: " + user_name);
    } else {
        console.log("Username not found in userData");
    }
} else {
    console.log('userData not found');
}
  sign_in_btn.style.display = 'none';
 
  user_profile_div.classList.add("user-profile_blk")
  

 }
 else if(sessionStorage.getItem('login_details')){
    let sessionStorage_value=sessionStorage.getItem('login_details');
    console.log("login: "+sessionStorage_value)
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