
const productCards = document.getElementById("products")
const API_POSTS_URL = "https://api.noroff.dev/api/v1/gamehub";

async function getData() {
    const response = await fetch(API_POSTS_URL)
    const json = await response.json();
    return json;
}

// Adding the product to cart function.
function addToCart(product) {
    console.log(`Product added to cart:`, product);
}
function purchase(product) {
    console.log(`Purchasing`, product)
}

// Render products on the page and adding event listeners to add to cart buttons. 
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const games = await getData();
        
        games.forEach(game => {
            const { id, title, onSale, discountedPrice, price, image } = game;

            // Display sales prices for products on sale. 
            let displayedPrice = onSale ? price - discountedPrice: price;

            // Render products using template literals. 
            productCards.innerHTML += `
            <div class="card">
            <a href="/product/index.html"><img src=${image} alt="Image" id="product-image"></a>
            <h2 id="product-title>${title}</h2>
            <p id="price">Price: $${displayedPrice}</p>
            <button id="add-to-cart-${id}" class="btn add-to-cart-btn">Add to cart</button>
            <button id="buy-${id}" class="btn buy-btn">Buy now</button>
            </div>
            `
        });

        // Adding event listener to add to cart buttons.
        games.forEach(game => {
            const addToCartBtn = document.getElementById(`add-to-cart-${game.id}`);
            addToCartBtn.addEventListener("click", () => addToCart(game));
        });   

        // Adding event listeners to buy buttons. 
        games.forEach(game => {
            const buyBtn = document.getElementById(`buy-${game.id}`);
            buyBtn.addEventListener("click", () => purchase(game));
        }) 
    } catch (error) {
        console.log("Error:" + error);
    } 
});
