$(document).ready(function() {
  infinitySlider(
    infinitySliderId = 'slide01',
    infinitySliderCommandsClass = 'iS-Commands',
    infinitySliderPreviousButtonClass = 'iS-Previous',
    infinitySliderNextButtonClass = 'iS-Next',
    infinitySliderDotsClass = 'iS-Dots',
    infinitySliderDotClass = 'iS-Dot',
    infinitySliderDotActiveClass = 'iS-Dotactive',
    infinitySliderPlayButtonClass ='iS-Play',
    infinitySliderPlayButtonActiveClass ='iS-Playactive',
    infinitySliderStopButtonClass ='iS-Stop',
    infinitySliderStopButtonActiveClass ='iS-Stopactive',
    infinitySliderLoopIndicator ='iS-Loopline',
    infinitySliderContentClass ='iS-Content',   
    infinitySliderItemsClass = 'iS-Items',
    infinitySliderItemClass = 'iS-Item',
    infinitySliderAutoStartLoop = true,
    infinitySliderKeyboardNavigation = true,
    infinitySliderTouchNavigation = 'mobile',
    infinitySliderStarterSlide = 1
  );
  scrollSpyAddClass('id','Q-menu','fixed', false, 0, true);
  scrollSpyRemoveClass('class','Q-animate-left','Q-animate-left', true, 0, false);
  scrollSpyRemoveClass('class','Q-animate-right','Q-animate-right', true, 0, false);
  scrollSpyRemoveClass('class','Q-animate-top','Q-animate-top', true, 100, false);
  scrollSpyRemoveClass('class','Q-animate-bottom','Q-animate-bottom', true, -100, false);
  scrollSpyRemoveClass('class','Q-animate-fade','Q-animate-fade', true, 0, false);
  scrollSpyAddClass('class','Q-Scroll','Q-animate-hide', true, -100, true);
  scrollSpyRemoveClass('class','Q-Back','Q-animate-hide', true, -100, true);
  scrollSpyClickEvent('class', 'numberRoll', true, -100);
  if($(window).width()>1024) {
    $('.numberRoll').html('0');
    $('.numberRoll').click(function(){
      var current = $(this);
      if(current.hasClass('numberRoll')){
        numberRoll($(this),1000, 100, 0);
        $(this).removeClass('numberRoll');
      }
    });
    $('body,.modal').niceScroll({
      scrollspeed:'60',
      mousescrollstep:'40',
      zindex:'99999',
      bouncescroll:'enable',
      cursorborderradius:'0px',
      cursorborder:'none',
      cursorcolor:'#00adee'
    });
  }
  $(window).load(function() {
    setTimeout(function(){
      $('.iS-Stop').click();
    },16000);
  });
});
