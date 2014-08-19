$(function() {
  $('a.interLink').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-71
      }, 1000);
    }
  });
});