const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

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

import { getFirestore, getDoc, getDocs, doc, setDoc, query, where, updateDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let db = getFirestore(app);

let username_firebase = document.getElementById("Username");
let password_firebase = document.getElementById("password_signup");
let email_firebase = document.getElementById("signup_email")
// console.log(username_firebase)
// console.log(password_firebase)
// console.log(email_firebase)
let signup_fire_btn = document.getElementById("sign_up_button");

signupBtn.addEventListener('click', () => {
    loginForm.style.marginLeft = "-50%";
});

loginBtn.addEventListener('click', () => {
    loginForm.style.marginLeft = "0%";
});

signupLink.addEventListener('click', (event) => {
    signupBtn.click();
    event.preventDefault();
});

// ------------login password icon change--------------

let icon_hide = document.querySelector(".fa-eye-slash");
let pass = document.querySelector(".pass");

icon_hide.addEventListener("click", () => {
    if (pass.type == "password") {
        pass.type = "text";
        icon_hide.classList.remove("fa-eye-slash");
        icon_hide.classList.add("fa-eye");
    } else if (pass.type == "text") {
        pass.type = "password";
        icon_hide.classList.remove("fa-eye");
        icon_hide.classList.add("fa-eye-slash");
    }
});


// ---------------------signup password icon change---
let eyeIconSignup = document.getElementById("eye_icon_signup");
let eyeIconConfirm = document.getElementById("eye_icon_confirm");
let passSignup = document.getElementById("password_signup");
let passConfirm = document.getElementById("Confirm_password");

eyeIconSignup.addEventListener("click", () => {
    togglePasswordVisibility(passSignup, eyeIconSignup);
});

eyeIconConfirm.addEventListener("click", () => {
    togglePasswordVisibility(passConfirm, eyeIconConfirm);
});

function togglePasswordVisibility(passwordInput, eyeIcon) {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else if (passwordInput.type === "text") {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

// ------------------------xmark-------------------------------------
let x_button = document.querySelector("#xmark")
console.log(x_button)
x_button.addEventListener("click", () => {
    location.href = "index.html"
})
// ------------------------sign-up-OTP-verification--and-signup-validation----------
let username = document.getElementById("Username");
let email_id = document.getElementById("signup_email");



let form_div = document.querySelector(".form-container");
console.log(form_div);
var sign = document.getElementById('sign_up_button');

document.forms.signup.addEventListener("submit", async (e) => {
    e.preventDefault();

    var usernameInput = document.getElementById("Username");
    var emailInput = document.getElementById("signup_email");
    var passwordInput = document.getElementById("password_signup");
    var confirmPasswordInput = document.getElementById("Confirm_password");

    let signup_email_error = document.querySelector('.signup_email_error');
    let signup_username_error = document.querySelector('.signup_user_error');
    let signup_password_error = document.querySelector('.signup_password_error');
    let signup_confirm_error = document.querySelector('.signup_confirm_error');

    if (!validateUsername(usernameInput.value)) {
        signup_username_error.style.display = "block";
        usernameInput.classList.add("border");
        return;
    } else {
        signup_username_error.style.display = "none";
        usernameInput.classList.remove("border");
    }

    if (!validateEmail(emailInput.value)) {
        signup_email_error.style.display = "block";
        emailInput.classList.add("border");
        return;
    } else {
        emailInput.classList.remove("border");
        signup_email_error.style.display = "none";
    }

    if (!validatePassword(passwordInput.value)) {
        passwordInput.classList.add("border");
        signup_password_error.style.display = "block";
        return;
    } else {
        passwordInput.classList.remove("border");
        signup_password_error.style.display = "none";
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        signup_confirm_error.style.display = "block";
        confirmPasswordInput.classList.add("border");
        return;
    } else {
        signup_confirm_error.style.display = "none";
        confirmPasswordInput.classList.remove("border");
    }


    let email_id = emailInput.value;
    let emailExists = await checkIfEmailExists(email_id);

    if (emailExists) {
        alert("Email already exists. Please login instead.");
      
        return;
    }
   
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

    // Continue with OTP verification
    form_div.style.display = "none";
    otp_container.style.display = "block";
});

var usernamevalue = document.getElementById("Username");
console.log(usernamevalue)
var emailvalue = document.getElementById("signup_email");
var passwordvalue = document.getElementById("password_signup");
let overlap = document.querySelector(".overlap");
let otp_container = document.getElementById("otp_container");

var otp_random = Math.floor(Math.random() * 100000);
console.log(otp_random);

let getRef = collection(db, "user_data");

let getData = await getDocs(getRef);
let id = getData.size;
let otpbutton = document.querySelector("#otpbtn")
otpbutton.addEventListener("click", async () => {
    console.log("otp");
    let otp_value = document.getElementById("otpinputvalue").value;
    let otpbutton = document.querySelector("#otpbtn");

    if (otp_value == otp_random) {
        alert("valid OTP");

        let ref = doc(db, "user_data", `${id++}`);


        let user_details = {
            is_admin: 0,

            username: username_firebase.value,
            password: password_firebase.value,
            email_ID: email_firebase.value,


        }

        setDoc(ref, user_details)
            .then(() => {
                // alert("Data Added Successfully");
                location.href="index.html"
            })
            let userData = {
    uid: 0, // Initialize user ID
    username_signup: usernamevalue.value,
    email_signup: emailvalue.value,
    password_signup: passwordvalue.value
};

// // Retrieve existing user data from session storage
// let existingUserData = sessionStorage.getItem('userData');

// // If existing user data exists, parse it from JSON
// if (existingUserData) {
//     userData = JSON.parse(existingUserData);
// }

// Increment user ID
userData.uid = (userData.uid || 0) + 1;

// Store updated user data in session storage
sessionStorage.setItem('userData', JSON.stringify(userData));

    } else {
        alert("invalid OTP");
    }

    otp_value = "";
});
async function checkIfEmailExists(email) {
    const checking_email = await getDocs(collection(db, "user_data"));
    return checking_email.docs.some(doc => doc.data().email_ID === email);
}


if(sessionStorage.getItem('userData'))

  { 
   let sessionStorage_value=sessionStorage.getItem('userData');
   let name = userData.username_signup;
   console.log("email: "+sessionStorage_value)
   console.log(name);
 
   }
else{
       console.log('user data not found')
}


function validateUsername(username) {
    return username.trim() !== '';
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// --------------------------------form--basic--validation----------------
let login_Form_validation = document.forms.login;


let login_email_validation = document.getElementById("login_email")

let login_password_validation = document.getElementById("login_pass")

login_Form_validation.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("clicked");

    let login_email_error = document.querySelector(".login_email_error");
    let login_password_error = document.querySelector(".pass-link .login_password_error");

    if (login_email_validation.value.trim().length === 0) {
        login_email_validation.classList.add("border");
        login_email_error.style.display = "block";
    } else {
        login_email_error.style.display = "none";
        login_email_validation.classList.remove("border");
    }

    if (login_password_validation.value.trim().length === 0) {
        login_password_validation.classList.add("border");
        login_password_error.style.display = "block";
    } else {
        login_password_validation.classList.remove("border");
        login_password_error.style.display = "none";
    }

    let email_id = login_email_validation.value;
    let emailExists = await checkIfloginEmailExists(email_id);

    let password_correct = login_password_validation.value;
    let passwordExists = await checkIfloginpasswordExists(password_correct)



    if (!passwordExists) {
       
          login_password_validation.classList.add("border");
          login_password_error.style.display = "block";
    }
    else if(!emailExists){
               login_email_validation.classList.add("border");
               login_email_error.style.display = "block";
    }
    else {
        location.href = "index.html"
        let login_data = {
            email_login: login_email_validation.value,
            password_login: login_password_validation.value,
        };

        sessionStorage.setItem('login_details', JSON.stringify(login_data));



        location.href = "index.html"

    }

});
async function checkIfloginEmailExists(email) {
    const checking_email = await getDocs(collection(db, "user_data"));
    return checking_email.docs.some(doc => doc.data().email_ID === email);
}
async function checkIfloginpasswordExists(pass) {
    const checking_email = await getDocs(collection(db, "user_data"));
    return checking_email.docs.some(doc => doc.data().password === pass);
}



   let sessionStorage_value=sessionStorage.getItem('login_details');
   console.log("login: "+sessionStorage_value)

// console.log(storedName);
//--------------tooltip--------------

document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('password_signup');

    var passwordTooltip = document.getElementById('passwordTooltip');

    passwordInput.addEventListener('click', function () {

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

    var allConditionsMet = lower.classList.contains("valid") &&
        capital.classList.contains("valid") &&
        digit.classList.contains("valid") &&
        count.classList.contains("valid") &&
        special.classList.contains("valid");

    if (allConditionsMet) {
        document.getElementById('passwordTooltip').classList.remove('active');
    } else {
        document.getElementById('passwordTooltip').classList.add('active');
    }
})

