$(document).ready(function(){
  $('.bxslider').bxSlider({
  	captions: true,
  	auto: true,
  	autoControls: true
  });
});

$(".panels .tab").click(function() {
    $(".panels .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

(function($) {
    var allPanels = $('.accordion > dd').hide();
	$('.accordion > dt > a').click(function() {
	allPanels.slideUp();
	$(this).parent().next().slideDown();
	return false;
	});
})(jQuery);

$("#modal-1").click(function(){
    $('#exampleModal').arcticmodal();
});
