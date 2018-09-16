
(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

		$('a[href^="#"]').on('click', function (e) {
						e.preventDefault();

						var target = this.hash;
						var $target = $(target);

						$('html, body').animate({
							'scrollTop': $target.offset().top
						}, 1000, 'swing');
					});

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

})(jQuery);
