document.getElementsByClassName('poll-button')[0].addEventListener('click', function() {
    console.log('클릭');
	var popUp = document.getElementsByClassName('popup');
    for (var i=0; i<popUp.length; i+=1){
    popUp[i].style.display = 'block';
}
});

document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
    console.log('닫기 클릭');
	var popUp = document.getElementsByClassName('popup');
    for (var i=0; i<popUp.length; i+=1){
    popUp[i].style.display = 'none';
}
});