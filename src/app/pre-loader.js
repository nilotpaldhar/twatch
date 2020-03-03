function preLoader() {
	$(window).on('load', function() {
		$('#loader').fadeOut('1000');
	});
}

export default preLoader;
