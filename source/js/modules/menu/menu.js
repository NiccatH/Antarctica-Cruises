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
  };

  const close = () => {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navigationBackground.classList.remove('page__body--substrate');
  };

  const onMenuToggleClick = () => {
    const isClosed = navMain.classList.contains('main-nav--closed');
    const isOpened = navMain.classList.contains('main-nav--opened');
    if (isClosed) {
      open();
      navLinks.forEach((link) => {
        link.addEventListener('click', close);
      });
    }
    if (isOpened) {
      close();
      navLinks.forEach((link) => {
        link.removeEventListener('click', close);
      });
    }
  };

  navToggle.addEventListener('click', onMenuToggleClick);
};

export {operateMenu};
