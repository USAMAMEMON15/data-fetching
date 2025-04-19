
let btn = document.getElementById("btn")
btn.addEventListener("click",(e)=>{
    let currBtn= e.target;
    let currInput=currBtn.previousElementSibling;
    console.log(currInput);
    let search = currInput.value
   fetch(`https://newsapi.org/v2/everything?q=${search}&from=2025-03-19&sortBy=publishedAt&apiKey=d17463cb2784414e832968f3ae053548`).then((res)=>{
    return res.json()
   }).then((data)=>{
    console.log(data.articles);
    
    let cardData = ""

    data.articles.map((data)=>{
        return(
            cardData +=
` <div class="col-lg-4">
                    

<div class="card text-dark mx- " style="width: 18rem;">
<img src="${data.urlToImage} height="300px" width="300px" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${data.title}</h5>
<p class="card-text">${data.description.substring(0,30)}</p>
</div>
</div>
</div>
`

        )
    })
   
    document.getElementById("carData").innerHTML = cardData
   })
})