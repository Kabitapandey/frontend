const btn=document.querySelector(".show");
const section2=document.querySelector(".section-2");

btn.addEventListener("click",showText);
var click=false;
function showText(){
if(click==false){
    click=true;
    btn.innerHTML="Show less";
    section2.style.display="block";
}
else{
    btn.innerHTML="show more";
    section2.style.display="none";
    click=false;
}
}