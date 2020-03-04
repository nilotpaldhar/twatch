function navScroll() {
	$(document).scroll(function() {
		var navbar = $('#navbar');
		navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height() + 100);
	});
}

export default navScroll;
