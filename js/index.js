
const API_POSTS_URL = "https://api.noroff.dev/api/v1/gamehub";

async function getData() {
    const response = await fetch(API_POSTS_URL)
    const json = await response.json();
    return json;
}


document.addEventListener("DOMContentLoaded", async () => {
    let games = [];
    
    try {
        games = await getData();
        

        let data1 = "";
       // Figure out how to not display discounted prices when product is not on discount. 
        games.map((values) => {

        let onDiscount = values.price - values.discountedPrice;   
        let salesDisplay = values.discountedPrice;
        
        // Rendering each id of games in the api in a seperate card in the browser with relevant data for the page. 
        data1 += `
        <div class="card">
        <p id="product-title">${values.title}</p>
        <a href="/product/index.html"><img src=${values.image} alt="Image" id="product-image"></a>
        <p id="category">Category: ${values.genre}</p>
        <p id="price">Price: $${onDiscount}</p>
        <p id="onSale">$${salesDisplay} on offer!</p>
        <button id=${values.id} class="add-to-cart">Add to cart</button>
        <button id=${values.id} class="buy-btn">BUY</button>         
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