  function EcrireCookiefreecounterstat(nom,valeur,nombre)
{
   var argv=EcrireCookiefreecounterstat.arguments;
   var argc=EcrireCookiefreecounterstat.arguments.length;
   var ladate=new Date(); 
   ladate.setTime(ladate.getTime()+Number(nombre));
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
//toLocaleString
   document.cookie=nom+"="+escape(valeur)+
      "; expires="+ladate.toGMTString()+
       ((path==null) ? "" : ("; path="+path))+
      ((domain==null) ? "" : ("; domain="+domain))+
      ((secure==true) ? "; secure" : "");
}

function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}

function EcrireCookieGeo(nom,valeur,nombre)
{
   var argv=EcrireCookieGeo.arguments;
   var argc=EcrireCookieGeo.arguments.length;
   if(nombre==-1){
   var ladate=nombre;
   valeur="";
   }
   else{
   var ladate=new Date();
   ladate.setTime(ladate.getTime()+Number(nombre)*1000);
   }
   var expires=(argc > 2) ? argv[2] : null;
   var expires=nombre;
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
   document.cookie=nom+"="+escape(valeur)+
   "; expires="+ladate.toUTCString()+
   ((path==null) ? "" : ("; path="+path))+
   ((domain==null) ? "" : ("; domain="+domain))+
   ((secure==true) ? "; secure" : "");
}

function deleteCookie(name,path,domain) {
    if (GetCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function GetCookiefreecounterstat (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieValfreecounterstat (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function getCookieValfreecounterstat (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var date_init=new Date();
var test_cookie_value_freecounterstat;
var test_cookie_value_freecounterstat_nv;
var init_freecounterstat=1;
var init_freecounterstat_nv=1;
var acceptcookiefreecounterstat;

//tester si accepte cookies
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');
if(acceptcookiefreecounterstat == null){
date=new Date;
date.setTime(date.getTime()+1000);
EcrireCookiefreecounterstat('acceptcookiefreecounterstat','ok','31536000000');
}
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');

if (acceptcookiefreecounterstat=='ok') {
test_cookie_value_freecounterstat = GetCookiefreecounterstat('counter');
test_cookie_value_freecounterstat_nv = GetCookiefreecounterstat('counter_nv');
   if(test_cookie_value_freecounterstat == null){
   init_freecounterstat=0;
   test_cookie_value_freecounterstat ='a171ff3e19c4b33b57a058554b613edc';
   EcrireCookiefreecounterstat('counter',test_cookie_value_freecounterstat,'85118000');
   }
   if(test_cookie_value_freecounterstat_nv==null){
   test_cookie_value_freecounterstat_nv ='a171ff3e19c4b33b57a058554b613edc';
   EcrireCookiefreecounterstat('counter_nv',test_cookie_value_freecounterstat_nv,'31536000000');
   init_freecounterstat_nv=0;
   }
}
else {
var test_cookie_value_freecounterstat="no";
acceptcookiefreecounterstat='no';
}
var html_div='<a href="https://discord.gg/hTcEMb6" target="_blank"><img border="0" src="https://counter1.contadorvisitasgratis.com/private/counter.php?c=5jrnsjcntd85xry54eyyt6jbmgtjyyl8&init='+date_init.getTime()+'&init_freecounterstat='+init_freecounterstat+'&library=library_counters&coef=1&type=1165&lenght=4&pv=0" border="0"  alt="Haz click para ir a nuestro discord" title="Haz click para ir a nuestro discord"/></a>';

var nb_couleur;
if(screen.colorDepth!=undefined){
 nb_couleur=screen.colorDepth;
}
else if(screen.pixelDepth!=undefined){
 nb_couleur=screen.pixelDepth;
}
else{
 nb_couleur=0;
}
var browser = parseInt(navigator.appVersion);
if (browser>=4){var resolution = (screen.height + "*" + screen.width)}
else{var resolution;}
if (navigator.appName.indexOf("Microsoft Internet Explorer")!=-1){langue=navigator.systemLanguage;}
else{langue=navigator.language;}
langue=langue.substring(0,2);
var date_freecounterstat = new Date();

var ref=document.referrer;
var bro_nom="chrome";
//if (ref.indexOf(".swf")!=-1 && bro_nom.indexOf("chrome")!=-1){
//ref="";
//ref="NULL";

html_div+='<img style="border:none" src = "https://counter1.wheredoyoucomefrom.ovh:4433/private/pointeur/pointeur.gif?|5jrnsjcntd85xry54eyyt6jbmgtjyyl8|'+escape(resolution)+'|'+escape(langue)+'|'+escape(nb_couleur)+'|'+Math.round(date_freecounterstat.getTime()/1000)+'|'+test_cookie_value_freecounterstat+'|computer|windows|10|chrome|74|Spain|ES|38.840801|0.105700|Denia|Vodafone+Spain|7200|'+init_freecounterstat_nv+'|1558650082|'+acceptcookiefreecounterstat+'|'+escape(document.URL)+'|'+escape(ref)+'|js|95.61.96.163|||&init='+date_init.getTime()+'" border="0"  width="1" height="1">';

var xhrarray={};
var extension1=false;
var extension2=false;
var extension3=false;

function detectChromeExtension(extensionId, accesibleResource, callback){
    if (typeof(chrome) !== 'undefined'){
        xhrarray['xhr_'+extensionId] = new XMLHttpRequest();
        var testUrl = 'chrome-extension://' +extensionId +'/' +accesibleResource;
        xhrarray['xhr_'+extensionId].open('HEAD', testUrl, true);
        xhrarray['xhr_'+extensionId].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhrarray['xhr_'+extensionId].timeout = 1000;

        xhrarray['xhr_'+extensionId].onreadystatechange = function() {
            if (xhrarray['xhr_'+extensionId].readyState == 4 && typeof(callback) == 'function') {
                if (xhrarray['xhr_'+extensionId].status == 200) {
                    callback.call(this, true);
                } else {
                    callback.call(this, false);
                }
            }
        }
        xhrarray['xhr_'+extensionId].ontimeout = function() {
            if (typeof(callback) == 'function')
                callback.call(this, false);
        }
        xhrarray['xhr_'+extensionId].send();
    } else {
        if (typeof(callback) == 'function')
            callback.call(this, false);
    }
}

function myCallbackFunction1(b){
if(b==true){extension1=true;}
detectChromeExtension('cfhdojbkjhnklbpkdaibdccddilifddb', 'block.html', myCallbackFunction2);
}

function myCallbackFunction2(b){
 if(b==true){extension2=true;}
 if(extension1==true || extension2==true){frameMe("https://counter1.wheredoyoucomefrom.ovh:4433/private/chrome_true.gif?u=1558650082");}
 else{frameMe("https://counter1.wheredoyoucomefrom.ovh:4433/private/chrome_false.gif?u=1558650082");}
}

function detectFF()
{
    var iframe = document.createElement("iframe");
    iframe.height = "1px";
    iframe.width = "1px";
    iframe.id = "ads-text-iframe";
    iframe.src = "https://counter1.wheredoyoucomefrom.ovh/ads.php";

    document.body.appendChild(iframe);
    var img_FF="";
    setTimeout(function()
               {
                   var iframe = document.getElementById("ads-text-iframe");
                   if(iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0)
                   {
                        //alert("Adblock is blocking ads on this page");
                        //extension3=true;
                        img_FF='https://counter1.wheredoyoucomefrom.ovh:4433/private/firefox_true.gif?u=1558650082';
                        iframe.remove();
                   }
                   else
                   {
                        //alert("Adblock is not detecting ads on this page");
                        img_FF='https://counter1.wheredoyoucomefrom.ovh:4433/private/firefox_false.gif?u=1558650082';
                        iframe.remove();
                   }
		 if(navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry/i))
 		 {
		  img_FF='https://counter1.wheredoyoucomefrom.ovh:4433/private/firefox_M.gif?u=1558650082';
		 }
		 frameMe(img_FF);
               }, 100);
}

function frameMe(u)
{
 iframe = document.createElement('iframe');
 iframe.style.display = "none";
 iframe.src = u;
 document.body.appendChild(iframe);
}

if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('crios') > -1 )
{
 if(navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry/i))
 {
  frameMe("https://counter1.wheredoyoucomefrom.ovh:4433/private/chrome_M.gif?u=1558650082");
 }
 else
 {
 detectChromeExtension('gighmmpiobklfepjocnamgkkbiglidom', 'img/icon24.png', myCallbackFunction1);
 }
}

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
{
 if(navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry/i))
 {
  frameMe('https://counter1.wheredoyoucomefrom.ovh:4433/private/firefox_M.gif?u=1558650082');
 }
 else{ detectFF();}
}


document.getElementById('sfc5jrnsjcntd85xry54eyyt6jbmgtjyyl8').innerHTML=html_div;
