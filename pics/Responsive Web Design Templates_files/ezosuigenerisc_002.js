var ezosuigenerisc = 'c86cb9e74046fd74802058620ecf404b';
if(typeof ezosuigenerisc != "undefined") {
    var ezosuigeneriscDate = new Date();
    ezosuigeneriscDate.setMonth(ezosuigeneriscDate.getMonth() + 24);
    document.cookie = "ezosuigenerisc=" + ezosuigenerisc + ";expires=" + ezosuigeneriscDate.toUTCString() + ";domain="+ezdomain+";path=/";
}

function callezosuigenerisc() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "//g.ezoic.net/ezosuigenerisc.js";
    document.body.appendChild(s);
}
if (window.addEventListener) {
	window.addEventListener('load', callezosuigenerisc, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', callezosuigenerisc);
}
