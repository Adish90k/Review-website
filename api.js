console.log('hello');

async function getapiname(){
const result=await fetch('https://api.rawg.io/api/games?key=0cd1eea87dcb41e4a5774c404d3ac0f4')
const data=await result.json();
const main=document.querySelector(".allcontentholderdiv")
console.log(data.results);

main.innerHTML='';
// <div class="items" id="item1"></div>
data.results.forEach(element => {
   const {name,background_image,ratings,metacritic}=element
//    console.log(name,background_image,rating,metacritic);
 console.log(ratings[1].percent);
   const GameEl=document.createElement('div');
   GameEl.classList.add('items');
   GameEl.innerHTML =`
   <div class="itemsimg">
  <img src="${background_image}" alt="" width="300px" height="180px" class="mainbackimg">
  <button class="add-Reviewbtn" id="Addbtn">Add review</button>
</div>
<p class="${getcolor(metacritic)}" id="Metacritictxt">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png" height="20px" width="20px">
${metacritic}</p>
<div class="itemcontentdiv">
<h5>${name}</h5>
</div>
<div class="commentdiv">
<p class="Exceptional">Exceptional ${ratings[0].percent}</p>
<p>Recommended ${ratings[1].percent}</p>
</div>
`
   main.appendChild(GameEl);

});

}
{/* <form action="/" method="post">
<input type="text" class"commenttxt" name="content"></input>
<button class="Addbtn">+</button>
</form> */}
getapiname();

function getcolor(vote){
    if(vote<=85){
        return 'red';
    }
    else if(vote>=86){
        return 'green';
    }
}



// add_Reviewbtn.addEventListener("click",()=>{
//     commentdiv.style.opacity="100%";    
// })
