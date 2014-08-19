function scrollSpyClickEvent(sP_type, sP_element, sP_windowFlag, sP_range) {
	var thisType = $.trim(sP_type);
	var thisElement = $.trim(sP_element);
	var thisWindowFlag = $.trim(sP_windowFlag);
	var thisRange = $.trim(sP_range);
	var thisWindow = 0;
	if($.isNumeric(thisRange)) {
		thisRange = parseInt(thisRange);
	}
	else {
		thisRange = 0;
	}
	if(thisWindowFlag == true || thisWindowFlag == 'true') {
		thisWindow = $(window).height();
	}
	if(thisType == 'id') {
		if(thisElement.indexOf('#') == 0) {
			thisElement = $(thisElement);
		}
		else {
			thisElement = $('#'+thisElement);
		}		
		if(thisElement.length == 1) {
			var thisElementScroll = thisElement.offset().top-thisRange-thisWindow;
			$(window).scroll(function() {
				var thisWindowScroll = $(window).scrollTop();
				if(thisWindowScroll >= thisElementScroll) {
					thisElement.click();
				}
			});
		}
	}
	else if(thisType == 'class') {
		if(thisElement.indexOf('.') == 0) {
			thisElement = $(thisElement);
		}
		else {
			thisElement = $('.'+thisElement);
		}
		if(thisElement.length > 0) {
			thisElement.each(function(){
				var thisOnly = $(this);
				var thisElementScroll = thisOnly.offset().top-thisRange-thisWindow;
				$(window).scroll(function() {
					var thisWindowScroll = $(window).scrollTop();
					if(thisWindowScroll >= thisElementScroll) {
						thisOnly.click();
					}
				});		
			});
		}
	}
}

function scrollSpyAddClass(sP_type, sP_element, sP_class, sP_windowFlag, sP_range, sP_backFlag) {
	var thisType = $.trim(sP_type);
	var thisElement = $.trim(sP_element);
	var thisClass = $.trim(sP_class);
	var thisWindowFlag = $.trim(sP_windowFlag);
	var thisRange = $.trim(sP_range);
	var thisWindow = 0;
	var thisBack = $.trim(sP_backFlag);
	if($.isNumeric(thisRange)) {
		thisRange = parseInt(thisRange);
	}
	else {
		thisRange = 0;
	}
	if(thisClass.indexOf('.') == 0) {
		thisClass = thisClass.substr(1)
	}
	if(thisBack == 'true') {
		thisBack = true;
	}
	if(thisWindowFlag == true || thisWindowFlag == 'true') {
		thisWindow = $(window).height();
	}
	if(thisType == 'id') {
		if(thisElement.indexOf('#') == 0) {
			thisElement = $(thisElement);
		}
		else {
			thisElement = $('#'+thisElement);
		}		
		if(thisElement.length == 1) {
			var thisElementScroll = thisElement.offset().top-thisRange-thisWindow;
			$(window).scroll(function() {
				var thisWindowScroll = $(window).scrollTop();
				if(thisWindowScroll >= thisElementScroll && !thisElement.hasClass(thisClass)) {
					thisElement.addClass(thisClass);
				}
				else if(thisWindowScroll < thisElementScroll && thisElement.hasClass(thisClass) && thisBack == true) {
					thisElement.removeClass(thisClass);
				}
			});
		}
	}
	else if(thisType == 'class') {
		if(thisElement.indexOf('.') == 0) {
			thisElement = $(thisElement);
		}
		else {
			thisElement = $('.'+thisElement);
		}
		if(thisElement.length > 0) {
			thisElement.each(function(){
				var thisOnly = $(this);
				var thisElementScroll = thisOnly.offset().top-thisRange-thisWindow;
				$(window).scroll(function() {
					var thisWindowScroll = $(window).scrollTop();
					if(thisWindowScroll >= thisElementScroll && !thisOnly.hasClass(thisClass)) {
						thisOnly.addClass(thisClass);
					}
					else if(thisWindowScroll < thisElementScroll && thisOnly.hasClass(thisClass) && thisBack == true) {
						thisOnly.removeClass(thisClass);
					}
				});		
			});
		}
	}
}

function scrollSpyRemoveClass(sP_type, sP_element, sP_class, sP_windowFlag, sP_range, sP_backFlag) {
	var thisType = $.trim(sP_type);
	var thisElement = $.trim(sP_element);
	var thisClass = $.trim(sP_class);
	var thisWindowFlag = $.trim(sP_windowFlag);
	var thisRange = $.trim(sP_range);
	var thisWindow = 0;
	var thisBack = $.trim(sP_backFlag);
	if($.isNumeric(thisRange)) {
		thisRange = parseInt(thisRange);
	}
	else {
		thisRange = 0;
	}
	if(thisClass.indexOf('.') == 0) {
		thisClass = thisClass.substr(1)
	}
	if(thisBack == 'true') {
		thisBack = true;
	}
	if(thisWindowFlag == true || thisWindowFlag == 'true') {
		thisWindow = $(window).height();
	}
	if(thisType == 'id') {
		if(thisElement.indexOf('#') == 0) {
			thisElement = $(thisElement);
		}
		else {
			thisElement = $('#'+thisElement);
		}		
		if(thisElement.length == 1) {
			var thisElementScroll = thisElement.offset().top-thisRange-thisWindow;
			$(window).scroll(function() {
				var thisWindowScroll = $(window).scrollTop();
				if(thisWindowScroll >= thisElementScroll && thisElement.hasClass(thisClass)) {
					thisElement.removeClass(thisClass);
				}
				else if(thisWindowScroll < thisElementScroll && !thisElement.hasClass(thisClass) && thisBack == true) {
					thisElement.addClass(thisClass);
				}
			});
		}
	}
	else if(thisType == 'class') {
		if(thisElement.indexOf('.') == 0) {
			thisElement = $(thisElement);
		}
		else {
			thisElement = $('.'+thisElement);
		}
		if(thisElement.length > 0) {
			thisElement.each(function(){
				var thisOnly = $(this);
				var thisElementScroll = thisOnly.offset().top-thisRange-thisWindow;
				$(window).scroll(function() {
					var thisWindowScroll = $(window).scrollTop();
					if(thisWindowScroll >= thisElementScroll && thisOnly.hasClass(thisClass)) {
						thisOnly.removeClass(thisClass);
					}
					else if(thisWindowScroll < thisElementScroll && !thisOnly.hasClass(thisClass) && thisBack == true) {
						thisOnly.addClass(thisClass);
					}
				});		
			});
		}
	}
}