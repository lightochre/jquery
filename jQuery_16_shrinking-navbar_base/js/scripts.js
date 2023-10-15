/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $smallLogo = 'images/logo-shrink.svg';

    $window.scroll(function(){
      if($(this).scrollTop() > 100){
        if(!$mainHeader.hasClass('shrink')){
          $mainHeader.addClass('shrink');
          switchImages($smallLogo);
        }
      }else{
        if($mainHeader.hasClass('shrink')){
          $mainHeader.removeClass('shrink');
          switchImages($defaultLogo);
        }
      }
    });
    function switchImages(newpath){
      var $logo = $('#logo')
      $logo.fadeOut(300, function(){
        //var c = A.attr('src');
        //A.attr('src', 'c')
      $logo.attr('src', newpath);
      $logo.fadeIn(300);

      }); //jquery fadeOut
      
    }



/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

