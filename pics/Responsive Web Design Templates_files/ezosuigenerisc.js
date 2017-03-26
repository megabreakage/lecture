var ezosuigenerisc = 'c86cb9e74046fd74802058620ecf404b';
if(typeof ezosuigenerisc != "undefined") {
    var ezosuigeneriscDate = new Date();
    ezosuigeneriscDate.setMonth(ezosuigeneriscDate.getMonth() + 24);
    document.cookie = "ezosuigenerisc=" + ezosuigenerisc + ";expires=" + ezosuigeneriscDate.toUTCString() + ";domain="+ezdomain+";path=/";
}
