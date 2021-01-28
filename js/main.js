var html = document.getElementsByTagName('html');
var pBtn = document.getElementById("poll-button");
var cBtn = document.querySelector('div.close-button.poll-close');
var thumbs = document.getElementsByClassName('list-thumb');
var popups = document.getElementsByClassName('newpop');
var vimeoVid = document.getElementsByClassName('vimeo-vid');
var dims = document.getElementsByClassName('dim');
var closes = document.getElementsByClassName('lectureclose');
var funcs = [];

/* vimeo video 배열 */
var vidSrc = ['https://player.vimeo.com/video/504171289', 'https://player.vimeo.com/video/504112169', 'https://player.vimeo.com/video/504111975', 'https://player.vimeo.com/video/502451885', 'https://player.vimeo.com/video/504111827', 'https://player.vimeo.com/video/504111676', 'https://player.vimeo.com/video/502923496', 'https://player.vimeo.com/video/504675801', 'https://player.vimeo.com/video/504173835', 'https://player.vimeo.com/video/504242165', 'https://player.vimeo.com/video/504244613'];
// for(var k = 0; k < vidSrc.length; k++){
//     console.log(vidSrc[k]);
// }

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
            vimeoVid[num].setAttribute('src', vidSrc[num]);
            html[0].style.overflowY = "hidden";
        }
        closes[num].onclick = function(e) {
            e.preventDefault();
            dims[num].style.display = "none";
            popups[num].style.display = "none";
            vimeoVid[num].removeAttribute('src');
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
