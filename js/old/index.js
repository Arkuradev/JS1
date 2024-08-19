const singleProductCard = document.getElementById("single-product-card");
const productCards = document.getElementById("products");
const API_POSTS_URL = "https://api.noroff.dev/api/v1/gamehub";

// Fetch data from the API


// Add product to cart
function addToCart(product) {
    console.log(`Product added to cart:`, product);
}

// Purchase product
function purchase(product) {
    console.log(`Purchasing`, product);
}

// Render product details on the product page
function renderProductDetails(product) {
    const { id, title, onSale, discountedPrice, price, image, description, released, ageRating, genre } = product;

    const displayedPrice = onSale ? price - discountedPrice : price;

    singleProductCard.innerHTML = `
    <div class="card">
        <img src="${image}" alt="Image" id="product-image">
        <h2 id="product-title">${title}</h2>
        <p id="description">${description}</p>
        <p id="category">Genre: ${genre}</p>
        <p id="age-rating">Age Rating: ${ageRating}</p>
        <p id="release-date">Release Date: ${released}</p>
        <p id="price">Price: $${displayedPrice}</p>
    
        <button id="add-to-cart-${id}" class="btn add-to-cart-btn">Add to cart</button>
        <button id="buy-${id}" class="btn buy-btn">Buy now</button>
    </div>
    `;

    document.getElementById(`add-to-cart-${id}`).addEventListener("click", () => addToCart(product));
    document.getElementById(`buy-${id}`).addEventListener("click", () => purchase(product));
}

// Render products on the main page
async function renderProducts() {
    try {
        const games = await getData();
        
        games.forEach(game => {
            const { id, title, onSale, discountedPrice, price, image } = game;

            // Display sales prices for products on sale.
            const displayedPrice = onSale ? price - discountedPrice : price;

            // Render products using template literals.
            productCards.innerHTML += `
            <div class="card">
                <a href="/product/index.html?id=${id}"><img src=${image} alt="Image" id="product-image"></a>
                <h2 id="product-title">${title}</h2>
                <p id="price">Price: $${displayedPrice}</p>
                <button id="add-to-cart-${id}" class="btn add-to-cart-btn">Add to cart</button>
                <button id="buy-${id}" class="btn buy-btn">Buy now</button>
                <a href="/product/index.html?id=${id}" id="view-desc-${id}" class="description-link">View description</a>
            </div>
            `;

            // Adding event listeners to the "Add to Cart" buttons.
            document.getElementById(`add-to-cart-${id}`).addEventListener("click", () => addToCart(game));

            // Adding event listeners to the "Buy Now" buttons.
            document.getElementById(`buy-${id}`).addEventListener("click", () => purchase(game));
        });

    } catch (error) {
        console.log("Error:" + error);
    }
}

// Check which page the user is on and render content accordingly
document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId && singleProductCard) {
        // We're on the product detail page
        try {
            const product = await getData().then(products => products.find(p => p.id == productId));
            if (product) {
                renderProductDetails(product);
                
            } else {
                console.log("Product not found");
            }
        } catch (error) {
            console.log("Error fetching product details:", error);
        }
    } else if (productCards) {
        // We're on the main product listing page
        renderProducts();
    }
});

/* 
Begin from the beginning again. Taking all of this into account when building up the site. 
It's also time to use localStorage to create a cart for us to use for our project. 
 --- localStorage.setItem()

 Find a way to make the cart work. Also find a cart icon to use so we can add some cool stuff so we get a number next to the cart when there is an item there. 


*/
