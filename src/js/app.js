import glide from '@glidejs/glide';
import { Controls } from '../../node_modules/@glidejs/glide/dist/glide.modular.esm.js';

const furniture = new glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  Controls
});

furniture.mount({ Controls });
