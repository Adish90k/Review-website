const contentshowbtn=document.querySelector(".contentshowbtn");
const sidebarmaindiv=document.querySelector(".sidebarmaindiv")
const maincontentdiv=document.querySelector(".allcontentholderdiv");
const mainbackimgdiv=document.querySelector(".mainbackimgdiv");
const mainnavbar=document.querySelector(".mainnavbar");
const search=document.querySelector(".search");
 
let f=0;
contentshowbtn.addEventListener("click",()=>{
    console.log("before f",f);
    if(f==0){
        sidebarmaindiv.style.width="16vw";
        maincontentdiv.style.left="16vw";
        maincontentdiv.style.width="84vw";
       
       mainbackimgdiv.style.width="84vw";
        mainbackimgdiv.style.left="16vw";
        mainnavbar.style.left="16%";
        search.style.right="90";
         
        f=1;
        console.log(f);
    }
    else if(f==1){
        sidebarmaindiv.style.width="0vw";
        maincontentdiv.style.left="0vw";
        maincontentdiv.style.width="100vw";
        mainbackimgdiv.style.left="0vw";
       mainbackimgdiv.style.width="100vw";
        mainnavbar.style.left="4%";
        search.style.right="200";
         f=0;
        console.log(f);
    }
})
const heading=document.querySelectorAll(".title");
heading.forEach(element => {
if(element.innertext=="Fifa-2022"){
    console.log(element);
}
});
const searchinput =document.querySelector(".searchinput");
const itemsmain=document.querySelectorAll(".itemscontentdiv");
const itemsmain2=document.querySelectorAll(".items");
const items=document.querySelectorAll(".title");
// console.log(items);
searchinput.addEventListener("input",()=>{
    let inputvalue=searchinput.value.toLowerCase();
    itemsmain2.forEach(element => {
        console.log(element.children[0]);
        console.log(element.children[0].innerText);
        if(element.children[3].children[0].innerText.toLowerCase().includes(inputvalue)){
       element.style.display="flex";
       }
       else{
       element.style.display="none"
        console.log("not found");
       }
    });
})
//  itemsmain2.forEach(element => {
//      console.log(element.children[3].children[0].innerText);
//  });
