import slick from 'slick-carousel';

function slider() {
	$('#product-slider').slick({
		autoplay: true,
		speed: 800,
		arrows: false
	});

	$('#testimonial-slider').slick({
		autoplay: true,
		speed: 1000,
		arrows: false,
		slidesToShow: 3,
		dots: true
	});
}

export default slider;
