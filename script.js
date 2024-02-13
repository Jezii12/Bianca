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
    }
}

function showMessage() {
    // Display a message
    alert("Congratulations! You clicked all the buttons!");
}

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
