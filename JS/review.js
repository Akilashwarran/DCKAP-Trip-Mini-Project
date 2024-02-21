var review_search = document.querySelector("#review_search");
var review_btn1 = document.querySelector("#review_btn1");
var review_placeImg = document.querySelector(".review_placeImg");
var review_placeImgs = document.querySelector(".review_placeImgs");



var review_share_btn = document.querySelector(".review_share_btn");
var review_container2=document.querySelector(".review_container2");
var review_maincontainer2=document.querySelector(".review_maincontainer2");
var review_star_icons =document.querySelector(".review_star_icon");
var review_textarea =document.querySelector("#review_textarea");
var review_submit_btn=document.querySelector(".review_submit_btn");
var review_cancel_btn=document.querySelector("#review_cancel_btn");

var testimonial_containers = document.querySelector(".testimonial-containers")
console.log(testimonial_containers);


// var stars = document.querySelectorAll(".stars i");

// review_btn1.addEventListener("click",(e)=>{

//     if(review_search.value=="coimbatore"){
      
//          review_placeImg.style.display="block";
//          testimonial_containers.display="block"
//          review_share_btn.style.display="block";
         
//     }
// })

var stars = document.querySelectorAll(".stars i");

review_btn1.addEventListener("click", (e) => {
    if (review_search.value == "coimbatore") {
        review_placeImg.style.display = "block";
        testimonial_containers.style.display = "block";
        testimonial_containers.style.display = "flex";

        review_share_btn.style.display = "block";
    }
});



review_share_btn.addEventListener("click",(e)=>{
    review_container2.style.display="block";
    review_maincontainer2.style.height="55em"
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

stars.forEach((star, index1) => {
 
  star.addEventListener("click", () => {
  
    stars.forEach((star, index2) => {
   
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");




      // star_click=index1;
      // star_count.innerHTML=star_click+1

      
    });
  });
});








var testi =document.querySelector(".testimonial-text")
var testi_name =document.querySelector(".testimonial-author")
console.log(testi);
testi.addEventListener("click",()=>{
  // testi.innerHTML="Hi hello welcome it's clicked A handy Lorem Ipsum Generator that helps to create dummy text for all layout needs"
  // testi_name.innerHTML="Jack"
})













    // change_star.addEventListener("click", () => {
    //     // console.log(change_star,index);
    //     if (change_star.firstElementChild.className == "fa-regular fa-star") {
    //         change_star.firstElementChild.className="fa-solid fa-star";
    //      console.log(change_star.firstElementChild);
    //      } else if (change_star.firstElementChild.className == "fa-solid fa-star") {
    //         change_star.firstElementChild.className="fa-regular fa-star";
    //      }
    // })


    




