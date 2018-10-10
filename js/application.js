$(document).ready(function () {
    $('.j-expand').click(function(){
        $(this).toggleClass('act');
        $(this).next('.j-expand_not').toggleClass('active');
    });
    $('a, button').click(function(event){
        event.preventDefault();
    });
});
