(function($) {
 
	var $logInBtn = $('.login-button');

	$logInBtn.click(function(){
		if($("#input-id").val() == "shinhung" && $("#input-pw").val() == 0000){
			location.href = 'list.html';
		} else {
			alert('ID / PW 가 맞지 않습니다.');
		}
	});

})(jQuery);