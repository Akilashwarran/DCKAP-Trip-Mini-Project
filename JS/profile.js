"use strict"


"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyBl2nSsWE6IwcC3uPUZF7bgStLcoWJQ2g4",
//     authDomain: "dckaptrip-2.firebaseapp.com",
//     projectId: "dckaptrip-2",
//     storageBucket: "dckaptrip-2.appspot.com",
//     messagingSenderId: "1003076308711",
//     appId: "1:1003076308711:web:ebe6bf59db2211fad0dc42"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyAb3BzH5tfNzTuKUDEhVpz51RzPySS5Vfc",
    authDomain: "dckap-trip-26e10.firebaseapp.com",
    databaseURL: "https://dckap-trip-26e10-default-rtdb.firebaseio.com",
    projectId: "dckap-trip-26e10",
    storageBucket: "dckap-trip-26e10.appspot.com",
    messagingSenderId: "149435458483",
    appId: "1:149435458483:web:41d72b11078e86b888e1c6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
var login_data = {
    login_email : "babukumarkdckap@gmaiil.com"
}

var Username = document.getElementById("name");
var UseEmail = document.getElementById("email");
var UserContact = document.getElementById("phone");

var a = localStorage.setItem("login_data", JSON.stringify(login_data)); 
var user = JSON.parse(localStorage.getItem("login_data"))
var localValue = user.login_email;

document.addEventListener("DOMContentLoaded", async function() {
   
    const userCollectionRef = collection(db, "user_data");
  try {
    const querySnapshot = await getDocs(userCollectionRef);
    var id = querySnapshot.size

    querySnapshot.forEach((doc) => {
        var curentuserID = doc.id
        var userData = doc.data();
        console.log(userData);
  document.getElementById("defaultName").textContent = userData.username || "Default Name";
  document.getElementById("defaultEmail").textContent = userData.email_ID || "+Add";
  document.getElementById("defaultNo").textContent = userData.phone || "+Add";

      if(localValue == doc.data().email_ID){

        let ref = doc(db,"user_data",curentuserID);
        updateDoc(
          ref, {
            email_ID: UseEmail.value,
            UserContact: UserContact.value,
            username: Username.value
          }
        ).then(()=>{
          alert("Updated Successfully")
        })
      }

    });
  } catch (error) {
    console.error("Error fetching user data: ", error);
  }
});


    // var store = sessionStorage.getItem("")
   
    //    console.log(store)
   



// // --------------------------------------------------------------------------------------------------



document.addEventListener("DOMContentLoaded", function() {
    const personalInfo = document.querySelector(".Personal-info");
    const profileDetails = document.querySelector(".profile-details");
    const addFavoriteinfo = document.querySelector(".addFavorite")
    const addFavoriteDetails = document.querySelector(".add-favorite");
    const Travelhistory = document.querySelector(".Travel-history");
    const travelHistoryDetails = document.querySelector(".travelHistory");

    personalInfo.classList.add("color");

    function showProfileDetails() {
        profileDetails.style.display = "block";
        addFavoriteDetails.style.display = "none";
        travelHistoryDetails.style.display = "none";
        personalInfo.classList.add("color");
        Travelhistory.classList.remove("color");
        addFavoriteinfo.classList.remove("color");
    }

    function showaddFavorite() {
        profileDetails.style.display = "none";
        addFavoriteDetails.style.display = "block";
        travelHistoryDetails.style.display = "none";
        personalInfo.classList.remove("color");
        addFavoriteinfo.classList.add("color");
        Travelhistory.classList.remove("color");
    }

    function showAddTraval() {
        profileDetails.style.display = "none";
        addFavoriteDetails.style.display = "none";
        travelHistoryDetails.style.display = "block";
        personalInfo.classList.remove("color");
        addFavoriteinfo.classList.remove("color");
        Travelhistory.classList.add("color");

    }

    personalInfo.addEventListener("click", function() {
        showProfileDetails();
    });

    addFavoriteinfo.addEventListener("click", function() {
        showaddFavorite();
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
const savebtn = document.getElementById("savebtn")
const twoBtn = document.querySelector(".twoBtn")

// const form = document.getElementById("profileform");
    // savebtn.style.display = "none"
    twoBtn.style.display = "none"
    function toggleInputFields(){
        const defaultDetails = document.querySelector(".defaultShow-detials");
        const inputDetails = document.querySelectorAll(".details");
    
        
        defaultDetails.style.display = "none"
        editButton.style.display = "none"
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

            // Regex validation
            const nameRegex = /^[a-zA-Z ]+$/
            const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
            const phoneRegex = /^\d{10}$/
            const usernameRegex = /^[a-zA-Z0-9$]+$/
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
           

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

            if(!passwordRegex.test(passwordInput)){
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

        alert('Your profile updated.!');
}








editButton.addEventListener("click", function(event) {
    // savebtn.style.display = "block"
    twoBtn.style.display = "block"
    toggleInputFields();
    event.preventDefault();

    // // var nameInput = document.getElementById("name");
    // var defaultName =  document.getElementById("defaultName").value
    // // nameInput.value.textContent = defaultName.value;
    // document.getElementById("name").value.textContent = defaultName.value;
  

});

})


var savebtn = document.getElementById("savebtn")
savebtn.addEventListener("click",function(event){
    event.preventDefault();
            const nameInput = document.getElementById("name").value;
            console.log(nameInput);
            const emailInput = document.getElementById("email").value;
            console.log(emailInput);
            const phoneInput = document.getElementById("phone").value;
            console.log(phoneInput);
            const usernameInput = document.getElementById("username").value;
            console.log(usernameInput);
            const passwordInput = document.getElementById("password").value.trim();
            console.log(passwordInput);
            const confirmPasswordInput = document.getElementById("confirm-password").value.trim();
            console.log(confirmPasswordInput);

           var defaultName = document.getElementById("defaultName")
           console.log(defaultName);
           var defaultNo = document.getElementById("defaultNo")
           console.log(defaultNo);


        //    validateInputs() 

        // if(nameInput || phoneInput || usernameInput || passwordInput || confirmPasswordInput !== ""){
        //     // validateInputs()

        //     // nameInput.value.textContent = defaultName
        //     // phoneInput.value.textContent= defaultNo

        //     detail.style.display = "none";
        //     inputDetails.style.display = "block"
        //     defaultName.value.textContent = nameInput
        //     defaultNo.value.textContent= phoneInput

        // }
        // else{
        //     alert("hi")
        // }
           
})

var form = document.getElementById("profileform");
var defaultDetails = document.querySelector(".defaultShow-detials");
var twoBtn = document.querySelector(".twoBtn");
var editButton = document.querySelector(".btn");
var cancel = document.getElementById("cancel");

cancel.addEventListener("click", function() {

const inputDetails = document.querySelectorAll(".details");

if (twoBtn.style.display != "none") {
    console.log("none");
    inputDetails.forEach(detail => {
        detail.style.display = "none";
     });
    defaultDetails.style.display = "block";
    twoBtn.style.display = "none";
    editButton.style.display = "block";
}
  

});





    




// // -----------------------------tooltip function-----------------------------------------------------------------


var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirm-password");

passwordInput.addEventListener("click",function(){
    document.getElementById("message").style.display="block";
    passwordValidation();
})

confirmPasswordInput.addEventListener("click",function(){
    document.getElementById("message").style.display = "none";
})

  var letter= document.getElementById("letter");
  var capital= document.getElementById("capital");
  var num = document.getElementById("number");
  var special= document.getElementById("special")
  var leng=document.getElementById("length")

  
function passwordValidation(){


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


