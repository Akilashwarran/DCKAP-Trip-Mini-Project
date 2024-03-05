let forgot_email = document.getElementById("forget_email");
let forget_email_form = document.forms.forgot;
let email_block = document.querySelector(".forget_right_side");
let otp_block = document.querySelector(".forgot_OTP");

forget_email_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("click forget password");
  email_block.style.display="none"
  otp_block.style.display="block"

})
let new_pass=document.querySelector(".new_password")
let oto_form =document.forms.otp_form;
oto_form.addEventListener("submit",(e)=>{
  e.preventDefault();
 otp_block.style.display="none"
 new_pass.style.display="block"

})
let login_form=document.querySelector("form-inner")
let back_login=document.querySelector(".back_login")
back_login.addEventListener("click",()=>{
     
     location.href="login_form"
})