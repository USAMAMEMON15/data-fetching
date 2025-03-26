fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((data)=>{

    console.log("hello");
    return data.json()
}).then((database)=>{
console.log(database.meals[0].strMeal);

let tableData =""
database.meals.map((values)=>{
return(

    tableData += `
    
    <tr>
        <td>${values.strMeal}</td>
      <td>${values.strCategory}</td>
      <td>${values.strArea}</td>
      <td>${values.strYoutube}</td>
      <td><img src="${values.strMealThumb}" height="200px" widht="200px"/></td>
    </tr>
    
    `
)
})
document.getElementById("table-body").innerHTML = tableData
})