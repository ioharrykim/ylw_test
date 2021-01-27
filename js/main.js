    var html = document.getElementsByTagName('html');
    var thumbs = document.getElementsByClassName('list-thumb');
    var popups = document.getElementsByClassName('newpop');
    var dims = document.getElementsByClassName('dim');
    var closes = document.getElementsByClassName('btn-color');
    var funcs = [];

    function Modal(num) {
        return function() {
            thumbs[num].onclick = function() {
                // console.log('클릭');
                dims[num].style.display = "block";
                popups[num].style.display = "block";
                html[0].style.overflowY = "hidden";
                // console.log(num);
            }

            closes[num].onclick = function() {
                // console.log('닫기 클릭');
                dims[num].style.display = "none";
                popups[num].style.display = "none";
                html[0].style.overflowY = "scroll";
            }
        }
    }

    for (var i = 0; i < thumbs.length; i++) {
        funcs[i] = Modal(i);
    }
    for (var j = 0; j < thumbs.length; j++) {
        funcs[j]();
    }