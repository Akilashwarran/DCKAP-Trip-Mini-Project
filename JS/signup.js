// ------------navigate-form-div---
function navigateToPage() {
    let show=document.querySelector(".overlap")
      show.style.display="block" 
  }
  
  // ---------form change ------------------
  
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
  
  });
  loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
  
  });
  signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
  });
  
  // ------------login password icon change--------------
  
  let icon_hide = document.querySelector(".fa-eye-slash");
  let pass = document.querySelector(".pass");
  
  icon_hide.addEventListener("click", () => {
    if ( pass.type == "password") {
    pass.type = "text";
      icon_hide.classList.remove("fa-eye-slash");
      icon_hide.classList.add("fa-eye");
    } else  if(pass.type == "text") {
    pass.type = "password";
      icon_hide.classList.remove("fa-eye");
      icon_hide.classList.add("fa-eye-slash");
    }
  });
  
  
  // ---------------------signup password icon change---
  
  function togglePasswordVisibility(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(iconId);
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    }
  }


function login(){
  con
}


