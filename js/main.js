const burgerOpen = () => {
  const headerBg = document.querySelector('.header__bg'),
    burger = document.querySelector('.burger .burger__item'),
    nav = document.querySelector('.nav');

  if (burger) {
    burger.addEventListener('click', (e) => {
      headerBg.classList.toggle('active');
      nav.classList.toggle('active');
      e.currentTarget.classList.toggle('active');
    });

    headerBg.addEventListener('click', (e) => {
      burger.classList.remove('active');
      nav.classList.remove('active');
      e.currentTarget.classList.remove('active');
    });
  }
};
burgerOpen();