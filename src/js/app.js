import glide from '@glidejs/glide';
import { Controls } from '../../node_modules/@glidejs/glide/dist/glide.modular.esm.js';

const sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var slider = new glide(sliders[i], {
    gap: 15
  });

  slider.mount();
}
