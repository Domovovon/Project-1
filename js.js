var url = "https://robocode-json.artem4ikk02.workers.dev/Domovovon/Project-1"
fetch(url + "/products")
.then(async function(response){
    var products = await response.json()
    var productsArray = null;
    products.forEach(element => {

        productsArray.push(element)

    });
    
})