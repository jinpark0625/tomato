// 뷰버튼



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




    if (window.scrollY > 100) {
      document.getElementById("content").style = "transform: scaleX(1)";
      document.getElementsByClassName('scroll_down_btn')[0].style = "transform: translateY(-200%); opacity:0;"
    } else{
      document.getElementById("content").style = "transform: scaleX(0.7)";
      document.getElementsByClassName('scroll_down_btn')[0].style = "transform: translateY(0%); opacity:1;"
    }

}


// 햄버거 메뉴버튼 
function openNav() {
  document.getElementById('navicon_upper').style = "animation:naviconUpperAni 0.8s forwards";
  document.getElementById('navicon_inner').style = "animation:naviconInnerAni 0.8s forwards";
  document.getElementById('navicon_lower').style = "animation:naviconLowerAni 0.8s forwards";
}

function closeNav() {
  document.getElementById('navicon_upper').style = "animation:naviconUpperAniR 0.8s forwards";
  document.getElementById('navicon_inner').style = "animation:naviconInnerAniR 0.8s forwards";
  document.getElementById('navicon_lower').style = "animation:naviconLowerAniR 0.8s forwards";
}

var navicon = document.querySelector(".navicon");
var gnb = document.getElementById('gnb');
var main =  document.getElementById('main');
var footer = document.getElementById('footer');

navicon.addEventListener("click", function() {
  this.classList.toggle("is-active");
      if (this.classList.contains('is-active')){
          openNav();
          // main.style = "display:none;"
          // footer.style = "display:none;"
          gnb.style = "animation: gnbSlide 0.8s forwards"
          document.getElementById('nap').style = "opacity:1;"
          document.querySelector('.cursor').style = "opacity:1;"


      } else {
          closeNav();
          // main.style = "display:block;"
          // footer.style = "display:flex"
          gnb.style = "animation: gnbSlideR 0.8s forwards"
          document.querySelector('.cursor').style = "opacity:0;"
      }
  })

// function viewContent() {

//   if (window.scrollY > 100) {
//     document.getElementById("content").style = "transform: scaleX(1)";
//     document.getElementsByClassName('scroll_down_btn')[0].style = "transform: translateY(-200%); opacity:0;"
//   } else{
//     document.getElementById("content").style = "transform: scaleX(0.7)";
//     document.getElementsByClassName('scroll_down_btn')[0].style = "transform: translateY(0%); opacity:1;"
//   }
// };

// viewContent();




function hi(){
  document.getElementsByClassName('say_hi')[0].style = "top:10px; opacity:0;"
  document.getElementsByClassName('say_bye')[0].style = "top:0px; opacity:1;"
}

function bye(){
  document.getElementsByClassName('say_hi')[0].style = "top:0px; opacity:1;"
  document.getElementsByClassName('say_bye')[0].style = "top:10px; opacity:0;"
}


var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top= e.pageY + 'px';
})