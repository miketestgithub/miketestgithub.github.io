var slyelement = {
  obj: {},
  el: '.frame',
  options: {
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'swing', // easeInOutElastic, easeOutBounce
    scrollBar: $('.scrollbar')
  }
};


$(function(){
  slyelement.obj = new Sly($(slyelement.el), slyelement.options);
  
  slyelement.obj.init();
});

$(window).resize(function(e) {
  slyelement.obj.reload();
});



$(document).ready(function() {
  $(".tl-item").click(function () {
    if (!$(this).hasClass('service__item-active')) {
    $(this).addClass('service__item-active');
    $('#pageslider__nav, .btn__wraper--order, .tl-content__txt').fadeOut();
    $('.tl-content-more').fadeIn()
} else {
    $(this).removeClass('service__item-active');
    $('#pageslider__nav, .btn__wraper--order, .tl-content__txt').fadeIn();
    $('.tl-content-more').hide()    
}
  });
});





$(document).ready(function() {
  $('.modal-content__open-btn').click(function () {
    $('.modal-content').addClass('modal-content--show');
    $('.body-scroll').addClass('body-no-scroll');
    $('.body-scroll').removeClass('body--scroll');
  });
});

$(document).ready(function() {
  $('.modal-content__close-btn').click(function () {
    $('.modal-content').removeClass('modal-content--show');
    $('.body-scroll').removeClass('body-no-scroll');
    $('.body-scroll').addClass('body--scroll');
  });
});
