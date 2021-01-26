console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        
        var $pBtn = $('.poll-button');
        var $dim = $('.dim');
        var $popUp = $('.popup');
        var $cBtn = $('.close-button');

        $pBtn.click(function(){
            console.log("버튼 클릭");
            $dim.show();
            $popUp.show();
            $('html').css("overflow-y","hidden");
        });
        $cBtn.click(function(){
            console.log("닫기 버튼");
            $dim.hide();
            $popUp.hide();
            $('html').css("overflow-y","auto");
        });

        
    });
})(jQuery);
