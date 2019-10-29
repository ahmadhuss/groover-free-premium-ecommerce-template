import '../scss/vendor.scss';
/**
 * This file contains every dependency related to project. In this file We'll
 * load all dependencies through ES6 `import` and `require` method from
 * CommonJS, which is the current module system used by NodeJS to allow us
 * to load modules dynamically.
 * Keep in mind that there is no JavaScript engine yet that natively supports
 * ES6 modules syntax `import` and `export`. Babel converts import and export
 * declaration to CommonJS (require/module.exports) by default anyway. So even
 * if you use ES6 module syntax, you will be using CommonJS under the hood if
 * you run the code in NodeJS or JavaScript.
 */

// Popper.js from `node_modules`
import Popper from 'popper.js/dist/umd/popper.js';

try {
    // `Modernizer` will load and initialize itself.
    require('./vendor/modernizr-custom');
    // NProgress from `node_modules`
    window.NProgress =   require('nprogress/nprogress');
    // jquery.js from `node_modules`
    window.$ = window.jQuery = require('jquery');
    // Popper.js from `node_modules`
    window.Popper = Popper;
    // Bootstrap.js from `node_modules`
    require('bootstrap');
    // Scroll-up.js
    require('./jquery.scrollUp');
    // Elevate-zoom.js
    require('./jquery.elevatezoom');
    // jquery-ui-range-slider.js
    require('./jquery-ui.range-slider');
    // jquery-slimScroll.js from `node_modules`
    require('jquery-slimscroll/jquery.slimscroll');
    // jquery-custom-resizeSelect.js
    require('./jquery.resize-select');
    // jquery-custom-mega-menu.js
    require('./jquery.custom-megamenu');
    // Owl-carousel.js from `node_modules`
    require('owl.carousel/dist/owl.carousel');
    // jquery-custom-countdown.js
    require('./jquery.custom-countdown');
} catch (e) {
    console.log(e);
}
