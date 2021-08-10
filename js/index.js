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

// function what(){
//     closeNav();
//     main.style = "display:block;"
//     footer.style = "display:flex"
//     gnb.style = "animation: gnbDisappear 0.8s forwards"
//     document.getElementById('fp-nav').style = "opacity:1"
//     window.location.href = "#section2"
// }

navicon.addEventListener("click", function() {
    this.classList.toggle("is-active");
        if (this.classList.contains('is-active')){
            openNav();
            main.style = "display:none;"
            footer.style = "display:none;"
            gnb.style = "animation: gnbPopUp 0.8s forwards"
            document.getElementById('fp-nav').style = "opacity:0"
            document.querySelector('.cursor').style = "display:block"

        } else {
            closeNav();
            main.style = "display:block;"
            footer.style = "display:flex"
            gnb.style = "animation: gnbDisappear 0.8s forwards"
            document.getElementById('fp-nav').style = "opacity:1"
            document.querySelector('.cursor').style = "display:none"
        }
    })

// function sayGoodBye(){
//     if(window.innerWidth < 1023){
//         document.getElementById('fp-nav').style = "display:none"
//     }
// }

// sayGoodBye();

// 제이쿼리사용시
// $(".navicon").click(function() {
  //     $("#navicon_upper").toggleClass("on");
  //     $("#navicon_inner").toggleClass("on");
  //     $("#navicon_lower").toggleClass("on");
  // });



// function sideMenuColor(selectNumber){

//     var sideList = document.getElementsByClassName('side_list')[selectNumber];
//     var sideBall = document.getElementsByClassName('side_ball')[selectNumber];

//     sideBall.style = "background-color:rgb(75, 25, 255); cursor:url(img/c" + selectNumber + ".svg), auto;"  
//     sideList.style = "cursor:url(img/c" + selectNumber + ".svg), auto;"

// }

// function sideMenuColorB(selectNumber){

//     var sideList = document.getElementsByClassName('side_list')[selectNumber];
//     var sideBall = document.getElementsByClassName('side_ball')[selectNumber];

//     sideBall.style = "background-color:rgb(170, 170, 170);"

// }


// edu_teach


var jMedia = window.matchMedia( '( min-width: 767px )' );


var experience = document.getElementsByClassName("experience_wrap");
var aboutWrap  = document.getElementById('about_wrap');
var openState = 0;

if(window.matchMedia( '( max-width: 768px )' )){

function showExp(){

    if (openState == 0){
        
        experience[0].style = "display:flex;"
        aboutWrap.style = "height:auto"
        openState = 1;

    } else {
        
        experience[0].style = "display:none;"
        aboutWrap.style = "height:70%"
        openState = 0;
    } 

} 

} else {
    experience[0].style ="display:none;"
    openState = 0;
}

// function what(){
//     if(abmMoreWrap.classList.contains('mobile')){
//         abmMoreWrap.style ="display:none;"
//         aboutMeExp.style ="display:block;"
//         openState = 0;
//     }
//     }
    
//     what();


// window.onload = function(){
// if(window.innerWidth > 767){
//     document.getElementById('abm_more_wrap').style ="display:none;"
// }
// }


// var workContent = document.querySelector('.work_cotent');


function fadeIn(selectedContent){
    document.getElementsByClassName('img_gradient')[selectedContent].style = "opacity:1;"
    document.getElementsByClassName('view_project')[selectedContent].style = "animation:viewProject 0.8s forwards"
}

function fadeOut(selectedContent){
    document.getElementsByClassName('img_gradient')[selectedContent].style = "opacity:0;"
    document.getElementsByClassName('view_project')[selectedContent].style = "animation:viewProjectR 0.8s forwards"
}

function hi(){
    document.getElementsByClassName('say_hi')[0].style = "top:10px; opacity:0;"
    document.getElementsByClassName('say_bye')[0].style = "top:0px; opacity:1;"
}

function bye(){
    document.getElementsByClassName('say_hi')[0].style = "top:0px; opacity:1;"
    document.getElementsByClassName('say_bye')[0].style = "top:10px; opacity:0;"
}

function expExpand(selectedNum){

    document.getElementsByClassName('exp_des_wrap')[selectedNum].style = "opacity:1;"
}

function expFold(selectedNum){

    var mql = window.matchMedia("screen and (max-width: 1024px)");

    if(mql.matches){

        document.getElementsByClassName('exp_des_wrap')[selectedNum].style = "opacity:1;"
        
    } else {

        document.getElementsByClassName('exp_des_wrap')[selectedNum].style = "opacity:0;"

    }
}


var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top= e.pageY + 'px';
})