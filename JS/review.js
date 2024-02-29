"use strict"


// firebase configuration


  // Import the functions you need from the SDKs you need
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import { getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

  let db = getFirestore(app);


 


var review_share_btn = document.querySelector(".review_share_btn");
var review_container2=document.querySelector(".review_container2");
var review_maincontainer2=document.querySelector(".review_maincontainer2");
var review_star_icons =document.querySelector(".review_star_icon");
var review_textarea =document.querySelector("#review_textarea");
var review_submit_btn=document.querySelector(".review_submit_btn");
var review_cancel_btn=document.querySelector("#review_cancel_btn");
var searchInput = document.getElementById("search");
var searchBtn = document.getElementById("search_btn");

var stars = document.querySelectorAll(".stars i");



review_share_btn.addEventListener("click",(e)=>{
    review_container2.style.display="block";
    // review_maincontainer2.style.height="38.5em"
    review_maincontainer2.style.width="99%"
    review_maincontainer2.style.position="absolute"
    review_maincontainer2.style.display= "block";
    review_maincontainer2.style.backgroundColor="rgba(0, 0, 0, 0.5)";;
    document.body.style.opacity= "1";
})

// search click event



// async function firebaseReview(place)
// {

//   var tracklistTable = document.getElementById("main_id");
//   tracklistTable.innerHTML = "";

//   let displayRef = doc(db,"review_Collection",place);

//   let dataRef = await getDoc(displayRef);

//   console.log("TEST")
  

//   let dataObj = dataRef.data();
//   let dataArr = dataObj["reviewObj"];
//   console.log(dataArr);
 

//  for(let key in dataArr)
//  {
//   console.log()
//   tracklistTable.innerHTML += "<section class='container'>"+
//   "<div class='card'>"+
//     "<div class='content'>"+
//       "<div class='testimonial-avatar'><img class='img1' src='"+dataObj["reviewObj"][key].image+"' alt=''>"+
//       "<div class='content2'>"+
//      " <div class='h6'>"+dataObj["reviewObj"][key].user_name+"</div>"+
//      " <div class='testimonial-rating'>"+getRatingStar(dataObj["reviewObj"][key].rating)+
//       "</div>"+
//   "</div>"+
//   "</div>"+
//       "<div class='hover_content'>"+
//        " <p>"+dataObj["reviewObj"][key].description+"</p>"+
//       "</div>"+
//    " </div>"+
//   "</div> " +
//   "</section>";
//  }



 
// }

// search click event

searchBtn.addEventListener("click", async () => {
  if (searchInput.value == "kodaikanal") {
      await firebaseReview("kodaikanal");
  } else if (searchInput.value == "ooty") {
      await firebaseReview("ooty");
  }
     else if (searchInput.value == "munnar") {
      await firebaseReview("munnar");
    }
  else if(searchInput.value == "trichy"){
      await firebaseReview("trichy")
  }
  else if(searchInput.value == "chennai"){
    await firebaseReview("chennai")
}
});

async function firebaseReview(place) {
  var tracklistTable = document.getElementById("main_id");
  tracklistTable.innerHTML = "";

  let displayRef = doc(db, "review_Collection", place);
  let dataRef = await getDoc(displayRef);
  let dataObj = dataRef.data();
  console.log(dataObj);
  if (dataObj) { // Check if data exists
      let dataArr = dataObj["reviewObj"];
console.log(dataArr);
      for (let key in dataArr) {
        console.log(key);
          tracklistTable.innerHTML += "<section class='container'>" +
              "<div class='card'>" +
              "<div class='content'>" +
              "<div class='testimonial-avatar'><img class='img1' src='" + dataObj["reviewObj"][key].image + "' alt=''>" +
              "<div class='content2'>" +
              "<div class='h6'>" + dataObj["reviewObj"][key].user_name + "</div>" +
              "<div class='testimonial-rating'>" + getRatingStar(dataObj["reviewObj"][key].rating) +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='hover_content'>" +
              "<p>" + dataObj["reviewObj"][key].description + "</p>" +
              "</div>" +
              "</div>" +
              "</div> " +
              "</section>";
      }
  } else {
      console.log("No data found for " + place);
  }
}





//review_submit_btn
review_submit_btn.addEventListener("click", async () => {
  let place = searchInput.value 
  submitReview(place);
  console.log(place);
});


//submitReview function
async function submitReview(place) {
  
  var tracklistTable = document.getElementById("main_id");
  tracklistTable.innerHTML = "";
  var comments = document.getElementById("review_textarea").value;
  var element = document.getElementById("star_id");
  var starCount = element.getElementsByClassName('fa-solid fa-star active').length;

  // Firebase data handling
  let oldRef = doc(db, "review_Collection", place);
  let oldDataRef = await getDoc(oldRef);
  let oldData = oldDataRef.data();
  
  let oldArr = (oldData && Array.isArray(oldData.reviewObj)) ? oldData.reviewObj : [];
  
  let newReviewObj = {
      user_id: "uid_3",
      user_name: comments,
      image: "Assets/Ellipse 4(8).png",
      rating: starCount,
      description: comments
  };

  // Merge existing reviews with the new review
  let updatedReviews = [...oldArr, newReviewObj];

  let objRef = doc(db, "review_Collection", place);
  let objRefData = updateDoc(objRef, { 
      reviewObj: updatedReviews 
  })

  console.log(objRef);

  firebaseReview(place);

  // Function to call the container close 
  cancel_fun();
}




function getRatingStar(num){

  if(num == 1){
    return "<i class='fa-solid fa-star'></i>"+
    "<i class='far fa-star'></i>"+
    "<i class='far fa-star'></i>"+
    "<i class='far fa-star'></i>"+
    "<i class='far fa-star'></i>"
  }else if(num == 2){
    return "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='far fa-star'></i>"+
    "<i class='far fa-star'></i>"+
    "<i class='far fa-star'></i>"
  }else if(num == 3){
    return "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='far fa-star'></i>"+
    "<i class='far fa-star'></i>"
  }else if(num == 4){
    return "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='far fa-star'></i>"
  }
  else if(num == 5){
    return "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"+
    "<i class='fa-solid fa-star'></i>"
  }

  return "<i class='far fa-star'></i>"+
  "<i class='far fa-star'></i>"+
  "<i class='far fa-star'></i>"+
  "<i class='far fa-star'></i>"+
  "<i class='far fa-star'></i>";
}

review_cancel_btn.addEventListener("click",cancel_fun);
function cancel_fun(){

  review_container2.style.display="none";
  review_maincontainer2.style.display= "none";
  review_maincontainer2.style.opacity= "0";
  review_textarea.value=" ";

  stars.forEach((star) => {
    star.classList.remove("active");
});

}
  

var star_count=document.querySelector(".star_count")
var After_review_content=document.querySelector(".After_review_content");





var stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
 
  star.addEventListener("click", () => {
  
    stars.forEach((star, index2) => {
   
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");

      
    });
});
});


