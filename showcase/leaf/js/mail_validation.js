// var $ for better adaptation and work with other libraries


	$(document).ready(function(){
		 $(".help-inline").each(function() {
			$(this).css('display', 'none');
		 });
	});
	$("input[name=email]").bind('blur', is_valid_email);
	$("input[name=name]").bind('blur', is_valid_name);
	$("textarea[name=comment]").bind('blur', is_valid_comment);
    $('#validForm').bind('submit', function(e) {
        if (!is_valid_form()) {
            return false;
		}
        e.preventDefault();
        $("#result").html('');
        var data = $(this).serialize();

        $.ajax({
            url: "/html/send-form-email.php",
            type: "post",
            dataType : "json",
            data: data,
            success: function(data) {
                var alertClass;
                if(data.error === true){
                    alertClass = 'alert-error';
                }else{
                    alertClass = 'alert-success';
                    $('#validForm').closest('form').find("input[type=text], textarea").val("");
                }
                $("#result").html(returnHtml(alertClass, data.message));
            },
            error: function(data) {
                $("#result").html(returnHtml('alert-error', data));
            }
        });
    });


function returnHtml(alertClass, html){
    return '<div class="alert  '+alertClass+'"><button type="button" class="close" data-dismiss="alert">&times;</button>'+html+'</div>';
}

// Email validate
function is_valid_email() {
	var element = $("input[name=email]");
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	if(pattern.test(element.val())){ // valid
		if (element.closest(".control-group").hasClass("error")) 
			element.closest(".control-group").removeClass("error");
		element.siblings(".help-inline").css("display", "none");
		return true;
	} else { // error
		if (!element.closest(".control-group").hasClass("error")) 
			element.closest(".control-group").addClass("error");
		element.siblings(".help-inline").css("display", "block");
		return false;
	}
}
// Name validate
function is_valid_name() {
	var element = $("input[name=name]");
	if(element.val().length>0){ // valid
		if (element.closest(".control-group").hasClass("error")) 
			element.closest(".control-group").removeClass("error");
		element.siblings(".help-inline").css("display", "none");
		return true
	} else { // error
		if (!element.closest(".control-group").hasClass("error")) 
			element.closest(".control-group").addClass("error");
		element.siblings(".help-inline").css("display", "block");
		return false;
	}
}
// Comment validate
function is_valid_comment() {
	element = $("textarea[name=comment]");
	if(element.val().length>0){ // valid
		if (element.closest(".control-group").hasClass("error")) 
			element.closest(".control-group").removeClass("error");
		element.siblings(".help-inline").css("display", "none");
		return true
	} else { // error
		if (!element.closest(".control-group").hasClass("error")) 
			element.closest(".control-group").addClass("error");
		element.siblings(".help-inline").css("display", "block");
		return false;
	}
}
// Form validate
function is_valid_form() {
	var ret = true;
	if (!is_valid_name()) var ret = false;
	if (!is_valid_email()) var ret = false;
	if (!is_valid_comment()) var ret = false;
	return ret;
}