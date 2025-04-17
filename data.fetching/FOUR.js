
let btn =document.getElementById("btn")
btn.addEventListener("click",(e)=>{
    let currBtn= e.target;
    let currInput=currBtn.previousElementSibling;
    let city =currInput.value
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric
`).then((res)=>{
    return res.json()
   }).then((data)=>{
    console.log(data);
    let cardData =
    `<div class="card text-white bg-dark mx-auto mt-2" style="width: 18rem;">
                <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png" class="card-img-top" alt="...">
                <div class="card-body text-center ">
                  <h5 class="card-title text-primary fs-2 fw-bold">${data.name}</h5>
                  <p class="card-text">${data.main.temp}</p>
                  <p class="card-text">${data.sys.country}</p>
                  <p class="card-text">${data.wind.speed}</p>
                  <p class="card-text">${data.weather[0].description}</p>
    
                </div>
              </div>
`
   
    document.getElementById("carData").innerHTML = cardData
   })
})