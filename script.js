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

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function openModal2() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "block";
}

function closeModal2() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
}

function openModal3() {
    var modal = document.getElementById("myModal3");
    modal.style.display = "block";
}

function closeModal3() {
    var modal = document.getElementById("myModal3");
    modal.style.display = "none";
}

function openModal4() {
    var modal = document.getElementById("myModal4");
    modal.style.display = "block";
}

function closeModal4() {
    var modal = document.getElementById("myModal4");
    modal.style.display = "none";
}

function openModal5() {
    var modal = document.getElementById("myModal5");
    modal.style.display = "block";
}

function closeModal5() {
    var modal = document.getElementById("myModal5");
    modal.style.display = "none";
}
