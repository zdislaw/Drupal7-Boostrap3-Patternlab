(function($){
	BF.init(function(){
		// Bind menu toggle on hover
		$("body").on("mouseenter mouseleave",".dropdown", function(){
			$(this).children('.dropdown-toggle').dropdown('toggle');
		});

		// Stop clicks inside a dropdown menu from toggling dropdown
		$(".dropdown a").on("click",function(e){
			e.stopPropagation();

			var $a = $(this);
			if($a.hasClass('dropdown-toggle') && $(window).width() > 768)
				window.location = $a.attr('href');
		});
	});
})(jQuery);