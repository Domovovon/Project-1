var productGrid = document.getElementById("product-grid")
var url = "https://robocode-json.artem4ikk02.workers.dev/Domovovon/Project-1"
fetch(url + "/products")
.then(async function(response){
    var products = await response.json()
    var productsArray = [];
    products.forEach(element => {
        var productDiv = document.createElement("div")
        productDiv.classList.add("product");
        productDiv.innerHTML =
        `
        <h3>${element.name}</h3>
                <p>${element.description}</p>
                <div class="price">
                <span>Price</span>
                <h2>${element.price}</h2>
                </div>
                <img src="${element.photo_url}">
        
        
        `

        productsArray.push(element)
        productGrid.appendChild(productDiv)

    });

})