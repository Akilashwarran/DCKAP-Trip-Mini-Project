"use strict"


// -----------------------------------leftside menu--------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const personalInfo = document.querySelector(".Personal-info");
    const profileDetails = document.querySelector(".profile-details");
    const listOfFavorites = document.querySelector(".List-of-Favorites");
    const addFavorite = document.querySelector(".add-favorite");
    const Travelhistory = document.querySelector(".Travel-history");
    const travelHistoryDetails = document.querySelector(".travelHistory");

    personalInfo.classList.add("color")
    function showProfileDetails() {
        profileDetails.style.display = "block";
        addFavorite.style.display = "none";
        travelHistoryDetails.style.display ="none"
        personalInfo.classList.add("color")
        listOfFavorites.classList.remove("color")
        Travelhistory.classList.remove("color")
    }

    function showAddFavorite() {
        profileDetails.style.display = "none";
        addFavorite.style.display = "block";
        travelHistoryDetails.style.display ="none"
        personalInfo.classList.remove("color")
        listOfFavorites.classList.add("color")
        Travelhistory.classList.remove("color")

    }
    function showAddTraval() {
        profileDetails.style.display = "none";
        addFavorite.style.display = "none";
        travelHistoryDetails.style.display ="block"
        personalInfo.classList.remove("color")
        listOfFavorites.classList.remove("color")
        Travelhistory.classList.add("color")
        
    }

    personalInfo.addEventListener("click", function() {
        showProfileDetails();
        
    });

    listOfFavorites.addEventListener("click", function() {
        showAddFavorite();
       
    });

    Travelhistory.addEventListener("click", function() {
        showAddTraval();
        
    });

});

// -----------------------profilepic-----------------------------------------------------------
   
let ProfileImg = document.querySelector(".ProfileImg");
    let inputfile= document.querySelector("#input-file");

inputfile.onchange = function(){
    ProfileImg.src = URL.createObjectURL(inputfile.files[0]) 
}
// -----------------------------------------------------------------------------------


var form = document.getElementById("profileform");

document.addEventListener("DOMContentLoaded",function(){

const editButton = document.querySelector(".btn");
const form = document.getElementById("profileform");
    function toggleInputFields(){
        const defaultDetails = document.querySelector(".defaultShow-detials");
        const inputDetails = document.querySelectorAll(".details");
    
    
        defaultDetails.style.display = "none"
        inputDetails.forEach(detail => {
        detail.style.display = "flex";
     });
    }
    
        editButton.addEventListener("click", function() {
            toggleInputFields();
            
        });
    
})

