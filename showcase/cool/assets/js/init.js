skel.init({
	resetCSS: true,
	boxModel: 'border',
	prefix: '/assets/css/style',
	containers: 1200,
	useOrientation: true,
	breakpoints: {
		'items': { range: '961-' },
		'wide': { range: '-1280', containers: 1080 },
		'normal': { range: '-1140', containers: '95%' },
		'narrow': { range: '-960', containers: '95%' },
		'narrower': { range: '-768', containers: '95%' },
		'mobile': { range: '-640', containers: '95%', lockViewport: true, grid: { collapse: true } }
	}
});

$(function() {

	var	$window = $(window),
		$body = $('body'),
		id = $body.attr('id');
	
	// Page
		switch (id) {
		
			default:
				break;
		
			case 'landing':
				
				var	$bar = $('#bar'),
					$items = $('#items');
		
				if (!skel.vars.isTouch
				&&	!$bar.hasClass('docked')) {

					var offset = 50;

					$window.scroll(function() {
					
						if (!$bar.hasClass('docked')) {
						
							if ($window.scrollTop() > $items.offset().top - offset
							&&	!skel.isActive('narrow')) {
								$bar.addClass('docked');
								
								window.setTimeout(function() {
									$bar.addClass('active');
								}, 250);
							}
						
						}
						else {
						
							if ($window.scrollTop() < $items.offset().top - offset
							||	skel.isActive('narrow')) {
								$bar.removeClass('active');
						
								window.setTimeout(function() {
									$bar
										.removeClass('docked')
										.hide()
										.fadeIn('fast');
								}, 250);
							}

						}
					
					});

					skel.onStateChange(function() {
						$window.trigger('scroll');
					});

				}
				
				if (skel.vars.isTouch)
					$items.children('article').each(function() {
						var t = $(this);
						t.find('a.image, a.demo').attr('href', '/uploads/demos/' + t.data('name'));
					});
				
				break;
				
			case 'demo':

				if (skel.vars.isTouch) {
					window.location.replace($('#demo-iframe').attr('src'));
					return;
				}

				$window.load(function() {

					var	$demoHeader = $('#demo-header'),
						$selector = $demoHeader.find('.selector'),
						$selector_li = $selector.children('li'),
						$iframeWrapper = $('#demo-iframe-wrapper'),
						$iframe = $('#demo-iframe'),
						isLocked = false;
						
					$window.resize(function() {
					
						if ($selector.is(':visible')) {
						
							if ($window.width() < 1200) {
								
								// Reset selector
									$selector_li.removeClass('active');
									$selector_li.first().addClass('active');

								// Hide selector
									$selector.hide();

								// Reset iframe wrapper
									$iframeWrapper
										.css('left', 0)
										.css('top', 0)
										.css('width', '100%')
										.css('height', '100%')
										.css('margin-top', ($body.hasClass('overlap') ? 0 : '3.375em'))
										.css('margin-left', 0);

							}
						
						}
						else {

							if ($window.width() >= 1200)
								$selector.show();

						}
					
					});
					
					$iframe.on('load', function() {
						$iframeWrapper.removeClass('loading');
						isLocked = false;
					});
						
					$selector_li.each(function() {
						
						var	t = $(this),
							top = 0,
							left = 0,
							width = t.data('width'),
							height = t.data('height'),
							marginLeft,
							marginTop,
							demoHeaderHeight = $demoHeader.outerHeight(),
							maxHeight = $window.height() - demoHeaderHeight - 120,
							framed = false;
						
						// Width
							if (!width) { 
								left = 0;
								marginLeft = '0';
								width = '100%';
							}
							else {
								left = '50%';
								marginLeft = (width / -2) + 'px';
								width = width + 'px';
								framed = true;
							}

						// Height
							if (!height) { 
								top = '';
								marginTop = '';
								height = '';

								if (skel.vars.IEVersion <= 8) {
									top = 0;
									marginTop = ($body.hasClass('overlap') ? 0 : '3.375em');
									height = '100%';
								}
							}
							else {
								height = Math.min(maxHeight, height);
								top = '50%';
								marginTop = (height / -2) + (demoHeaderHeight / 2) + 'px';
								height = height + 'px';
								framed = true;
							}
						
						// Click event
							t.click(function() {

								if (isLocked || t.hasClass('active'))
									return false;

								isLocked = true;

								$selector_li.removeClass('active');
								t.addClass('active');
								$iframeWrapper.addClass('loading');
								
								window.setTimeout(function() {
								
									if (framed)
										$iframeWrapper.addClass('framed');
									else
										$iframeWrapper.removeClass('framed');
								
									$iframeWrapper
										.css('left', left)
										.css('top', top)
										.css('width', width)
										.css('height', height)
										.css('margin-top', marginTop)
										.css('margin-left', marginLeft);
									
									window.setTimeout(function() {
									
										if ($body.hasClass('reload'))
											$iframe.attr('src', $iframe.attr('src'));
										else {
											$iframeWrapper.removeClass('loading');
											isLocked = false;
										}
									
									}, 500);	
									
								}, 500);
						
						});
						
					});
					
					$window.trigger('resize');
					
					if (skel.vars.IEVersion <= 8) {
						$selector_li.first()
							.removeClass('active')
							.trigger('click');
					}
					
				});
				
				break;
		
		}

	// Dialog
		var _dialog = $(
				'<div id="dialog">' +
					'<div class="modal">' + 
						'<h2>Downloading <span class="title"></span> &hellip;</h2>' + 
						'<section>' +
							'<p>PS: If you like what I\'m doing here, don\'t forget to ...</p>' +
							'<div class="actions">' +
								'<ul class="share"><li class="facebook"><div class="fb-like" data-href="http://html5up.net" data-send="false" data-layout="button_count" data-width="100" data-show-faces="true"></div></li><li class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://html5up.net" data-text="HTML5 Up! Fully responsive HTML5 and CSS3 site templates" data-count="horizontal">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></li><li class="google-plus"><div class="g-plusone" data-size="medium" data-href="http://html5up.net"></div></li></ul>' +
								'<a href="http://twitter.com/n33co" class="offsite button icon icon-twitter twitter on">Follow @n33co</a>' +
							'</div>' +
						'</section>' +
						'<section>' +
							'<h3>Need an attribution-free version?</h3>' +
							'<p>Check out <a href="http://pixelarity.com" class="offsite"><strong>Pixelarity</strong></a>, my latest and greatest side project that offers attribution-free ' +
							'usage of <strong>all</strong> of my templates, exclusive new templates, and support (from me) for just <strong>$19</strong>.</p>' +
							'<a href="http://pixelarity.com" class="offsite button alt">Visit Pixelarity</a>' +
						'</section>' +
						'<a href="#" class="closer button"></a>' +
					'</div>' +
				'</div>'
			),
			_dialog_modal = _dialog.find('.modal'), 
			_dialog_modal_title = _dialog_modal.find('.title'), 
			_dialog_modal_closer = _dialog_modal.find('.closer'),
			_dialog_timeout, _dialog_locked = false;
		
		_dialog
			.hide()
			.appendTo($body)
			.click(function() {
				_dialog.h5u_close();
				return true;
			});

		_dialog_modal
			.click(function(e) {
				e.stopPropagation();
			});

		_dialog_modal_closer
			.click(function(e) {
				_dialog.h5u_close();
				return false;
			});
			
		_dialog.h5u_open = function(name, title) {
			window.clearTimeout(_dialog_timeout);
			_dialog_modal_title.text(title);
			_dialog_locked = true;
			_dialog
				.fadeTo('fast', 1.0, function() {
					if (typeof FB !== 'undefined'
					&&	typeof FB.XFBML !== 'undefined')
						FB.XFBML.parse();
					_dialog_locked = false;
					_dialog_timeout = window.setTimeout(function() {
						window.location.href = '/' + name + '/download';
					}, 1500);
				});
		};
		
		_dialog.h5u_close = function() {
			if (!_dialog.is(':visible'))
				return false;

			window.clearTimeout(_dialog_timeout);
			_dialog_locked = true;
			_dialog
				.fadeTo('fast', 0, function() {
					_dialog.hide();
					_dialog_locked = false;
				});
		};

		$('.button.download').on('click', function() {
			
			var t = $(this);
			_dialog.h5u_open(t.data('name'), t.data('title'));
		
			return false;
		
		});

	// Offsite
		$('a.offsite').attr('target', '_blank');

	// Window
		$window.keydown(function(e) {
		
			switch (e.keyCode) {
				
				case 27:
					_dialog.h5u_close();
					break;
				
				default:
					break;
			
			}
		
		});

	// Share
		(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));
		(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

});