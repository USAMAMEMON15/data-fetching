let select =document.getElementById("select")
select.addEventListener("change",(e)=>{
    let id = e.target.value;
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   .then((res)=>{
    return res.json()
   }).then((data)=>{
    console.log(data);
    let cardData ="";
    cardData =`
    <div class="card mx-auto mt-5" style="width: 18rem;">
  <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">
  <div class="card-body mx-auto">
    <h5 class="card-title mx-auto">${data.name}</h5>
    <p class="card-text mx-auto">${data.moves.lenght} ${data.moves[1].move.name}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    `
    document.getElementById("carData").innerHTML = cardData
   })
})