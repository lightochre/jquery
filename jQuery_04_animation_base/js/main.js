$(function(){
  $('#typo .inner').click(function(){
    // 선택자.animate({속성:값}, 시간, 이징, 다른할일)
    // linear, swing 두가지만 들어간다.
    // 다른할일 function(){실제로할일} ->익명(임의)함수
    $(this).animate({opacity:0, fontSize:'0px'}, 1500, 'linear', 
    function(){
      $(this).animate({opacity:1, fontSize:'110px'}, 500);
    });
  });

  // 01.리스트 항목에서 마우스를 올리면 메뉴가 나타나요.
  $('.handup').mouseover(function(){
    $('span').css({display:'block'});
  });


  //02.menu open버튼을 클릭하면 메뉴리스트가 나타나도록..
  $('button').click(function(){
    $('.menuOpen').css({display:'block'});
  });

  
  //03.리스트 항목에서 마우스를 올리면 해당 항목의 배경색만 회색으로...
  $('.menu li').mouseover(function(){
    $(this).css({backgroundColor:'#ccc'});
  });

  //04.animate()메서드를 사용하여 div를 오른쪽으로 250px 이동하세요.
  $('button').click(function(){
    $('div').animate({left:'250px'}, 1500);
  });

  // 05.animate()메서드를 사용하여 div를 높이를 500px로 만드세요.
  /*
  $('.box1').animate({height:'500px'}, 1500, 
  function(){
    $(this).animate({height:'100px'}, 1500);
  });
  */
 
  // 마우스를 올리면 배경색을 blue로 마우스가 나가면 배경색을 green.s
  /*
  color를 바뀌게 할려면 jqurey ui를 넣어줘야한다.
  <script src="./js/vendor/jquery-ui-1.10.3.custom.min.js"></script>
  */
  $('.box1').mouseover(function(){
    //blue, 0.5s, animate 수치바뀌는 것만 가능
    //이전에 하던일을 멈추고..메서드 .stop(true) --> 기본값이 true 이므로 .stop만 써도 된다.
    $(this).stop().animate({backgroundColor:'blue'}, 1500);
  }).mouseout(function(){
    //green, 0.5s
    $(this).stop().animate({backgroundColor:'green'}, 1500);
  });
  
});