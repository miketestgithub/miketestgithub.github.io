;(function($) {
     // DOM Ready
    $(function() {
        $('.j-selectable').click(function(){
            $(this).toggleClass('j-active');
        });
        $('.j-link_buy').click(function(){
            $(this).parent().parent().find('.j-selectable').toggleClass('j-active');
        });
    });

})(jQuery);