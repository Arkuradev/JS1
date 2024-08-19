const singleProductCard = document.getElementById("single-product-card");
const productCards = document.getElementById("products");
const API_POSTS_URL = "https://api.noroff.dev/api/v1/gamehub";

async function getData() {
    const response = await fetch(API_POSTS_URL)
    const json = await response.json();
    return json;
}

// Function to get product data by ID

async function getProductById(id) {
    const response = await fetch(`${API_POSTS_URL}/${id}`);
    const product = await response.json();
    return product;
}

// Function to render product details on the page

function renderProductDetails(product) {
    const { id, title, onSale, discountedPrice, price, image, description, released, ageRating, genre } = product;

     // Display sales prices for products on sale. 
     const displayedPrice = onSale ? price - discountedPrice: price;

     // Render the detailed product information after clicking on the View Description link. 
     singleProductCard.innerHTML = `
     <div class="single-product-card">
         <img src=${image} alt="Image" id="product-image">
         <h2 id="product-title>${title}</h2>
         <p id="description">Description: ${description}</p>
         <p id="category">Category: ${genre}</p>
         <p id="age-rating">Age rating: ${ageRating}</p>
         <p id="release-date">Year released: ${released}</p>
         <p id="price">Price: $${displayedPrice}</p>
     
     <button id="add-to-cart-${id}" class="btn add-to-cart-btn">Add to cart</button>
     <button id="buy-${id}" class="btn buy-btn">Buy now</button>
     
     </div>
     `
     document.getElementById(`add-to-cart-${id}`).addEventListener("click", () => addToCart(game));
     document.getElementById(`buy-${id}`).addEventListener("click", () => purchase(game));
}

// Fetch the product details and render them 
document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        try {
            const product = await getProductById(productId);
            renderProductDetails(product);
        } catch (error) {
            console.log("Error fetching product details:", error);
        }
    } else {
        console.log("No product ID found in URL");
    }
});
// Adding the product to cart function.
function addToCart(product) {
    console.log(`Product added to cart:`, product);
}

// Purchasing product function
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
            const displayedPrice = onSale ? price - discountedPrice: price;

            // Render products using template literals. 
            productCards.innerHTML += `
            <div class="card">
            <a href="/product/index.html?id=${id}"><img src=${image} alt="Image" id="product-image"></a>
            <h2 id="product-title>${title}</h2>
            <p id="price">Price: $${displayedPrice}</p>
            <button id="add-to-cart-${id}" class="btn add-to-cart-btn">Add to cart</button>
            <button id="buy-${id}" class="btn buy-btn">Buy now</button>
            <a href="/product/index.html?id=${id}" id="view-desc-${id}" class="description-link">View description</a>
            </div>
            `;

             // Adding eventlistener to the add to cart buttons. 
            document.getElementById(`add-to-cart-${id}`).addEventListener("click", () => addToCart(game));

            // Adding eventlistener to the buy buttons. 
            document.getElementById(`buy-${id}`).addEventListener("click", () => purchase(game));

            // Adding eventlistener for the view description links. 
            document.getElementById(`view-desc-${id}`).addEventListener("click", (event) => {
            event.preventDefault(); 
            

            });
        });
        
    } catch (error) {
        console.log("Error:" + error);
    } 
});

    /*
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
*/
        // Logic for viewing description on clicked link in each product card. 