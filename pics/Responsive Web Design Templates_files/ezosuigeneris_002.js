var ezosuigeneris = '25e1ca3f400d625a805937ee38bb8af3';
if(typeof ezosuigeneris != "undefined") {
    var ezosuigenerisDate = new Date();
    ezosuigenerisDate.setMonth(ezosuigenerisDate.getMonth() + 24);
    document.cookie = "ezosuigeneris=" + ezosuigeneris + ";expires=" + ezosuigenerisDate.toUTCString() + ";domain="+ezdomain+";path=/";
}
