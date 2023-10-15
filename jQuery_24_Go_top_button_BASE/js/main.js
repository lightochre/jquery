/*
윈도우에 스크롤이 300px이상 생기면 go_top 스윽 나타난다.
아니라면 go_top 스윽 사라진다.

go_top버튼을 클릭하면 html, body의 스크롤양이 0으로 바뀌도록 0.5s
*/

$(function() {
  $(window).scroll(function(){
    
    if($(this).scrollTop() >= 300){
      $('.go_top').fadeIn(500);      
    }else{
      $('.go_top').fadeOut(500);
    }
  });

  $('.go_top').click(function(e){
    e.preventDafault();
    $('html, body').stop().animate({strollTop:0}, 800); 
    
  });
});
