
fetch("https://fakestoreapi.com/products").then((data)=>{
console.log(data);
return data.json()
}).then((objectdata)=>{
    console.log(objectdata[0].title);
  
    let tabledata ="";
    objectdata.map((values)=>{
        return(
            tabledata += `
            <tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.prize}</td>
            <td><img src="${values.image}" height="300px" width="300px" /></td>
            </tr>            
            `
        )
    })
    document.getElementById("table-body").innerHTML = tabledata
})