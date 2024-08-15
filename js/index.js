


async function loadGames() {
    const response = await fetch("https://api.noroff.dev/api/v1/gamehub")
    const games = await response.json();

    return games;
}


document.addEventListener("DOMContentLoaded", async () => {
    let games = [];
    
    try {
        games = await loadGames();
        

        let data1 = "";
       // Figure out how to not display discounted prices when product is not on discount. 
        games.map((values) => {

        let onDiscount = values.price - values.discountedPrice;   
        let salesDisplay = values.discountedPrice;
        
        // Rendering each id of games in the api in a seperate card in the browser with relevant data for the page. 
        data1 += `
        <div class="card">
        <p id="product-title">${values.title}</p>
        </a><img src=${values.image} alt="Image" id="product-image">
        <p id="category">Category: ${values.genre}</p>
        <p id="price">Price: $${onDiscount}</p>
        <p id="onSale">$${salesDisplay} on offer!</p>
        <button id="addCart-btn" class="cart-btn">Add to cart</button>
        <button id="buy-btn" class="">BUY</button>  
        <a href="/product/index.html" class="description-link">Read more..</a>       
        </div>
        `
        })
        document.getElementById("products").innerHTML = data1;
        

        
    } catch (error) {
        console.log("Error:" + error);
    }
    
})




 // OK so I figured out how to access the values in the GameHub API
 // Now we need to make our card. First we will create 1 card and 1 card only. 
 // After wards we will loop through the arrays creating cards for all the products. 
 // And render them on the page. 
 // Next up is the buttons to be added to each card in order for the customer
 // to purchase the products. 

 // And to do this we fetch the single id of the product when its added to a card? 
 // Incredible!