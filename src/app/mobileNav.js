function mobileNav() {
	$('#nav-toggle').on('click', function() {
		$(this).toggleClass('navbar__toggler--close');
		$('#mobile-nav').toggleClass('navbar__nav--open');
	});
}

export default mobileNav;
