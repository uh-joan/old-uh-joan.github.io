/*------------------------------
 * Copyright 2014 Pixelized
 * http://www.pixelized.cz
 *
 * Sitename theme v1.0
------------------------------*/



$(document).ready(function() {	
	


<!--Vegas background start -->
	$.vegas({
	  src:'image/background.jpg'
	});
	
	$.vegas('overlay', {
	  src:'plugins/vegas/overlays/05.png'
	});	
<!--Vegas background end -->

<!-- Time circle countdown start -->	
	$("#DateCountdown").TimeCircles({
    "animation": "ticks",
    "bg_width": 0.2,
    "fg_width": 0.016666666666666666,
    "circle_bg_color": "#F5F5F5",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#FFF",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#FFF",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#FFF",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#FFF",
            "show": true
        }
    }
});

<!-- Time circle countdown end -->

<!-- GOOGLE map initialization star-->
	var map;
	function initialize() {
	  var mapOptions = {zoom: 18,center: new google.maps.LatLng(40.7633856,-73.973261)};
	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
		
<!-- GOOGLE map initialization end-->

<!-- GOOGLE map modal fix start-->
	
	$("#contact").on("shown.bs.modal", function () {
		google.maps.event.trigger(map, "resize");
	});
<!-- GOOGLE map modal fix end-->
	
});

$(window).resize(function() {	
	$("#DateCountdown").TimeCircles().rebuild(); 
});


