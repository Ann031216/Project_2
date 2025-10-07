'use strict';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll(".header__link");

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});
// Закривати меню при кліку на пункт
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
  });
});

//ховаємо при скролі
window.addEventListener("scroll", () => {
  menu.classList.remove("active");
  burger.classList.remove("active");
});



//---кнопка More Details для project
document.querySelectorAll('.project__btn').forEach(button => {
  button.addEventListener('click', () => {
    // шукаємо попередній блок з класом project__add у межах того ж .project__content
    const extraText = button.closest('.project__content').querySelector('.project__add');
    
    extraText.classList.toggle('active');
    
    if(extraText.classList.contains('active')) {
      button.textContent = 'Less details';
    } else {
      button.textContent = 'More details';
    }
  });
});