var clickMeAgainClicked = false;

function showClickMeAgain() {
    if (!clickMeAgainClicked) {
        clickMeAgainClicked = true;

        // Create "Click Me Again" button
        var clickMeAgainBtn = document.createElement("button");
        clickMeAgainBtn.innerText = "Click Me Again";
        clickMeAgainBtn.id = "clickMeAgainBtn";
        clickMeAgainBtn.onclick = showFinalButton;

        // Append the button to the body
        document.body.appendChild(clickMeAgainBtn);
    }
}

function showFinalButton() {
    // Create "Now, Click Me" button
    var finalButton = document.createElement("button");
    finalButton.innerText = "Now, Click Me";
    finalButton.id = "finalButton";
    finalButton.onclick = showMessage;

    // Append the button to the body
    document.body.appendChild(finalButton);
}

function showMessage() {
    // Display a message
    alert("Congratulations! You clicked all the buttons!");
}
