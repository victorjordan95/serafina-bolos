var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function () {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image': 'url(' + $src + ')',
    'background-color': $color
  });
  $(this).remove();
});

$(window).on('resize', function () {
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});


//$(document).ready(function () {
//  function filterPath(string) {
//    return string
//      .replace(/^\//, '')
//      .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
//      .replace(/\/$/, '');
//  }
//  $('.slide-menu').each(function () {
//    if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
//      var $targetId = $(this.hash),
//        $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
//      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//      if ($target) {
//        var targetOffset = $target.offset().top;
//        $(this).click(function () {
//          if ($(window).width() > 200) {
//            $('html, body').animate({
//              scrollTop: targetOffset
//            }, 800);
//            return false;
//          }
//        });
//      }
//    }
//  });
//});
//$(function() {
//  $('.slide-menu').click(function(){
//    console.log("clicked " + location.hash);
//		var match = jQuery(this).attr('href').match(/#\S+/);
//		ga('send', 'pageview', location.pathname + match[0]);
//  });
//});
//
//
//$(document).ready(function () {
//   $('html, body').animate({scrollTop:target_top}, 1500, 'easeInSine');
//	$('.slide-menu').click(function(){
//        
//	});
//});

