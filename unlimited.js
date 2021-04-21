
menu1.addEventListener('click',function() {  
          sider.style.display="block"
          sider.style.position="absolute"
          sider.style.transition="0.9s"
          sider.style.transform="translateX(0%)"
          menu1.style.display="none"
          menu2.style.display="block"
      });
menu2.addEventListener('click',function() {
    sider.style.transform="translateX(100%)"
    menu1.style.display="block"
    menu2.style.display="none"
      setTimeout(function() {
        sider.style.display="none"
    }, 900);
})
function umur(){
    let now = new Date()
    let year = now.getFullYear()
    let birthdayYear = 2005
    let result = (year - birthdayYear+" Tahun")
    document.getElementById('age').innerHTML = result
}
umur();
rem.addEventListener('click',function(){
    conme.style.display="none"
})
call_conme.addEventListener('click',function(){
    conme.style.display="block"
})

function tes(){
    null
}