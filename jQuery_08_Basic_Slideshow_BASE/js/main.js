/*
 일정시간마다 할 일
 첫번째 이미지 쓰윽 사라지고, 
 두번째 이미지 쓰윽~ 사라지고, 마지막 이미지 쓰윽~ 첫번째
*/
/*
  해당시간이 지나면 한번만 할 일
  var timer = setTimeout(할일, 1000); / 멈출때 clearTimeout(대상의 이름);
  일정시간마다 할일
  var timer = setInterval(할일, 1000); / 멈출때 clearInterval(timer);
*/

// ** jquery 집합객체(object)중 특정번째 요소를 선택하는 .eq(숫자) ->index번호에 상응하는 숫자
// .eq = equivalent 동등한
// 요소를 서서히 나타나도록 -> faceIn() / 사라지는 거 -> fadeOut();
$(function () {
  var slides = $('.slideshow img');
  var slideCount = slides.length;
  var currentIndex = 0; // 시작값
  //console.log(slides);

  slides.eq(currentIndex).fadeIn();
  var timer = setInterval(showNextSlide, 3500); //showNextSlides 함수선언
  // clearInterval(timer)

  function showNextSlide(){
    // ci 0 ni 1, ci 1 ni 2, ci 2 ni 3, ci 3 ni 0
    // slideCount 4
    //  7 % 2 = ?? 2로 나눈 나머지
    var nextIndex = (currentIndex + 1) % slideCount;
    // 현재 슬라이드가 사라지고
    slides.eq(currentIndex).fadeOut();
    // 다음 슬라이드가 나타난다.
    slides.eq(nextIndex).fadeIn();
    currentIndex = nextIndex;
  } //showNextSlide

  slides.mouseover(function(){
    clearInterval(timer);
   })
   .mouseout(function(){
    setInterval(showNextSlide, 5000);
   });
 

});

