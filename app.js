'use strict';
let scrollContainer = document.querySelector('.gellery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

// console.log(scrollContainer, backBtn, nextBtn);

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 900;
});

const icon = document.querySelector('.theme-icon');

icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'images/moon.png';
  } else {
    icon.src = 'images/sun.png';
  }
});
