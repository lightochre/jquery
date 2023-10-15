/*
 일정시간마다 할 일
 첫번째 이미지 쓰윽 사라지고, 
 두번째 이미지 쓰윽~ 사라지고, 마지막 이미지 쓰윽~ 첫번째
*/
  /*
  자바스크립트에서는 .. 
  해당시간이 지나면 한번만 할일 --> 
  var timer = setTimeout(할일, 1000); / 멈출때 clearTimeout(timer);

  일정시간 마다 할일 --> 
  var time = setInterval(할일, 시간); / clearInterval(timer));
  */

 //** jquery 집합객체(object)중 특정번째 요소를 선택 .eq(숫자) -> index번호에 상응하는 숫자
 //.eq = equivanlent 동등한
 //요소를 서서히 나타나도록 -> fadeIn()/ 사라지는거 -> fadeOut();

 /*slides.eq(currentIndex).fadeIn();
 //setInterval(할일, 3500);
 setInterval(showNextSlide, 3500); //showNextSlides 함수선언
 function showNextSlides(){
  //현재 슬라이드가 사라지고,
  slides.eq(showNextSlides).fadeOut();
  //다음 슬라이드가 나타난다.
  slides.eq(1).fadeIn();
 }//showNextSlide*/

$(function () {
  var slides = $('.slideshow img');
  var slideCount = slides.length;
  var currentIndex = 0; // 시작값
  //console.log(slides);

 slides.eq(currentIndex).fadeIn();
 var timer = setInterval(showNextSlide, 5000); //showNextSlides 함수선언
 //clearInterval(timer);

 function showNextSlide(){
  var nextIndex = (currentIndex + 1) % slideCount;
  slides.eq(currentIndex).fadeOut();
  slides.eq(nextIndex).fadeIn();
  currentIndex = nextIndex;
 }//showNextSlide
 slides.mouseover(function(){
  clearInterval(timer);
 })
 .mouseout(function(){
  setInterval(showNextSlide, 5000);
 });
});

