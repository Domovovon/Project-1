var productGrid = document.getElementById("product-grid")
var url = "https://robocode-json.artem4ikk02.workers.dev/Domovovon/Project-1"
fetch(url + "/products")
.then(async function(response){
    var products = await response.json()
    var productsArray = null;
    products.forEach(element => {
        var productDiv = document.createElement("div")

        productDiv.innerHTML =
        `
        <h3>Deltarune Ch1-2 Demo</h3>
                <p>Dive into the parallel story to UNDERTALE! Fight or spare your way through action-packed battles as you explore a mysterious world alongside an endearing cast of new and familiar characters. Chapters 1-2 available, a free demo.</p>
                <div class="price">
                <span>Price</span>
                <h2>Free!</h2>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QFhKEA4MTduTLEKOnHLH5XgnfBS_e4-G4JJcQpMd6Q&s=10" alt="Deltarune Ch1-2 Demo">
        
        
        `

        productsArray.push(element)
        productGrid.append(productDiv)

    });

})