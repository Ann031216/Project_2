'use strict';


// let createNewEl = function(tagName) {
//     return document.createElement(tagName);
// }


// createNewEl

// Vanilla JS --------------

// document.querySelector("#btn").addEventListener("click", () => {
//   document.querySelector("#box").classList.toggle("hidden");
// });


// Jquery ----------

// $("#btn").on("click", () => {
//   $("#box").toggle();
// });

$('.header__logo').click(function() {
    alert('Start Jquery!!!')
})

$('.jquery__text').click(function() {
    $('.main__title').toggleClass('active');
})

$('.jquery__btn_hide').click(function() {
    $('.jquery__text').hide('slow');
    $('.jquery__title').addClass('red_text');
})

$('.add').click(() => {
    $('p.text_hide').toggle('slow', () => {
        $('<h3>New title</h3>')
            .appendTo('.block')
            .addClass('title_3');
    })
})

$(document).ready(function () {
  $(".scroll__btn").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $(".projects").offset().top
    }, 4000); 
  });
});