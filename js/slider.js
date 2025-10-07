$(document).ready(function(){

  // ----- Головний слайдер -----
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: true,
  });

  // ----- Кнопка "Scroll to projects" -----
  $('.scroll__btn').click(function(){
    $('html, body').animate({
      scrollTop: $('.projects').offset().top
    }, 800);
  });

  // ----- News slider -----

$(document).ready(function(){

  $('.news__slider').slick({
    slidesToShow: 3,      // показуємо 3 картки на десктопі
    slidesToScroll: 1,
    arrows: true,          
    dots: true,            
    infinite: true,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }  // на планшеті 2 слайди
      },
      {
        breakpoint: 860,
        settings: { slidesToShow: 1 }  // на мобільних 1 слайд
      }
    ]
  });

  // ----- Анімація появи карток -----
  function animateNewsCards() {
    $('.news__card').each(function(){
      var top_of_element = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_element + 50) {
        $(this).addClass('visible');
      }
    });
  }

  animateNewsCards();
  $(window).scroll(function(){ animateNewsCards(); });

});

 });

