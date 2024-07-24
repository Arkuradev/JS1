fetch("https://api.noroff.dev/api/v1/gamehub").then((data)=> {
    // console.log(data)
    return data.json();
}).then((completeData)=>{
    // console.log(completeData)
    let data1 = "";
    
    completeData.map((values)=>{
        data1 += `
        <div class="card">
        <p id="product-title">${values.title}</p>
        <img src=${values.image} alt="Image" id="product-image">
        
        <p id="description">${values.description}</p>
        <p id="category">Category: ${values.genre}</p>
        <p id="price">Price: $${values.price}</p>
        <p id="onSale">ON SALE!</p>  
        <button id="addCart-btn">Add to cart</button>
        <button id="buy-btn">BUY NOW</button>         
        </div>
        `
    });
   document.getElementById("products").innerHTML = data1;
    
}).catch((error)=>{
    console.log(error)
})




/* 
Research how to make it visual when a product is on sale. 
At the same time make the price update with each product thats on sale. 
Add a small navbar to navigate to the cart and back to products page. 


*/





/* fetchData();

 async function fetchData(){

    try{
        const response = await fetch("https://api.noroff.dev/api/v1/gamehub");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const productImage = data[0]["image"];
        const imgElement = document.getElementById("product-image")
        const pTitle = document.getElementById("product-title");
        const desc = document.getElementById("description");
        const price = document.getElementById("price");
        const onSale = document.getElementById("on-sale");


        imgElement.src = productImage;
        pTitle.textContent = data[0]["title"];
        price.textContent = data[0]["price"];
        desc.textContent = data[0]["description"];
        onSale.textContent = data[0]["discountedPrice"];

        //Refactor this be more dynamic and functioning.

        
        for(let i = 0; i < data[i]["title"].length; i++) {

            console.log(data[i]["title"])
        }
      
    }catch(error){
        console.error(error)
    }

 } */

 // OK so I figured out how to access the values in the GameHub API
 // Now we need to make our card. First we will create 1 card and 1 card only. 
 // After wards we will loop through the arrays creating cards for all the products. 
 // And render them on the page. 
 // Next up is the buttons to be added to each card in order for the customer
 // to purchase the products. 

 // And to do this we fetch the single id of the product when its added to a card? 
 // Incredible!