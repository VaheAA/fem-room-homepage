import glide from '@glidejs/glide';
import { Controls } from '../../node_modules/@glidejs/glide/dist/glide.modular.esm.js';
import { openBurger } from './modules/burger.js';

const left = document.getElementById('left');
const right = document.getElementById('right');

const leftSlider = new glide(left, {
  type: 'carousel',
  startAt: 0,
  perView: 1
});
const rightSlider = new glide(right, {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  rewind: true
});

leftSlider.mount();
rightSlider.mount({ Controls });

rightSlider.on('run', (e) => {
  leftSlider.go(e.direction);
});

leftSlider.on('run', (e) => {
  rightSlider.go(e.direction);
});

openBurger();
