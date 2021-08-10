// 햄버거 메뉴버튼 
function openNav() {
    document.getElementById('navicon_upper').style = "animation:naviconUpperAni 0.8s forwards";
    document.getElementById('navicon_inner').style = "animation:naviconInnerAni 0.8s forwards";
    document.getElementById('navicon_lower').style = "animation:naviconLowerAni 0.8s forwards";
    document.getElementById('navicon_upper_m').style = "animation:naviconUpperAni 0.8s forwards";
    document.getElementById('navicon_inner_m').style = "animation:naviconInnerAni 0.8s forwards";
    document.getElementById('navicon_lower_m').style = "animation:naviconLowerAni 0.8s forwards";
}

function closeNav() {
    document.getElementById('navicon_upper').style = "animation:w_naviconUpperAniR 0.8s forwards";
    document.getElementById('navicon_inner').style = "animation:w_naviconInnerAniR 0.8s forwards";
    document.getElementById('navicon_lower').style = "animation:w_naviconLowerAniR 0.8s forwards";
    document.getElementById('navicon_upper_m').style = "animation:naviconUpperAniR 0.8s forwards";
    document.getElementById('navicon_inner_m').style = "animation:naviconInnerAniR 0.8s forwards";
    document.getElementById('navicon_lower_m').style = "animation:naviconLowerAniR 0.8s forwards";
}

var navicon = document.querySelector(".navicon");
var naviconM = document.querySelector(".navicon_m");
var gnb = document.getElementById('gnb');
var main =  document.getElementById('main');
var footer = document.getElementById('footer');

navicon.addEventListener("click", function() {
    this.classList.toggle("is-active");
        if (this.classList.contains('is-active')){
            openNav();
            document.querySelector('.cursor').style = "display:block"
            gnb.style = "animation: gnbSlide 0.8s forwards"
            document.getElementsByClassName('nav_cir')[0].style ="opacity:0;"
            document.querySelector('.cursor').style = "display:block"
        } else {
            closeNav();
            gnb.style = "animation: gnbSlideR 0.8s forwards"
            document.getElementsByClassName('nav_cir')[0].style ="opacity:1;"
            document.querySelector('.cursor').style = "display:none"
        }
});

naviconM.addEventListener("click", function() {
    this.classList.toggle("is-active");
        if (this.classList.contains('is-active')){
            openNav();
            // main.style = "display:none;"
            footer.style = "display:none;"
            gnb.style = "animation: gnbPopUp 0.8s forwards"
        } else {
            closeNav();
            // main.style = "display:block;"
            footer.style = "display:flex"
            gnb.style = "animation: gnbDisappear 0.8s forwards"
        }
})




    var presentScrollPosition = 0;

    var previewScrollPosition = 0;
    
    
    window.onscroll = function(){
    
        console.log(window.pageYOffset);
    
        previewScrollPosition = presentScrollPosition;
    
        presentScrollPosition = window.pageYOffset;
    
        scrollMove = presentScrollPosition - previewScrollPosition;
    
    if(navicon.classList.contains('is-active')){
      return;
    } else if (scrollMove > 0) {
    
            if (presentScrollPosition > 100) {
    
                document.getElementById('nap').style = "opacity:0;"
            }
    
        } else if(window.pageYOffset == 0){
                document.getElementById('nap').style = "opacity:0;"
        } else{
                document.getElementById('nap').style = "opacity:1;"
        }
    }
    



// 상단메뉴 스크롤시

// var title = document.getElementsByClassName("work_page_title");
// var titleH1 = document.getElementsByClassName('work_page_h1');

// window.onscroll = function(){workChange()};
    
//     function workChange() {
//       console.log (document.body.scrollTop)
//       if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//             title[0].classList.add("titleChange");
//             titleH1[0].style = "margin: 0;"
//       }else{
//             title[0].classList.remove("titleChange");
//             titleH1[0].style = "margin: 0 0 15px 0;"
//         }
// };

// 컨텐츠 마우스오버


var workContent = document.querySelector('.work_cotent');

function fadeIn(selectedContent){
    document.getElementsByClassName('img_gradient')[selectedContent].style = "opacity:1;"
    document.getElementsByClassName('content_title_wrap')[selectedContent].style = "height:17%;"
    document.getElementsByClassName('content_title')[selectedContent].style = "opacity:1;"

}

function fadeOut(selectedContent){
    document.getElementsByClassName('img_gradient')[selectedContent].style = "opacity:0;"
    document.getElementsByClassName('content_title_wrap')[selectedContent].style = "height:0%;"
    document.getElementsByClassName('content_title')[selectedContent].style = "opacity:0;"

}



function hi(){
    document.getElementsByClassName('say_hi')[0].style = "top:10px; opacity:0;"
    document.getElementsByClassName('say_bye')[0].style = "top:0px; opacity:1;"
  }
  
  function bye(){
    document.getElementsByClassName('say_hi')[0].style = "top:0px; opacity:1;"
    document.getElementsByClassName('say_bye')[0].style = "top:10px; opacity:0;"
  }
  



//   (function (){

//     const link = document.querySelectorAll('#gnb > .hover-this');
//     const cursor = document.querySelector('.cursor');

//     const animateit = function(e) {
//         const span = this.querySelectorAll('.gnb_menu a');
//         const { offsetX: x, offsetY: y} = e,
//         {offsetWidth: width, offsetHeight: height} = this,

//         move =25,
//         xMove = x / width * (move * 2) - move,
//         yMove = y / width * (move * 2) - move;

//         span.style.transform  = 'translate(${xMove}px, ${xMove}px)';

//         if (e.type === 'mouseleave') span.style.transform =  ' ';
//     };

//     const editCursor = e => {
//         const { clientX : x, clientY: y } =e;
//         cursor.style.left = x + 'px';
//         cursor.style.top = y + 'px';
//     };

//     link.forEach(b => b.addEventListener('mousemove', animateit));
//     link.forEach(b => b.addEventListener('mouseleave', animateit));
//     window.addEventListener('mousemove', editCursor);

//   })();


var cursor = document.querySelector('.cursor');
var cursorView = document.querySelector('.view_cursor');
var works = document.querySelector('works');


document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top= e.pageY + 'px';
})

// document.addEventListener('mousemove', function(e){
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top= e.pageY + 'px';
// })


var works = document.querySelector('works');

document.addEventListener('mouseover', (t) => {
    cursorView.style.left = t.pageX + 'px';
    cursorView.style.top= t.pageY + 'px';
})

// navicon.addEventListener("click", function() 

// works.addEventListener("onmouseenter", function(){
//     cursorView.style.left = e.pageX + 'px';
//     cursorView.style.top= e.pageY + 'px';
// })



// function woo(e){
//     cursorView.style.left = e.pageX + 'px';
//     cursorView.style.top = e.pageY + 'px';
//     cursorView.style = "display:block;"

// }

// works.addEventListener('mouseover', (e) => {
//     cursorView.style.left = e.pageX + 'px';
//     cursorView.style.top= e.pageY + 'px';
// })