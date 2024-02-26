const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");


// fire credentials

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAb3BzH5tfNzTuKUDEhVpz51RzPySS5Vfc",
      authDomain: "dckap-trip-26e10.firebaseapp.com",
      databaseURL: "https://dckap-trip-26e10-default-rtdb.firebaseio.com",
      projectId: "dckap-trip-26e10",
      storageBucket: "dckap-trip-26e10.appspot.com",
      messagingSenderId: "149435458483",
      appId: "1:149435458483:web:41d72b11078e86b888e1c6"
    };

    const app = initializeApp(firebaseConfig);

    import { getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

    let db = getFirestore(app);

    console.log(db);

     let username_firebase = document.getElementById("Username");
     let password_firebase = document.getElementById("password_signup");
     let email_firebase =document.getElementById("signup_email")
     console.log(username_firebase)
     console.log(password_firebase)
     console.log(email_firebase)
   let signup_fire_btn=document.getElementById("sign_up_button");
  //  console.log(signup_fire_btn)

   let getRef = collection(db, "user_details");

   let getData = await getDocs(getRef);
    console.log(getData.size);



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
// ------------------------sign-up-OTP-verification--and-signup-validation----------
 let username=document.getElementById("Username");
 let email_id=document.getElementById("signup_email");



let form_div = document.querySelector(".form-container");
console.log(form_div);
var sign = document.getElementById('sign_up_button');

document.forms.signup.addEventListener("submit", (e) => {
    e.preventDefault();

//----------------signup-inputs---------------------------------------

    let usernameInput = document.getElementById("Username");
    let emailInput = document.getElementById("signup_email");
    let passwordInput = document.getElementById("password_signup");
    let confirmPasswordInput = document.getElementById("Confirm_password");

//------------------------error-message----------------------------------
    let signup_email_error = document.querySelector('.signup_email_error');
    console.log(signup_email_error);

    let signup_username_error = document.querySelector('.signup_user_error');
    console.log(signup_email_error);
    let signup_password_error = document.querySelector('.signup_password_error');
    console.log(signup_password_error);

    let signup_confirm_error = document.querySelector('.signup_confirm_error');
    console.log(signup_confirm_error);

    if (!validateUsername(usernameInput.value)) {
         signup_username_error.style.display="block"
         usernameInput.classList.add("border")
        return;
    }
    else{
        signup_username_error.style.display="none";
          usernameInput.classList.remove("border")
    }


    if (!validateEmail(emailInput.value)) {
          signup_email_error.style.display="block"
          emailInput.classList.add("border")
        return;
    }
    else{
        emailInput.classList.remove("border")
       signup_email_error.style.display="none"
    }

    if (!validatePassword(passwordInput.value)) {
 passwordInput.classList.add("border")
     signup_password_error.style.display="block"
        return;
    }
    else{
      passwordInput.classList.remove("border")
      signup_password_error.style.display="none"
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
       signup_confirm_error.style.display="block";
        confirmPasswordInput.classList.add("border")
        return;
    }
    else{
      signup_confirm_error.style.display="none";
         confirmPasswordInput.classList.remove("border")
    }

    let email_id = emailInput.value;
    // let otp_random = generateRandomOTP();

    let mail_msg = `Hi ${usernameInput.value} welcome to our website please verify email id and enter your otp
                OTP:<br> ${otp_random} <br>`;

    Email.send({
        SecureToken: "92b969b6-deef-4c44-8b9e-f31609066e86",
        To: email_id,
        From: "tripdckap@gmail.com",
        Subject: "Enter the OTP",
        Body: mail_msg,
    }).then(
        message => alert(message)
    ).catch(error => alert(error));

    form_div.style.display = "none";
    otp_container.style.display = "block";
});


function validateUsername(username) {

    return username.trim() !== '';
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
   return password.length >= 6; 
}

// function generateRandomOTP() {
//     return Math.floor(100000 + Math.random() * 900000);
// }

console.log( email_firebase.value,)
 let overlap=document.querySelector(".overlap");
 let otp_container=document.getElementById("otp_container");

 let otp_random=Math.floor(Math.random()*100000);
 let otpbutton=document.querySelector("#otpbtn")
          console.log(otpbutton)
    
    otpbutton.addEventListener("click",async()=>{
      console.log("otp")
      let otp_value=document.getElementById("otpinputvalue").value;
      if(otp_value==otp_random){
      alert("valid OTP");


    


          let id = getData.size;






       let ref = doc(db,"user_data",`${id++}`);



        
        let userDataRef = collection(db, "user_data",++id);

        let dataReference = await setDoc(ref, {
            username: username_firebase.value,
            password: password_firebase.value,
            email_ID: email_firebase.value,
        }).then(() => {
            alert("Data Added Successfully");
          
        }).catch((err) => {
            console.log(err);
        });
        



        
          }
          else{
          alert("invalid OTP")
          }

          // validate()
    
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
     login_email_validation.classList.add("border")
      login_email_error.style.display="block"

    }
    else{
      login_email_error.style.display="none"
       login_email_validation.classList.remove("border")
    }
     if(login_password_validation.value.trim().length==0){
  login_password_validation.classList.add("border")
      login_password_error.style.display="block"
    }
    else{
       login_password_validation.classList.remove("border")
      login_password_error.style.display="none"
    }

    login_email_validation.value=""
    login_password_validation.value=""

   })
 
//--------------tooltip--------------

document.addEventListener('DOMContentLoaded', function () {
   var passwordInput = document.getElementById('password_signup');

    // Assuming you have a reference to the tooltip element
    var passwordTooltip = document.getElementById('passwordTooltip');

    // Add a click event listener to the password input
    passwordInput.addEventListener('click', function () {
        // Toggle the 'active' class to show/hide the tooltip
        passwordTooltip.classList.toggle('active');
    });
});

var count = document.querySelector("#length");
var lower = document.querySelector("#letter");
var capital = document.querySelector("#capital");
var digit = document.querySelector("#number");
var special = document.querySelector("#special");

var password = document.getElementById('password_signup');

password.addEventListener("input", (event) => {

    var passwordTooltip = document.getElementById('passwordTooltip');

    var password_valid = /[a-z]/g;
    var uppercase = /[A-Z]/g;
    var regexspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
    var number = /[0-9]/g;
    var length = password.value.length;

    lower.classList.remove("invalid", "valid");
    capital.classList.remove("invalid", "valid");
    digit.classList.remove("invalid", "valid");
    count.classList.remove("invalid", "valid");
    special.classList.remove("invalid", "valid");

    if (password.value.match(password_valid)) {
        lower.classList.add("valid");
    } else {
        lower.classList.add("invalid");
    }

    if (password.value.match(uppercase)) {
        capital.classList.add("valid");
    } else {
        capital.classList.add("invalid");
    }

    if (password.value.match(number)) {
        digit.classList.add("valid");
    } else {
        digit.classList.add("invalid");
    }

    if (length >= 8) {
        count.classList.add("valid");
    } else {
        count.classList.add("invalid");
    }

    if (password.value.match(regexspecial)) {
        special.classList.add("valid");
    } else {
        special.classList.add("invalid");
    }


    // Check if all conditions are satisfied
    var allConditionsMet = lower.classList.contains("valid") &&
                           capital.classList.contains("valid") &&
                           digit.classList.contains("valid") &&
                           count.classList.contains("valid") &&
                           special.classList.contains("valid");

    // Hide the tooltip if all conditions are satisfied
    if (allConditionsMet) {
        document.getElementById('passwordTooltip').classList.remove('active');
    } else {
        document.getElementById('passwordTooltip').classList.add('active');
    }
}
)

