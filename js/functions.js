(function($) {
 
	var $logInBtn = $('.login-button');

	function loginCheck() {
		$logInBtn.click(function(){
			if($("#input-id").val() == "test" && $("#input-pw").val() == 1234){
				location.href = 'list.html';
			} else {
				alert('id/pw가 맞지 않습니다.');
			}
			
		});
	}
	
	loginCheck();



})(jQuery);