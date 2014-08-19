$(document).ready(function(){
	$('.form-control').click(function(){
		$(this).popover('hide');
	});
	$('#Q-form-send').click(function(){
		var formname = $('#Q-form-name');
		var formemail = $('#Q-form-email');
		var formsubject = $('#Q-form-subject');
		var formmessage = $('#Q-form-message');
		var formnamevalue = $.trim(formname.val());
		var formemailvalue = $.trim(formemail.val());
		var formsubjectvalue = $.trim(formsubject.val());
		var formmessagevalue = $.trim(formmessage.val());
		/*OPTIONAL CONTROLS*/		
		var formerror = false;
		/*
		if(formnamevalue == '') {
			formname.popover('show');
			formerror = true;
		}
		if(formemailvalue == '') {
			formemail.popover('show');
			formerror = true;
		}
		if(formsubjectvalue == '') {
			formsubject.popover('show');
			formerror = true;
		}
		if(formmessagevalue == '') {
			formmessage.popover('show');
			formerror = true;
		}
		*/
		if(formerror == false) {
			var formdata = 'name=' + formnamevalue + '&email=' + formemailvalue + '&subject=' + formsubjectvalue + '&message=' + formmessagevalue;
			var button = $(this);
			var memo = button.html();
			button.html('<i class="fa fa-circle-o-notch fa-spin"></i> Sending');
			function messageOutput(newhtml) {
				formname.val('');
				formemail.val('');
				formsubject.val('');
				formmessage.val('');
				button.html(memo);
				$('#submit .modal-body').html(newhtml);
				$('#submit').modal('show');
			}
			setTimeout(function(){
				/*AJAX FUNCTIONS: CHECK THE SEND.PHP FILE*/
				/*
				$.ajax({	
					type: "POST",
					url: "send.php",
					data: formdata,
					cache: false,
					success: function(html){
						if(html == 'yes') {
							var newhtml = 'Message Sent Succesfully';
						}
						else {
							var newhtml = 'Message Sent Failure';
						}
						messageOutput(newhtml);
					}
				});
				*/
				/*DEMO OUTPUT: REMOVE WHEN AJAX IS ACTIVE*/
				var newhtml = 'This is a demo version of the ajax contact form <br> You can activate it purchasing the template'
				messageOutput(newhtml);
			},1000);
		}
	});
});