$(function(){
  var executed = false; //핵심..한번스크롤이 사용하면..
  
  $(window).scroll(function(){
    var threshold = $('.section2').offset().top -300;
    if(!executed){//if(executed == false)
      if($(window).scrollTop() >= threshold){
        var progressRate = $('.animate').attr('data-rate');
        //animate progress 사용자속성 값 percent ->>60%
        /*
          $('box').animate({속성:값, height:100px}, 시간, 이징 , 다른할일)
          $('box').animate({속성:값, height:100px}, 1500, easeOutQuint , 다른할일);
          $('box').animate({속성:값, height:100px}, {
            duration:1500, 
            easing:easeOutQuint, 
            complete:function{끝나고 할일},
            progress:function{...진행중 할일}
          });
        */
        $({hour:0}).animate({hour:progressRate},{
          duration:2500,
          progress:function(){
            var now = this.hour;
            $('.animate').text(Math.ceil(now) + '%');
          }
        });
        executed = true;
      }//if 조건문
    }//executed if    
  });
});