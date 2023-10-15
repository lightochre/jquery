$(function () {
  var $window = $(window),
      $header = $('.page-header'),    
      $headerClone = $header.contents().clone(),
      //header contents 내용만 가져와라
      $headerCloneContainer = $('<header class="page-header-clone"></header>'),
      $threshold = $header.offset().top + $header.outerHeight(true);
      //$threshold 문지방

      //A.append(B) - A요소의 내용의 뒤에 B추가
      $headerCloneContainer.append($headerClone);
      
      //A.appendTo(B) - B요소의 내용의 뒤에 A를 추가(이동)
      $headerCloneContainer.appendTo('body');
      //console.log($headerCloneContainer);
      
      $window.scroll(function(){
        if($(this).scrollTop() >= $threshold){
          $headerCloneContainer.addClass('visible');
        }else{
          $headerCloneContainer.removeClass('visible');
        }
      });

});
