$(function () {
  var tabAnchor = $('.tabs-nav li');
  var tabPanel = $('.tabs-panel');

  //링크를 클릭하면 할일
  tabAnchor.click(function(e){
    e.preventDefault();//선택되어 있는 기본링크 기능을 막아라

    /*tabAnchor.find('a').removeClass('active');//모두 빼고
    $(this).find('a').addClass('active');// 그요소에만 추가*/

    // 그요소에만 active를 추가하고 나머지요서에서 빼는 방법 -> siblings()
    // siblings()는 형제자매만 해당된다.
    // <li>요소 요소.요소</li>

    $(this).find('a').addClass('active');
    $(this).siblings().find('a').removeClass('active');

    tabPanel.hide(); 

    var $targetIdx = $(this).index();
    console.log($targetIdx);
    tabPanel.eq($targetIdx).show();

  });

  //.trigger 방아쇠를 당기다 -> 첫번째에다가 무조건(강제적)으로 한다.
  tabAnchor.eq(0).trigger('click');


});

