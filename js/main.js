const burgerOpen = () => {
  const header = document.querySelector('.header'),
    headerBg = document.querySelector('.header__bg'),
    burger = document.querySelector('.burger .burger__item'),
    nav = document.querySelector('.nav');

  if (burger) {
    burger.addEventListener('click', (e) => {
      header.classList.toggle('active');
      headerBg.classList.toggle('active');
      nav.classList.toggle('active');
      e.currentTarget.classList.toggle('active');
    });

    headerBg.addEventListener('click', (e) => {
      header.classList.remove('active');
      burger.classList.remove('active');
      nav.classList.remove('active');
      e.currentTarget.classList.remove('active');
    });
  }
};
burgerOpen();