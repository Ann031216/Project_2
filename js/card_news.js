'use strict';

function adjustNewsCards() {
  const cards = document.querySelectorAll('.news__card');
  let maxLines;

  if (window.innerWidth >= 1248) {
    maxLines = 2; // великі екрани: 2 рядки
  } else if (window.innerWidth >= 768) {
    maxLines = 3; // середні екрани: 3 рядки
  } else {
    maxLines = 4; // маленькі екрани: 4 рядки
  }

  // Обмежуємо рядки тексту
  cards.forEach(card => {
    const text = card.querySelector('.news__card__text');
    text.style.webkitLineClamp = maxLines;
  });

  // Підганяємо однакову висоту всіх карток
  let cardHeights = Array.from(cards).map(card => card.offsetHeight);
  let maxCardHeight = Math.max(...cardHeights);

  cards.forEach(card => {
    card.style.height = maxCardHeight + 'px';
  });
}

// Викликаємо при завантаженні та ресайзі
window.addEventListener('load', adjustNewsCards);
window.addEventListener('resize', adjustNewsCards);


//--------gallery------

const galleryBtn = document.querySelector('.gallery__btn');
const extraImages = document.querySelectorAll('.gallery__extra img');

galleryBtn.addEventListener('click', () => {
  const isHidden = extraImages[0].classList.contains('hidden');

  if (isHidden) {
    extraImages.forEach((img, index) => {
      setTimeout(() => img.classList.remove('hidden'), index * 100);
    });
    galleryBtn.textContent = 'HIDE';
  } else {
    extraImages.forEach((img, index) => {
      setTimeout(() => img.classList.add('hidden'), index * 100);
    });
    galleryBtn.textContent = 'SEE MORE';
  }
});