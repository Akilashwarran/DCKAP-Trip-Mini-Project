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


// ------------------------sign-up-OTP-------------
 let username=document.getElementById("Username");
 let email_id=document.getElementById("signup_email");
//  console.log(email_id)

let form_div=document.querySelector(".form-container")
console.log(form_div);
  
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

//  function otpdata(){
     
//     overlap.style.display="none"
  
    
    
    // let otpdiv=document.createElement('div');
    // otpdiv.className='otpdiv';
    // console.log(otpdiv)
    // let label=document.createElement('label');
    // label.className='otplabel';
    // label.textContent="OTP:";
    //   let otpinput=document.createElement("input");
    //     otpinput.type="text";
    //     otpinput.id="otpinputvalue";
    // let otpbutton=document.createElement("button");
    
    // otpbutton.textContent="ok";
    // otpbutton.className="otpbtn";
    
    // otpmaincontainer.append(otpdiv);
    //   otpdiv.append(label);
    //   otpdiv.append(otpinput);
    //   otpdiv.append(otpbutton);
    

    
  
//  }

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

    
    
    })