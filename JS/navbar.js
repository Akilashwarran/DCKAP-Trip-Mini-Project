
//-------------------------- login signup process --------------------------

document.addEventListener("DOMContentLoaded", function() {
    let signintag = document.getElementById("nav-btn");
    let profiletag = document.getElementById("nav-profile");
    let admintag = document.querySelector('.menu li:nth-child(5)');

    let loginDetailsExists = sessionStorage.getItem("login_details");
    let userSignupDataExists = sessionStorage.getItem("user_signup_Data");
  
    if (loginDetailsExists || userSignupDataExists) {
      
      let loginDetails = JSON.parse(loginDetailsExists);
      if (loginDetails && loginDetails.email_login === "tripdckap@gmail.com") {
        signintag.style.display = "none";
        profiletag.style.display = "block";
        admintag.style.display = "block";
      } else {
        signintag.style.display = "none";
        profiletag.style.display = "block";
        admintag.style.display = "none";
      }
    } else {
    
      signintag.style.display = "block";
      profiletag.style.display = "none";
      admintag.style.display = "none";
    }
});

