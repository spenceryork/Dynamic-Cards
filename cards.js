let createBtn = document.getElementById("createButton");
let cardName = document.getElementById("textInput");
let card = document.createElement("div");

createBtn.addEventListener("click", function(){
    // Create div with the class "card"
    let card = document.createElement("div");
    card.className = "newCard";
    
    // Create Card header with the text input by the user
    let cardHeader = document.createElement("h2");
    cardHeader.innerText = cardName.value;
    
    // Create delete button within card
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "deleteB";

    // Attach card header and button to card
    card.appendChild(cardHeader);
    card.appendChild(delBtn);

    //Attach card to DOM
    document.body.append(card);

    // Delete card from DOM when delete is clicked
    delBtn.addEventListener("click", function(){
        console.log("delete got clicked");
        card.remove();
    });
})



