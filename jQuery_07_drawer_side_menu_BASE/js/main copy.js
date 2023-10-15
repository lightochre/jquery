$(function(){
  //변수(var)명을 잡아준다.
  //aside button ->.find
  var $aside = $('aside'),
      $button = $aside.find('button'),
      $duration = 300;

      //버튼을 클릭하면 aside 나오도록 해주세요.
      //js -> 선택자.classList.add ='open'; remove 빼기 -> 선택자.classList.remove = 'open' 
      //jquery -> 선택자.addClass('b'); A.removeClass('b'); A.toggleClass('b');
      //A.toggleClass('b');

      //A.hasClass('b') 조건문에서만 사용. a요소에 b라는 클래스가 있으면 true, 없으면 fales

      //jquery -> 속성변경하기, 속성의 값을 변환하기(attr)

      //var c = A.attr('src') -> A라는 요소의 b라는 속성의 값을 변수명 c에 저장.
      //A.attr('b','c'); a라는 요소의 b라는 속성의 값을 c로 변경

      console.log($button.find('img').attr('src'));

    $button.click(function(){
      $aside.toggleClass('open');
     //$aside.stop().animate({left:'0'}, $duration);
     if($aside.hasClass('open')){
      //$aside.stop().animate({left:'-70px'}, $duration, 'easeOutBack');
      //A.attr('b', 'c') --> A =$button.find('img')
      $button.find('img').attr('src','img/btn_close.png');
     }else{
      //$aside.stop().animate({left:'-350px'}, $duration, 'easeInBack');
      $button.find('img').attr('src','img/btn_open.png');
     };
    });

});