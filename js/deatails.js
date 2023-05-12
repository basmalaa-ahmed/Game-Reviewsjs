const searchParms = location.search;
const params = new URLSearchParams(searchParms);
const id=params.get("id");

let container={};
// function to get API
(async function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a6255cbf9bmsh2719abf29f6856ap10d298jsnedad3f2bcf9f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    const response = await api.json();
    console.log(response);
    container=response;
    display()
})();
// function to display details of games
function display(){
    const html =`
    <header class="hstack justify-content-between">
               <h1 class="text-center h3 py-4">Details Game</h1>
               <button onclick="closeBtn()" class="btn-close btn-close-white" id ="btnClose"></button>
                </header>
            <div class="col-md-4">
             <figure>
                 <img src="${container.thumbnail}" class="w-100" alt="details image" />
             </figure>
            </div>
            <div class="col-md-8">
            <h3>Title : ${container.title}</h3>
            <P> Category: <span class="badge bg-info">${container.genre}</spann></p>
            <P> platform: <span class="badge bg-info">${container.platform}</spann></p>
            <P> statues: <span class="badge bg-info">${container.status}</spann></p>
            <p class="small"> ${container.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${container.game_url}">Show Game</a>
 
             <div>
           
 
      
 
       
    </div>
 </div>
 `
 document.getElementById("detailsData").innerHTML=html;
}
//function to close details page
function closeBtn(){

location.href=`./index.html`
}

document.addEventListener("keydown",function(e){
    if(e.key=="Escape"){
        this.location.href=`./index.html`
    }
})
