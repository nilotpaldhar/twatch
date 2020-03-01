import slick from 'slick-carousel';

function slider() {
	$('#slider').slick({
		autoplay: true,
		speed: 500,
		arrows: false
	});
}

export default slider;
