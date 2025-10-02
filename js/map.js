'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([49.2331, 28.4682], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([49.2331, 28.4682]).addTo(map)
    .bindPopup('<b>Наш офіс</b><br>Вінниця, Україна')
    .openPopup();
});