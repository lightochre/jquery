/*
각 섹션이 현재 화면을 기준으로 상단에서의 거리 
선택자.offset().top;
section1 : 0/ section2 : 600px /section3 :1200px
*/
$(function(){
  var $menu = $('#top_menu ul li'),
      $contents = $('#contents > section');
       
  /*
   $menu를 클릭하면 해당요소에만 클래스 on이 추가 되도록 만듬
  */
 $menu.click(function(x){
  x.preventDefault(); 
  /*$menu.removeClass('on');
  $(this).addClass('on');*/
  //siblings() 형제자매들 중에 나머지들은 추가해~~
  //$(this).addClass('on').siblings().removeClass('on');

  //index()안에서 선택 가능한건 eq() ->뭐와 동등한.. 
  var idx = $(this).index();  
  var sectionDiv = $contents.eq(idx)
  var sectionDistance = sectionDiv.offset().top;

  //A.scrollTop() 스크롤양 확인
  // 스크롤양을 주는거 jquery
  $('html,body').stop().animate({scrollTop:sectionDistance});

 //sconsole.log(sectionDistance);
 });

 /*
  윈도우에 스크롤이 생기면
    $contents를 마다 할일!
      각각의 화면상단에서의 거리 sectionDistance 보다 스크롤양이 많은지 적은지
      많다는 조건이 참이며,
        각 요소마다 순번 변수명 idx 저장
        그 순번에 해당하는 메뉴에만 클래스명 on 추가
  */

  $(window).scroll(function(){
    $contents.each(function(index){
      if($(this).offset().top <= $(window).scrollTop()){
        //var idx = $(this).index();
        $menu.removeClass('on');
        $menu.eq(index).addClass('on');
      }
    });
  });

});