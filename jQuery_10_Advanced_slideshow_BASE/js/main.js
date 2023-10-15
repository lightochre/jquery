$(function () {
  // 공백이 없으면 filter.. 공백이 있으면 find
  var container = $('.slideshow');  
  var slideGroup = container.find('.slideshow_slides');
  var slides = slideGroup.find('a');
  var nav = container.find('.slideshow_nav');
  var indicator = container.find('.indicator');

  var slideCount = slides.length; // 슬라이드의 갯수
  var indicatorHtml =''; //태그를 넣을수 있는 그릇(슬라이드갯수에 따라서...)
  var currentIndex = 0; //열자마자 첫번째를 보여줘~
  var duration = 500; //움직일때 시간
  var easing = 'easeInOutExpo';
  var interval = 3500;
  var timer; //마우스가 올라갈때 멈춰라

  //슬라이드를 가로로 배열 (지금은 한군데로 겹쳐있다.)
  //slides 마다 할 일, left 0%, 100%, 200%, 300% ->each 메서드
  console.log(slides);
  slides.each(function(i){
    var newLeft = i*100 + '%';
    $(this).css({left: newLeft});
    //<a href="">1</a> 
    // var i =2; i=i+2; i+=2
    // indicatorHtml = indicatorHtml + ??
    // indicatorHtml += ""
    indicatorHtml += '<a href="">' + (i+1) + '</a>'; 
    // s
  });//slides.each

  // A.text(B); A요소의 b의 내용을 글씨 형태로 추가(내용이 있으면 교체)
  // A.html(B); A요소의 b의 내용을 html 형태로 추가
  indicator.html(indicatorHtml);
 

