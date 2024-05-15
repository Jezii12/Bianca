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
    var modal = document.getElementById("myModal3");
    modal.style.display = "block";
  }

  function closeModal2() {
    var modal = document.getElementById("myModal3");
    modal.style.display = "none";
  }
