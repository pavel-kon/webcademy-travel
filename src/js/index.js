// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import { easepick, TimePlugin } from '@easepick/bundle';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
  zIndex: 10,
  format: 'HH:mm, DD/MM/YY',
  plugins: [TimePlugin],
});

// import autoCompleteFunc from './modules/autoComplete';
// autoCompleteFunc();
