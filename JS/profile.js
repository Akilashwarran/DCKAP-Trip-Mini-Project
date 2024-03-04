
"use strict";
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBl2nSsWE6IwcC3uPUZF7bgStLcoWJQ2g4",
    authDomain: "dckaptrip-2.firebaseapp.com",
    projectId: "dckaptrip-2",
    storageBucket: "dckaptrip-2.appspot.com",
    messagingSenderId: "1003076308711",
    appId: "1:1003076308711:web:ebe6bf59db2211fad0dc42"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// try {
//     // Get a reference to the "user_data" collection
//     const userCollectionRef = collection(db, "user_data");
    
//     // Get all documents from the "user_data" collection
//     const querySnapshot = await getDocs(userCollectionRef);
    
//     // Loop through each document in the collection
//     querySnapshot.forEach((doc) => {
//         // Access the data of each document
//         const userData = doc.data();
//         console.log(userData);
//         // Now you can use the userData object as needed
//     });
// } catch (error) {
//     console.error("Error fetching user data: ", error);
// }

document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Get a reference to the "user_data" collection
        const userCollectionRef = collection(db, "user_data");
        
        // Get all documents from the "user_data" collection
        const querySnapshot = await getDocs(userCollectionRef);
        
        // Loop through each document in the collection
        querySnapshot.forEach((doc) => {
            // Access the data of each document
            const userData = doc.data();
            console.log(userData);

            // Display user data in HTML elements
            document.getElementById("defaultName").textContent = userData.username || "Default Name";
            document.getElementById("defaultEmail").textContent = userData.email_ID || "+Add";
            document.getElementById("defaultNo").textContent = userData.phone || "+Add";
        });
    } catch (error) {
        console.error("Error fetching user data: ", error);
    }
});




// --------------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    const personalInfo = document.querySelector(".Personal-info");
    const profileDetails = document.querySelector(".profile-details");
    const addFavorite = document.querySelector(".add-favorite");
    const Travelhistory = document.querySelector(".Travel-history");
    const travelHistoryDetails = document.querySelector(".travelHistory");

    personalInfo.classList.add("color")
    function showProfileDetails() {
        profileDetails.style.display = "block";
        addFavorite.style.display = "none";
        travelHistoryDetails.style.display ="none"
        personalInfo.classList.add("color")
        Travelhistory.classList.remove("color")
    }

    function showAddTraval() {
        profileDetails.style.display = "none";
        addFavorite.style.display = "none";
        travelHistoryDetails.style.display ="block"
        personalInfo.classList.remove("color")
        Travelhistory.classList.add("color")
        
    }

    personalInfo.addEventListener("click", function() {
        showProfileDetails();
        
    });

    Travelhistory.addEventListener("click", function() {
        showAddTraval();
        
    });

});


// ----------------------------------profile pic---------------------------------------------------------------------
    let ProfileImg = document.querySelector(".ProfileImg");
    let inputfile= document.querySelector("#input-file");

inputfile.onchange = function(){
    ProfileImg.src = URL.createObjectURL(inputfile.files[0]) 
}
// -----------------------------------------------------------------------------------


var form = document.getElementById("profileform");

document.addEventListener("DOMContentLoaded",function(){

const editButton = document.querySelector(".btn");
// const form = document.getElementById("profileform");
    function toggleInputFields(){
        const defaultDetails = document.querySelector(".defaultShow-detials");
        const inputDetails = document.querySelectorAll(".details");
    
    
        defaultDetails.style.display = "none"
        inputDetails.forEach(detail => {
        detail.style.display = "flex";
     });
    }
    


// ---------------------------get input & err msg-----------------------------------

function validateInputs() {
            const nameInput = document.getElementById("name").value;
            const emailInput = document.getElementById("email").value;
            const phoneInput = document.getElementById("phone").value;
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value.trim();
            const confirmPasswordInput = document.getElementById("confirm-password").value.trim();
            const showErrorname = document.getElementById("errorName");
            const showErroremail = document.getElementById("errorEmali");
            const showErrorphoneNo = document.getElementById("errorPhonenumber");
            const showErroruserName = document.getElementById("errorUsername");
            const showErrorpassWord = document.getElementById("errorPassword");
            const showErrorConpassword = document.getElementById("errorconPassword");

            // Regular expressions for validation
            const nameRegex = /^[a-zA-Z\s]+$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{10}$/;
            const usernameRegex =  /^[a-zA-Z0-9$]/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
           

            if(!nameRegex.test(nameInput)){
                showErrorname.textContent="Please enter a valid Name."
                
            setTimeout(() =>{
                showErrorname.textContent=" "},1000)
            return
            };

            if(!emailRegex.test(emailInput)){
                showErroremail.textContent="Please enter a valid email address."
            setTimeout(() =>{
                showErroremail.textContent=" "},1000)
            return
            };

            if(!phoneRegex.test(phoneInput)){
                showErrorphoneNo.textContent="Please enter a valid phone number."
            setTimeout(() =>{
                showErrorphoneNo.textContent=" "},1000)
            return
            };

            if(!usernameRegex.test(usernameInput)){
                showErroruserName.textContent="Please enter a valid username."
            setTimeout(() =>{
                showErroruserName.textContent=" "},1000)
            return
            };

            if(passwordRegex.test(passwordInput)){
                    showErrorpassWord.textContent="Please enter a valid Password"
                    setTimeout(() =>{
                        showErrorpassWord.textContent=" "},1000)
                    return
                };
               

        if (passwordInput!== confirmPasswordInput) {
            showErrorConpassword.textContent="Passwords do not match."
            setTimeout(() =>{
                showErrorConpassword.textContent=" "},1000)
            return;
        };

        alert('Sign up successful!');
}

editButton.addEventListener("click", function(event) {
    toggleInputFields();


    event.preventDefault();
    validateInputs()

    // var defaultName = document.getElementById("defaultName");
    // var defaultEmail = document.getElementById("defaultEmail");
    // var defaultNo = document.getElementById("defaultNo");

    
    
   editButton.textContent = "Save";
   
   

});

})








// // -----------------------------tooltip function-----------------------------------------------------------------


var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirm-password");

passwordInput.addEventListener("click",function(){
    document.getElementById("message").style.display="block";
    password_validation();
})

confirmPasswordInput.addEventListener("click",function(){
    document.getElementById("message").style.display = "none";
})

  var letter= document.getElementById("letter");
  var capital= document.getElementById("capital");
  var num = document.getElementById("number");
  var special= document.getElementById("special")
  var leng=document.getElementById("length")

  
function password_validation(){
  

  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var Splcharater = /\W/g
  var numbers = /[0-9]/g;

    if(passwordInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
     } 
     else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    if(passwordInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
     } 
     else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    if(passwordInput.value.match(numbers)) {  
        num .classList.remove("invalid");
        num .classList.add("valid");
     } 
     else {
        num .classList.remove("valid");
        num .classList.add("invalid");
    }

    if(passwordInput.value.match(Splcharater)) {  
        special .classList.remove("invalid");
        special .classList.add("valid");
     } 
     else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }
    if (passwordInput.value.length >=8) {
        leng .classList.remove("invalid");
        leng .classList.add("valid");
    }
    else{
        leng.classList.remove("valid");
        leng.classList.add("invalid");
    }

}
