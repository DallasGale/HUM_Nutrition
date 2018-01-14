
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




// jQuery below
$(function() {
  console.log('jquery works');

  // safari bug with show & hide ...if / else browser is safari
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

    console.log('Its Safari');

  } else {

    // show & hide callout
    let prev = 30;
    var $window = $(window);
    const el = $('#c-callout');

    $window.on('scroll', () => {
      let scrollTop = $window.scrollTop();
          el.toggleClass('c-callout-hidden', scrollTop > prev);
          prev =  scrollTop;
    });
  }


    // add bootstrap grid class to magazine logos <li> for mobile

    var $window = $(window);

    var refinery = $('#refinery-magazine'),
        us = $('#us-magazine'),
        bazaar = $('#bazzar-magazine'),
        nylon = $('#nylon-magazine'),
        coveteur = $('#coveteur-magazine'),
        mclair = $('#mclaire-magazine');

    var mobileClasss = () => {
        var refineryMb = refinery.addClass('col-xs-2');
        var usMb = us.addClass('col-xs-4');
        var bazaarMb = bazaar.addClass('col-xs-6');
        var nylonMb = nylon.addClass('col-xs-6');
        var coveteurMb = coveteur.addClass('col-xs-6');
        var mclairMb = mclair.addClass('col-xs-12');
        return [
          refineryMb,
          usMb,
          bazaarMb,
          nylonMb,
          coveteurMb,
          mclairMb
        ]
    };

    $window.resize(function resize() {
      if ($window.width() < 768) {
          console.log('< 768');
          return mobileClasss();

      }
        refinery.removeClass('col-xs-2'),
        us.removeClass('col-xs-4'),
        bazaar.removeClass('col-xs-6'),
        nylon.removeClass('col-xs-6'),
        coveteur.removeClass('col-xs-6'),
        mclair.removeClass('col-xs-12');
    }).trigger('resize');




});
