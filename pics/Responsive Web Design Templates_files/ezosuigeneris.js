var ezosuigeneris = '25e1ca3f400d625a805937ee38bb8af3';
if(typeof ezosuigeneris != "undefined") {
    var ezosuigenerisDate = new Date();
    ezosuigenerisDate.setMonth(ezosuigenerisDate.getMonth() + 24);
    document.cookie = "ezosuigeneris=" + ezosuigeneris + ";expires=" + ezosuigenerisDate.toUTCString() + ";domain="+ezdomain+";path=/";
}

function callezosuigeneris() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "//g.ezoic.net/ezosuigeneris.js";
    document.body.appendChild(s);
}
if (window.addEventListener) {
	window.addEventListener('load', callezosuigeneris, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', callezosuigeneris);
}
