var $button = $('.gallery a'),
    $target = $('#lightbox-overlay'),
    $targetImg = $target.find('img');

/*
  1.$button 클릭하면 할일!
  2.클릭된 그 요소의 속성명 data-lightbox의 값을 변수명 newImg 저장
  3.#lightbox-overlay에 클래스명 visible 추가
  4.#lightbox-overlay img요소의 src속성의 값을 newImg 변경  
*/

$button.click(function(e){
  e.preventDefault();// 링크의 기능을 막는다.
  var newImg = $(this).find('img').attr('data-lightbox');
  $target.addClass('visible');
  //A.attr('b', 'c'); -> A요소에 b라는 값을 c로 바꾼값
  $targetImg.attr('src',newImg);

  console.log(newImg);
});
$target.click(function(){
  $(this).removeClass('visible');
});