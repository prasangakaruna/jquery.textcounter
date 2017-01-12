
(function (){

    $.fn.textCounter = function (className,textCount){ 
                    
            return this.each( function (){
            var title =  $('.'+className).text();
            if (title.length > textCount) {
            var content  = title.substr(0, textCount) + ' ....';
            $('.'+className).text(content).append('<span  class="showcontent">More <i class="fa fa-angle-down" aria-hidden="true"></i></span>');
            } else {
            $('.'+className).text(title);
            }            
   
     });
    };

}());










/*


cartSummary : function (className) {
		$(className).each(function () {			
			var title =  $(this).text(),
				shortenString = '',
				stringShortener = function (string) {
					if (string.length > 25) {
						return string.substr(0, 27) + ' ....';
					} else {
						return string;
					}
				};			
			shortenString = stringShortener(title);
			$(this).text(shortenString).css({
				textTransform : 'capitalize'
			});

			$(this).on('mouseenter', function () {
				$(this).text(title)
			});
			
			$(this).on('mouseleave', function () {
				$(this).text(shortenString)
			});
		});	
		
	}*/