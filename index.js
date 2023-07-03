$(".abstract").on("click", function () {
  $(this).siblings(".abstract-item").toggle();
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const iconCeu = document.querySelector('.icon_ceu');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

iconCeu.addEventListener('mouseover', () => {
  iconCeu.src = 'exeter.png';
});

iconCeu.addEventListener('mouseout', () => {
  iconCeu.src = 'exeter.png';
});
