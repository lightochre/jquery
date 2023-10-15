$(function(){
  var $duration = 300;
  var $button = $('#buttons2 button');

  //버튼들의 높이 -40, 0, 40, 80, 120....
  //요소들마다 할일 -> 자바스크립트
  /*
  var $buttons = document.getElementsByTagName('button');
  console.log($buttons);
  // $button[0].style.top = '-40px';
  // i 0 = -40, i 1=0, i 2 = 40
  for(var i = 0; i <=$buttons.length ; i++){
    $button[i].style.top = i*40 -40 + 'px';
  }
  */

  // each -> 제이쿼리에서는 각각 요소들마다 할일이다.
  $button.each(function(idx){
    // console.log(idx);
    // 선택자.css({속성:값, 속성:값});
    $(this).css({top:idx * 40 - 40 + 'px'});
  })
  .mouseover(function(){
    $(this).stop().animate({backgroundColor:'yellow', color:'#000'},$duration);
    $(this).find('img:frist-child').stop().animate({opacity:0}, $duration);
    $(this).find('img:nth-child(2)').stop().animate({opacity:1}, $duration);
  })
  .mouseout(function(){
    $(this).stop().animate({backgroundColor:'#fff', color:'#01b169'}, $duration);
    $(this).find('img:frist-child').stop().animate({opacity:1}, $duration);
    $(this).find('img:nth-child(2)').stop().animate({opacity:0}, $duration);
  });
  

  
});

