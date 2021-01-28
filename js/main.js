var html = document.getElementsByTagName('html');
var pBtn = document.getElementById("poll-button");
var cBtn = document.querySelector('div.close-button.poll-close');
var thumbs = document.getElementsByClassName('list-thumb');
var popups = document.getElementsByClassName('newpop');
var dims = document.getElementsByClassName('dim');
var closes = document.getElementsByClassName('lectureclose');
var funcs = [];

pBtn.onclick = function(e) {
    e.preventDefault();
    console.log(document.getElementById('dimpoll'));
    document.getElementById('dimpoll').style.display = "block";
    document.querySelector('#popuppoll').style.display = "block";
    html[0].style.overflowY = "hidden";
}
cBtn.onclick = function(e) {
    e.preventDefault();
    document.getElementById('dimpoll').style.display = "none";
    document.querySelector('#popuppoll').style.display = "none";
    html[0].style.overflowY = "scroll";
}

function Modal(num) {
    return function() {
        thumbs[num].onclick = function(e) {
            e.preventDefault();
            dims[num].style.display = "block";
            popups[num].style.display = "block";
            popups[num].style.overflowX = "hidden";
            html[0].style.overflowY = "hidden";
        }
        closes[num].onclick = function(e) {
            e.preventDefault();
            dims[num].style.display = "none";
            popups[num].style.display = "none";
            html[0].style.overflowY = "scroll";
        }
    }
}

for (var i = 0; i < thumbs.length; i++) {
    funcs[i] = Modal(i);
}
for (var j = 0; j < closes.length; j++) {
    funcs[j]();
}
