export const openBurger = () => {
  const btn = document.querySelector('.burger__btn');
  const btnImg = btn.querySelector('img');
  const mobileNav = document.querySelector('.mobile__nav');
  const brand = document.querySelector('.brand');

  let isAtctive = false;

  btn.addEventListener('click', () => {
    isAtctive = !isAtctive;
    mobileNav.classList.toggle('active');

    if (isAtctive) {
      btnImg.src = '../../img/icon-close.svg';
      brand.style.display = 'none';
    } else {
      btnImg.src = '../../img/icon-hamburger.svg';
      brand.style.display = 'inline';
    }
  });
};
