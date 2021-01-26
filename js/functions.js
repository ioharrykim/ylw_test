(function($) {
 
	var $idVal = $('#input-id').val();
	var $pwVal = $('#input-pw').val();
	var $logInBtn = $('.login-button');

	function loginCheck() {
		$logInBtn.click(function(){
			if(($idVal = "test") && ($pwVal = 1234)){
				location.href = 'list.html';
			} else {
				alert('id/pw가 맞지 않습니다.');
			}
		});
	}
	
	loginCheck();



})(jQuery);