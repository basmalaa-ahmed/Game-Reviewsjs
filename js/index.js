const loading= document.querySelector(".loading");
console.log(loading)
getGames("mmorpg");

document.querySelectorAll(".menu a").forEach((link)=>{
    link.addEventListener("click",()=>{
        document.querySelector(".menu .active").classList.remove("active");
        link.classList.add("active");
        console.log(link.dataset.category);
        const data=link.dataset.category;
        getGames(data)

    });
});
// function to get API

async function getGames(categoryName){
    loading.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a6255cbf9bmsh2719abf29f6856ap10d298jsnedad3f2bcf9f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
  const api = await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options)
     
    const response = await api.json();
    console.log(response);
    display(response);
    loading.classList.add("d-none")
}
// function to show games data
function display(data){
    let html ="";
    for (let i=0;i<data.length;i++){
        html+=`
        <div class="col">
        <div onclick="showDetails(${data[i].id})" class="card h-100 bg-transparent" role="button"
        <div class="card-body">
            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
             
            </figure>

            <figcaption>

               <div class="hstack justify-content-between">
                  <h3 class="h6 small">${data[i].title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text small text-center opacity-50">
                  ${data[i].short_description.split(" ",5)}
               </p>

            </figcaption>
         </div>

         <footer class="card-footer small hstack justify-content-between">

            <span class="badge badge-color">${data[i].genre}</span>
            <span class="badge badge-color">${data[i].platform}</span>

         </footer>
      </div>
   </div>
   </div>
   </div>
        `

    }
    document.getElementById("gameData").innerHTML=html;
    
}
// function to pass id to details page
function showDetails(id){
    location.href=`./deatails.html?id=${id}`
}