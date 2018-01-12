$(document).ready( () => {
  console.log('jquery works');

  // show & hide callout
  let prev = 0;
  const $window = $(window);
  const el = $('#c-callout');

  $window.on('scroll', () => {
    let scrollTop = $window.scrollTop();
        el.toggleClass('c-callout-hidden', scrollTop > prev);
        prev =  scrollTop;
  });
});
