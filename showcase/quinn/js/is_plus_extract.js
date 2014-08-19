                                
                            /*************************
jQuery Infinty Slider v.1.5 Extensions
@Website: http://http://www.epeo.it/infinityslider/
@Author: Epeo
@Copyright: 09/06/2014
************************/
function autoCenter(thisItems) {
	thisItems.each(function() {
		var thisOnly = $(this);
		thisOnly.css({
			left: 'auto',
			right: 'auto',
			marginRight: 'auto',
			marginLeft: 'auto'
		});
		var thisParent = thisOnly.parent();
		var thisMargin = (thisParent.width()-thisOnly.outerWidth())/2;
		thisOnly.css({marginLeft: thisMargin});
	});
}
function autoMiddle(thisItems) {
	thisItems.each(function() {
		var thisOnly = $(this);
		thisOnly.css({
			top: 'auto',
			bottom: 'auto',
			marginBottom: 'auto',
			marginTop: 'auto'
		});
		var thisParent = thisOnly.parent();
		var thisMargin = (thisParent.height()-thisOnly.outerHeight())/2;
		thisOnly.css({marginTop: thisMargin});
	});
}
function fullScreen(thisItems) {
	thisItems.each(function(){
		$(this).css({
			width: $(window).width(),
			height: $(window).height(),
		})
	});
}
$(document).ready(function(){
	var center = $('.epeoCenter');
	var middle = $('.epeoMiddle');
	var fullscreen = $('.epeoFullscreen');
	fullScreen(fullscreen);
	$(window).bind('load resize',function(){
		fullScreen(fullscreen);
		autoCenter(center);
		autoMiddle(middle);
	});
});