
menu1.addEventListener('click',function() {  
          sider.style.opacity="1"
          sider.style.position="absolute"
          sider.style.transition="1s"
          sider.style.transform="translateX(0%)"
          menu1.style.display="none"
          menu2.style.display="block"
      });
menu2.addEventListener('click',function() {
    sider.style.transform="translateX(100%)"
    menu1.style.display="block"
    menu2.style.display="none"
    var x =  setTimeout(function() {
        sider.style.opacity="0"
    }, 100);
})
function umur(){
    let y_Footer = document.getElementsByTagName('T')[0];
    let now = new Date();
    let year = now.getFullYear();
    let birthdayYear = 2005;
    let result = year - birthdayYear;
    age.style.transition="1s";
    age.style.opacity="1";
    // change href on id age 
    age.href=("https://google.com/search?q=ulang+tahun+ke+"+result+"+tahun")
    age.innerHTML=(result);
    y_Footer.innerHTML=new Date().getFullYear();
}
setTimeout(umur,1000)
rem.addEventListener('click',function(){
    conme.style.display="none"
})
call_conme.addEventListener('click',function(){
    conme.style.display="block"
})


// mematikan klik kanan
var message="Function Disabled";
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")