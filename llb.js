// ==UserScript==
// @name         Match Like Bot
// @description  Lovoo match vote like bot (Hit the ‘L’ key to start and 'Up Arrow' to stop)
// @icon	https://www.lovoo.com/favicon.ico
// @include        *://*lovoo.com/*
// @author	Scriptz
// @grant	unsafeWindow
// @noframes
// @license Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License; http://creativecommons.org/licenses/by-nc-nd/3.0/
// ==/UserScript==

// ==L==
document.onkeydown= openPage ;
function openPage(e) {
e= window.event ? event : e;
    if (e.keyCode == 76 ) {
        if(window.location.href === "https://www.lovoo.com/match") {
        console.warn("Match Like Bot starts in 5 seconds");
        document.getElementsByClassName("fa fa-heart padding-md lo-down-05")[0].click();
var start;
start = setTimeout(function(){console.warn("► Started.");}, 5000);
// ==============

// ==Code==
        var loop;
loop = setInterval(function(){
    if(window.location.href === "https://www.lovoo.com/match") {
setTimeout(function(){document.getElementsByClassName("fa fa-heart padding-md lo-down-05")[0].click();console.info("Voted");console.debug("%c+1", "font-size: 2em;");}, 4000);
    var vipalert = document.getElementsByClassName('close');
if (vipalert.length > 0) {
setTimeout(function(){document.getElementsByClassName('close')[0].click();console.info('Closed Payment Required');}, 3000);
}}else{clearTimeout(start);clearInterval(loop);console.clear();console.warn('You left https://www.lovoo.com/match\nMatch Like Bot was stopped!');}
    }, 5000);
// ==Stop==
            } else {console.info('move to https://www.lovoo.com/match');}
    }
    unsafeWindow.stop = function() {
        window.location = 'https://www.lovoo.com/';alert('You left https://www.lovoo.com/match\nMatch Like Bot was stopped!');
        };
    if (e.keyCode == 38 ) {
            unsafeWindow.stop();
    }
}
