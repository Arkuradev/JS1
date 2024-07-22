
fetchData();

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

 }

 // OK so I figured out how to access the values in the GameHub API
 // Now we need to make our card. First we will create 1 card and 1 card only. 
 // After wards we will loop through the arrays creating cards for all the products. 
 // And render them on the page. 
 // Next up is the buttons to be added to each card in order for the customer
 // to purchase the products. 

 // And to do this we fetch the single id of the product when its added to a card? 
 // Incredible!