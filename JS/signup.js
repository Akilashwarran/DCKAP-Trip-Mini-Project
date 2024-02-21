// ------------navigate-form-div---
// function navigateToPage() {
//   let show=document.querySelector(".overlap")
//     show.style.display="block" 
// }

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
// ------------------------sign-up-OTP-verification------------
 let username=document.getElementById("Username");
 let email_id=document.getElementById("signup_email");
//  console.log(email_id)

let form_div=document.querySelector(".form-container")
console.log(form_div);
  var sign = document.getElementById('sign_up_button')
  
 document.forms.signup.addEventListener("submit",(e)=>{
  e.preventDefault();
   console.log("hi");
   let email_id=document.getElementById("signup_email").value;
 console.log(email_id)

   let mail_msg =`Hi ${username.value} welcome to our website please verifiy email id and  enter your otp
                OTP:<br> ${otp_random} <br>`;
    

   Email.send({
    SecureToken :"92b969b6-deef-4c44-8b9e-f31609066e86",
    To :email_id,
    From : "tripdckap@gmail.com",
    Subject : "Enter the OTP",
    Body : mail_msg,
}).then(
  message => alert(message)
).catch(error  =>alert(error));

form_div.style.display="none"
 otp_container.style.display="block"


 })

 let overlap=document.querySelector(".overlap");
 let otp_container=document.getElementById("otp_container");

 let otp_random=Math.floor(Math.random()*100000);
 let otpbutton=document.querySelector("#otpbtn")
          console.log(otpbutton)
    
    otpbutton.addEventListener("click",()=>{
      console.log("otp")
      let otp_value=document.getElementById("otpinputvalue").value;
      if(otp_value==otp_random){
      alert("valid OTP")
     
      }
      else{
      alert("invalid OTP")
      }

      otp_value=" "
    
    })

    // --------------------------------form--basic--validation----------------
   let login_Form_validation= document.forms.login;


   let login_email_validation=document.getElementById("login_email")

   let login_password_validation=document.getElementById("login_pass")

   login_Form_validation.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("clicked")
   let login_email_error=document.querySelector(".login_email_error")
   let login_password_error=document.querySelector(".pass-link .login_password_error")
   console.log(login_password_error)
    if(login_email_validation.value.trim().length==0){

      login_email_error.style.display="block"

    }
    else{
      login_email_error.style.display="none"
    }
     if(login_password_validation.value.trim().length==0){

      login_password_error.style.display="block"
    }
    else{
      login_password_error.style.display="none"
    }

    login_email_validation.value=""
    login_password_validation.value=""

   })

  //--------------signup-base-validation---------
  let signup_Form_validation= document.forms.signup;
  console.log(signup_Form_validation);



  