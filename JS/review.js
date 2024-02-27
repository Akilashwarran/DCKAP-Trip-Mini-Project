

// ------------------------review-share----------------------------------------


var review_share_btn = document.querySelector(".review_share_btn");
var review_container2=document.querySelector(".review_container2");
var review_maincontainer2=document.querySelector(".review_maincontainer2");
var review_star_icons =document.querySelector(".review_star_icon");
var review_textarea =document.querySelector("#review_textarea");
var review_submit_btn=document.querySelector(".review_submit_btn");
var review_cancel_btn=document.querySelector("#review_cancel_btn");

var stars = document.querySelectorAll(".stars i");
var review_main=document.querySelector(".review_main")

review_share_btn.addEventListener("click",(e)=>{
    review_container2.style.display="block";
    review_maincontainer2.style.height="38.5em"
    review_maincontainer2.style.width="99%"
    review_maincontainer2.style.position="absolute"
    review_maincontainer2.style.display= "block";
    review_maincontainer2.style.backgroundColor="rgba(0, 0, 0, 0.5)";;
    review_maincontainer2.style.opacity= "1";
    
})

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


// ['Userdata':{name,email}]
stars.forEach((star, index1) => {
 
  star.addEventListener("click", () => {
  
    stars.forEach((star, index2) => {
   
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");

      
    });
});
});

// -------------------------------------------------------------------------------------







