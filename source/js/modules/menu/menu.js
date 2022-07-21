const operateMenu = () => {
  const navigationBackground = document.querySelector('.page__body');
  const navMain = document.querySelector('.main-nav');
  const navToggle = navMain.querySelector('.main-nav__toggle');
  const navList = navMain.querySelector('.main-nav__list');
  const navLinks = navList.querySelectorAll('a');
  navMain.classList.remove('main-nav--nojs');

  const open = () => {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navigationBackground.classList.add('page__body--substrate');
    navigationBackground.classList.add('page__body--fixed-position');
  };

  const close = () => {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navigationBackground.classList.remove('page__body--substrate');
    navigationBackground.classList.remove('page__body--fixed-position');
  };

  const onOverlayClick = (evt) => {
    if (evt.target === navigationBackground) {
      close();
    }
  };

  const onMenuToggleClick = () => {
    const isClosed = navMain.classList.contains('main-nav--closed');
    const isOpened = navMain.classList.contains('main-nav--opened');
    if (isClosed) {
      open();
      navLinks.forEach((link) => {
        link.addEventListener('click', close);
      });
      navigationBackground.addEventListener('click', onOverlayClick);
    }
    if (isOpened) {
      close();
      navLinks.forEach((link) => {
        link.removeEventListener('click', close);
      });
      navigationBackground.removeEventListener('click', onOverlayClick);
    }
  };

  navToggle.addEventListener('click', onMenuToggleClick);
};

export {operateMenu};
