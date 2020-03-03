window.$ = require('jquery');
import preLoader from './pre-loader';
import slider from './slider';

export function run() {
	preLoader();
	slider();
}
