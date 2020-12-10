const controls = document.querySelector('.controls');
const hero = document.querySelector('.hero');
const heroDimensions = hero.getBoundingClientRect();
const stage = document.querySelector('.stage');
const stageDimensions = stage.getBoundingClientRect();
const heroPosition = {
  left: 0,
  top: 0,
};
const boundaryRight = stageDimensions.width - heroDimensions.width;
const boundaryBottom = stageDimensions.height - heroDimensions.height;

const moveHero = (axis = 'x', normalizeDirection = 'fw') => {
  let step = normalizeDirection === 'fw' ? 30 : -30;
  let cssProperty = axis === 'x' ? 'left' : 'top';

  heroPosition[cssProperty] += step;

  if (heroPosition[cssProperty] <= 0) {
    heroPosition[cssProperty] = 0;
  }

  if (axis === 'x' && heroPosition[cssProperty] >= boundaryRight) {
    heroPosition[cssProperty] = boundaryRight;
  }

  if (axis === 'y' && heroPosition[cssProperty] >= boundaryBottom) {
    heroPosition[cssProperty] = boundaryBottom;
  }

  hero.style.left = `${heroPosition.left}px`;
  hero.style.top = `${heroPosition.top}px`;
};

controls.addEventListener('click', (event) => {
  let target = event.target;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  let direction = target.id.split('-')[1];
  let axis = 'x';
  let normalizeDirection = 'fw';

  switch (direction) {
    case 'right':
      axis = 'x';
      moveHero(axis, normalizeDirection);
      break;

    case 'left':
      axis = 'x';
      normalizeDirection = 'bk';
      moveHero(axis, normalizeDirection);
      break;

    case 'down':
      axis = 'y';
      normalizeDirection = 'fw';
      moveHero(axis, normalizeDirection);
      break;
    case 'up':
      axis = 'y';
      normalizeDirection = 'bk';
      moveHero(axis, normalizeDirection);
      break;
    default:
      break;
  }
});

window.addEventListener('keydown', (event) => {
  let axis = 'x';
  let normalizeDirection = 'fw';

  switch (event.code) {
    case 'ArrowRight':
      break;

    case 'ArrowDown':
      axis = 'y';
      break;
    default:
      break;
  }

  moveHero(axis, normalizeDirection);
});
