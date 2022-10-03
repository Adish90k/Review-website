
const API_KEY='api_key=f1734a160872482c35d88ad963ff3cc6';
const Base_URl='https://api.themoviedb.org/3';
const API_URL= Base_URl +'/discover/movie?sort_by=popularity.desc&'
+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const main=document.getElementById("main");
const searchBar=document.getElementById("search");
async function getMovies(url) 
{
  let response = await fetch(url);
  let data = await response.json()
  
 
 


  const main=document.querySelector(".allcontentholderdiv")
  console.log(data.results);
  
  main.innerHTML='';
  // <div class="items" id="item1"></div>
  data.results.forEach(element => {
     const {title,poster_path,vote_average}=element
  //    console.log(name,background_image,rating,metacritic);
     const GameEl=document.createElement('div');
     GameEl.classList.add('items');
     GameEl.innerHTML =`
     <div class="itemsimg">
    <img src="${IMG_URL+poster_path}" alt="" width="260px" height="300px" class="mainbackimg">
    <button class="add-Reviewbtn" id="Addbtn">Add review</button>
  </div>
  <p class="${getcolor(vote_average)}" id="Metacritictxt">
  <img src="https://cdn.freebiesupply.com/images/large/2x/imdb-logo-transparent.png" height="20px" width="30px">
  ${vote_average}</p>
  <div class="itemcontentdiv">
  <h3 style="color: white;">${title}</h3>
  </div>
  <div class="commentdiv">
 
  </div>
  `
     main.appendChild(GameEl);
  
  });
  
}
getMovies(API_URL)



function getcolor(vote){
    if(vote<=7){
        return 'red';
    }
    else if(vote>7){
        return 'green';
    }
}
