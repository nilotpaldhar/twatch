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
		dots: true,
		// Responsive Breakpoint
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					infinite: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					infinite: true
				}
			}
		]
	});
}

export default slider;
