(function($) {

    /* 설문조사 팝업 */
    var $pBtn = $('.poll-button');
    var $popUp = $('.poll');

    $pBtn.click(function(){
        console.log('클릭');
        $('.dimpoll').show();
        $popUp.show();
        $('html').css("overflow-y","hidden");
    });
    $('.poll-close').click(function(){
        $('.dimpoll').hide();
        $popUp.hide();
        $('html').css("overflow-y","scroll");
    });

})(jQuery);