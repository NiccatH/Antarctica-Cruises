const displayMap = () => {
  const mapImage = document.querySelector('.map');
  mapImage.classList.remove('map--nojs');
  mapImage.classList.add('map--js');
};

export {displayMap};
