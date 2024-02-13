var clickMeAgainClicked = false;
var finalButtonClicked = false;

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
    if (!finalButtonClicked) {
        finalButtonClicked = true;

        // Create "Now, Click Me" button
        var finalButton = document.createElement("button");
        finalButton.innerText = "Now, Click Me";
        finalButton.id = "finalButton";
        finalButton.onclick = showMessage;

        // Append the button to the body
        document.body.appendChild(finalButton);

        // Center the button at the bottom
        finalButton.style.position = "fixed";
        finalButton.style.bottom = "20px";
        finalButton.style.left = "50%";
        finalButton.style.transform = "translateX(-50%)";
    }
}

function showMessage() {
    // Create a pop-up message div
    var popupMessage = document.createElement("div");
    popupMessage.innerText = "Congratulations! You clicked all the buttons!";
    popupMessage.id = "popupMessage";

    // Append the message to the body
    document.body.appendChild(popupMessage);

    // Center the message
    popupMessage.style.position = "fixed";
    popupMessage.style.top = "50%";
    popupMessage.style.left = "50%";
    popupMessage.style.transform = "translate(-50%, -50%)";
}

// Call the initial function
showClickMeAgain();

$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});
