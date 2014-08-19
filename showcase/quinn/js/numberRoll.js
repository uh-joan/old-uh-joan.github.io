function numberRoll(numberElement, numberTime, numberSpeed) {
	var thisObject = numberElement;
	var thisMax = thisObject.attr('data-number');
	var thisCounter = 0;
	var thisStep = numberTime/numberSpeed;

	if(thisMax < thisStep) {
		var thisPlus = 1;
		var thisTime = numberTime/thisMax;
	}
	else {
		var thisPlus = parseInt(thisMax/thisStep);
		var thisTime = numberTime/thisStep;
	}

	function counterPlus(){
		thisCounter += thisPlus;
		if(thisCounter < thisMax) {								
			thisObject.html(thisCounter);
			setTimeout(function(){
				counterPlus();
			},thisTime);
		}
		else {
			thisObject.html(thisMax);
		}
	}
	counterPlus();
}