$(function(){
  var $duration = 300;
  var $image =$('#images p');

  //첫번째 캡션, span -->animate 메서드
  /*
    공백 o = find,, 공백x = filter  
    #images p span{} -> $image.find('span')
    #images p.strong{} -> $images.fliter('strong')
    #images p:nth-child(2) -> $images.filter(':nth-child(2)')
  */
  $image.filter(':nth-child(1)').mouseover(function(){
    $(this).find('span, strong').stop().animate({opacity:1}, $duration);
  }).mouseout(function(){
    $(this).find('span, strong').stop().animate({opacity:0}, $duration);
  });

  $image.filter(':nth-child(2)').mouseover(function(){
    $(this).find('span').stop().animate({opacity:1}, $duration);
    $(this).find('strong').stop().animate({opacity:1, left:'0px'}, $duration);
  }).mouseout(function(){
    $(this).find('span').stop().animate({opacity:0}, $duration);
    $(this).find('strong').stop().animate({opacity:0, left:'-200px'}, $duration);
  });

  $image.filter(':nth-child(3)').mouseover(function(){
    $(this).find('span').stop().animate({opacity:1}, $duration);
    $(this).find('strong').stop().animate({opacity:1, bottom:'0px'}, $duration);
    $(this).find('img').stop().animate({opacity:1, top:'-40px'}, $duration);
  }).mouseout(function(){
    $(this).find('span').stop().animate({opacity:0}, $duration);
    $(this).find('strong').stop().animate({opacity:0, bottom:'-80px'}, $duration);
    $(this).find('img').stop().animate({opacity:1, top:'0px'}, $duration);
  });
});