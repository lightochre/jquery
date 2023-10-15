$(function(){
  var $aside = $('aside'),
      $btn = $('.toggle-btn');
  
    $btn.click(function(){
      $aside.toggleClass('open');
  });
});