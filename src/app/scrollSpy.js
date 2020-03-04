function scrollSpy() {
	// Active link switching
	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();
		var scrollLink = $('#navbar a.navbar__link');

		scrollLink.each(function() {
			var sectionOffset = $(this.hash).offset().top - 200;

			if (sectionOffset <= scrollbarLocation) {
				$('#navbar a').removeClass('active');
				$(this).addClass('active');
			}
		});
	});
}

export default scrollSpy;
