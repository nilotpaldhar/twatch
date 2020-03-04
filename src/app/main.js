window.$ = require('jquery');
import SmoothScroll from 'smooth-scroll';
import preLoader from './pre-loader';
import slider from './slider';
import navScroll from './navScroll';
import scrollSpy from './scrollSpy';

export function run() {
	preLoader();
	slider();
	navScroll();
	SmoothScroll('a[href*="#"]', {
		offset: 150,
		speed: 1000
	});
	scrollSpy();
}
