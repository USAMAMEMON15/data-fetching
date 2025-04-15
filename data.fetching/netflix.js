fetch("https://api.themoviedb.org/3/discover/movie?api_key=9b053e3c20be9ccd6aed74ba470cead2").then((data)=>{

    console.log("hello");
    return data.json()
}).then((database)=>{
console.log(database.results);
let usama = database.results
let tableData =""
usama.map((values)=>{
return(

    tableData += `
    
   <div class="col-lg-4">
                <div class="card bg-dark text-white text-center" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w500/${values.poster_path} "height="200px" width="100px"   class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title"> ${values.original_title}</h5>
                      <p class="card-text"> ${values.overview.substring(0,90)}</p>
                      <a href="#" class="btn btn-danger">Watch Now!</a>
                    </div>
                  </div>
            </div>
    
    `
)
})
document.getElementById("card").innerHTML = tableData
})