(function($) {

    /* 설문조사 팝업 */
    var $pBtn = $('.poll-button');
    var $dim = $('.dim');
    var $popUp = $('.poll');
    var $cBtn = $('.close-button');

    $pBtn.click(function(){
        $dim.show();
        $popUp.show();
        $('html').css("overflow-y","hidden");
    });
    $cBtn.click(function(){
        $dim.hide();
        $popUp.hide();
        $lec1.hide();
        $lec2.hide();
        $lec3.hide();
        $lec4.hide();
        $lec5.hide();
        $lec6.hide();
        $lec7.hide();
        $lec8.hide();
        $lec9.hide();
        $lec10.hide();
        $lec11.hide();
        $('html').css("overflow-y","auto");
    });

    /* 영상 팝업 */
    var $thumb1 = $('.thumb-1'),
        $thumb2 = $('.thumb-2'),
        $thumb3 = $('.thumb-3'),
        $thumb4 = $('.thumb-4'),
        $thumb5 = $('.thumb-5'),
        $thumb6 = $('.thumb-6'),
        $thumb7 = $('.thumb-7'),
        $thumb8 = $('.thumb-8'),
        $thumb9 = $('.thumb-9'),
        $live1 = $('.live-surgery1'),
        $live2 = $('.live-surgery2-1'),
        $live3 = $('.live-surgery2-2');
    var $lec1 = $('.lecture1'),
        $lec2 = $('.lecture2'),
        $lec3 = $('.lecture3'),
        $lec4 = $('.lecture4'),
        $lec5 = $('.lecture5'),
        $lec6 = $('.lecture6'),
        $lec7 = $('.lecture7'),
        $lec8 = $('.lecture8'),
        $lec9 = $('.lecture9'),
        $lec10 = $('.lecture10'),
        $lec11 = $('.lecture11');
    
    $thumb1.click(function(){
        $dim.show();
        $lec1.show();
        $('html').css("overflow-y","hidden");
    });
    $thumb2.click(function(){
        $dim.show();
        $lec2.show();
        $('html').css("overflow-y","hidden");
    });
    $thumb3.click(function(){
        $dim.show();
        $lec3.show();
        $('html').css("overflow-y","hidden");
    });
    $thumb4.click(function(){
        $dim.show();
        $lec4.show();
        $('html').css("overflow-y","hidden");
    });
    $thumb5.click(function(){
        $dim.show();
        $lec5.show();
        $('html').css("overflow-y","hidden");
    });
    $thumb6.click(function(){
        $dim.show();
        $lec6.show();
        $('html').css("overflow-y","hidden");
    });
    $thumb7.click(function(){
        $dim.show();
        $lec7.show();
        $('html').css("overflow-y","hidden");
    });
    $thumb8.click(function(){
        $dim.show();
        $lec8.show();
        $('html').css("overflow-y","hidden");
    });
    $live1.click(function(){
        $dim.show();
        $lec9.show();
        $('html').css("overflow-y","hidden");
    });
    $live2.click(function(){
        $dim.show();
        $lec10.show();
        $('html').css("overflow-y","hidden");
    });
    $live3.click(function(){
        $dim.show();
        $lec11.show();
        $('html').css("overflow-y","hidden");
    });


})(jQuery);