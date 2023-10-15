/* document.addEventListener('DOMContentLoaded', function(){
     document.getElementsByTagName('h1')[0].style.color = 'red';
  });*/

  /*
    $(document).ready(function(){
      $('h1').css({'color':'red'});
    });

  */


//#typo .inner{text-decoration:underline;}
$(function(){
  $('h1').css('color','red'); //css속성 하나를 변경
  /*
  $('#typo .inner').css('text-decoration','underline'); 
  $('#typo .inner').css('border-bottom','5px solid red');
  $('#typo .inner').css('transform','rotate(45deg)');
  $('#typo .inner').css('opacity',0.5);
  */
 /*
  $('#typo .inner').css({
    'text-decoration':'underline',
    'boder-bottom':'5px solid red',
    'transform':'rotate(45deg)',
    'opactiy':'0.5'
  });
  */
 /*
  $('#typo .inner').css({
    textDecoration:'underline',
    boderBottom:'5px solid red',
    transform:'rotate(45deg)',
    opactiy:'0.5'
  });
  */

  // step2. 실행 시점 제어하기
  /*
    특정요소에 마우스 포인터를 올려놓는 시점
    특정요소에 마우스 포인터가 벗어나는 시점
    특정요소를 클릭하는 시점
    마우스를 움직이는 시점
    창크기가 바뀌는 시점
    스크롤 시점
  */
  //실행 지점 제어 - event종류 - mouseover 마우스가 올라왔을 때.
  // on메서드, bind('click'..)-> bind는 사라짐 -->on,off 메서드사용
  //$('선택자').on('이벤트 종류', 할일);
  // 할일 = 임의 함수 = function(){}

  /* 단계 시작
  $('#typo').on('mouseover', function(){
    //아이디의 typo의 배경색을 green
    $('#typo').css('background-color', 'green');
  });//typo mouseover

  $('#typo').on('mouseout', function(){
    //아이디의 typo의 배경색을 green
    $('#typo').css('background-color', '#3498db');
  });//typo mouseover
  */

  /* 1단계
  $('#typo').on('mouseover', function(){
    $('#typo').css('background-color', 'green');
  })
  .on('mouseout', function(){
    $('#typo').css('background-color', '#3498db');
  });//typo mouseover
  */

  // 2단계
  $('#typo').mouseover( function(){
    $('#typo').css('background-color', 'green');
  })
  .mouseout( function(){
    $('#typo').css('background-color', '#3498db');
  });//typo mouseover

  //3단계
  // h1:hover, #typo:hover {background-color:green;}
  //this --> 이벤트가 일어난 그거
  $('#typo, h1').mouseover( function(){
    // $('#typo, h1').css('background-color', 'green');
    $(this).css('background-color', 'green');
  })
  .mouseout( function(){
    // $('#typo, h1').css('background-color', '#3498db');
    $(this).css('background-color', '#3498db');
  });



});