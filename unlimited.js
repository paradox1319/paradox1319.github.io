menu1.addEventListener('click',function(){
          sider.style.opacity="1";
          sider.style.position="absolute";
          sider.style.transition="1s";
          sider.style.transform="translateX(0%)"
          menu1.style.display="none"
          menu2.style.display="block";
          $("#menu2").addClass("animate__animated animate__lightSpeedInRight")
          $(".slider ul li").addClass("animate__animated animate__slideInRight");
      });
      
menu2.addEventListener('click',function() {
    sider.style.transform="translateX(100%)";
    //sider.style.transform="translateY(-100%)";
    menu1.style.display="block";
    menu2.style.display="none";
    $(".slider ul li").removeClass("animate__animated animate__slideInRight");
    var x =  setTimeout(function() {
        sider.style.opacity="0";
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

$("#mobile-nav a").on("click",function(){
  $("#mobile-nav a").removeClass("link-active");
  $(this).addClass("link-active");
  sider.style.transform="translateX(100%)";
    menu1.style.display="block";
    menu2.style.display="none";
    var x =  setTimeout(function() {
        sider.style.opacity="0";
    }, 100);
})
/*
function show(){
  $(".hobby").css("opacity", 1);
  $(".profile").css("opacity", 1);
  setTimeout(() => {
    $(".skill").css("opacity", 1);
  }, 1000)
  setTimeout(() => {
    $(".portfolio").css("opacity", 1);
  }, 2500)
  setTimeout(() => {
    $(".contact").css("opacity", 1);
  }, 3500)
}
$(".hobby").css("opacity",0);
$(".skill").css("opacity",0);
//$(".profile").css("opacity",0);
$(".contact").css("opacity",0);
$(".portfolio").css("opacity",0);
$(document).on("scroll",function(){
  show();
})
*/
//setTimeout(show,1500)
$(document).ready(function(){
  let elemA = document.querySelectorAll("a");
  for(let i = 15; i <= 27; i++){
    let thisInner = elemA[i].innerHTML;
    elemA[i].setAttribute("href",`https://google.com/search?q=${thisInner}`);
  }
  
})

// dark mode
function darkMode(isDark){
  $(".darkMode .des").css("opacity",1);
  $(".darkMode .des").css("transform","translate(100% 10px)");
  //$(".darkMode .des").css("transform","translateY(10px)");
  setTimeout(() => {
  $(".darkMode .des").css("transform","translate(0% 0px)");
  //$(".darkMode .des").css("transform","translateY(0px)");
  setTimeout(() => {
    $(".darkMode .des").css("opacity",0);
  },200)
  },800)
  if(isDark){
    $("body").css("background-color","grey");
    
    $("h1,h3,nav,.slider,section,section p:not(#region),section div:not(.pj),.hobby form,input,textarea,label, select,form,a:not(ul li a,.pj a)").css("background-color","#000");
    // set color
    $("nav,body,.slider,section,p,a").css("color","#fff");
  // $(".items").css("border","solid 3px #fff")
   $(".zebra select,.zebra h1,.zebra,.zebra p:not(#region),.zebra a,.zebra div, .zebra form,.zebra,.zebra input,.zebra label,.zebra textarea,.skill img").css("background-color","lightgrey");
   $(".zebra h1:not(#tagDiary),.zebra select,.zebra p,.zebra div,.zebra a").css("color","#000")
   //$("section:not(.zebra) h1,section h3").css("color","#fff");
   $("section a").css("color","salmon")
   //$(".items a").css("background-color","yellow")
   $(".darkMode").attr("onclick",`darkMode(${false})`);
   $(".darkMode").removeClass("moon");
   $(".darkMode").addClass("sun");
  }else{
    $(".slider,nav h1,body,nav,.slider").css("background-color","#129EFF");
    $(".slider a").css("background-color","#129EFF");
    $(".zebra,.zebra *:not(#region,button)").css("background-color","#21E8AC");
    $(".zebra p").css("color","#000");
    $("nav,body,.slider,section,p,a").css("color","#000");
    $("footer p").css("color","#fff")
    $("a").css("color","salmon")
    $("nav h1").css("color",",#fff")
    $("#tagDiary").css("color","#129EFF");
    $("section:not(.zebra),section:not(.zebra) *,section h3").css("background-color","#fff");
    $("section:not(.zebra),section:not(.zebra) *").css("color","#000");
    //$(".items").css("border","solid 3px #555")
    $(".contact button").css("background-color","salmon");
    $("a,.contact *:not(h1,button)").css("color","salmon")
    $(".darkMode").attr("onclick",`darkMode(${true})`);
    $(".darkMode").removeClass("sun");
   $(".darkMode").addClass("moon");
  }
}
$(".darkMode").attr("onclick",`darkMode(${true})`)
// change color
$("body,nav,.slider").css("background-color","#129EFF")
$(".zebra,.zebra *:not(#region,button)").css("background-color","#21E8AC");
$(".zebra p").css("color","#000");
$("input").attr("required");
$("#tagDiary").css("color","#129EFF");
$(".items").css("border","none")
$("img").on("click",function(){
  window.location.href=this.src;
})
/*
$(document).ready(function() {
	$("#lazyScrollLoading").lazyScrollLoading({
		lazyItemSelector : ".hobby",
		onLazyItemFirstVisible : function(e, $lazyItems, $firstVisibleLazyItems) {
			$firstVisibleLazyItems.each(function() {
				this.innerHTML = this.getAttribute("lazy-text");
			});
		}
	});
});
*/