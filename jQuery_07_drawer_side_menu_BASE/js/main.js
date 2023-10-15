$(function(){
  //변수(var)명을 잡아준다.
  //aside button ->.find
  var $aside = $('aside');
  var $button = $aside.find('button');
  var $duration = 300;

  // 버튼을 클릭하면 aside 나오도록 해주세요.
  // 버튼하나 가지고 일을 두번 시킬때
  /*
    자바스크립트..
    선택자.classList.add='open';
  */
  // 클래스명 추가 -> A.addClass('b'); A.addClass('b c');
  // 클래스명 삭제 -> A.removeCladd('b');
  // 없으면 추가해주고, 있으면 넣어주고 -> A.toggleClass('b');
  // A.hasClass('b') 조건문에서만 사용. a요소에 b라는 클래스 -> 있으면 true, 없으면 false

  // 속성을 변경하는 방법/속성의 값을 반환하기
  // var c =  A.attr('b') -> A라는 요소의 b라는 속성의 값을 변수명 C에 저장.
  // A.attr('b','c') a라는 요소의 b라는 속성의 값을 c로변경

  $button.click(function(){
    // $aside.stop().animate({left:'0px'}, $duration);
    $aside.toggleClass('open');
      if($aside.hasClass('open')){
        //$aside.stop().animate({left:'-70px'}, $duration, 'easeOutBack');
        $button.find('img').attr('src', 'img/btn_close.png');
      } else{
        //$aside.stop().animate({left:'-350px'}, $duration, 'easeInBack');
        $button.find('img').attr('src', 'img/btn_open.png');
      }
  });
      

});