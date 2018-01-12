
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(function() {
  console.log('jquery works');
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    // alert('Its Safari');
    $('.c-callout-hidden').css({
      transform: translateY(0)
    })
  } else {

    // show & hide callout
    let prev = 30;
    const $window = $(window);
    const el = $('#c-callout');

    $window.on('scroll', () => {
      let scrollTop = $window.scrollTop();
          el.toggleClass('c-callout-hidden', scrollTop > prev);
          prev =  scrollTop;
    });


  }




});
