$(function () {
  var tabAnchor = $('.tabs-nav li a');
  var tabPanel = $('.tabs-panel');

  //링크를 클릭하면 할일
  tabAnchor.click(function(e){
    e.preventDefault();//선택되어 있는 기본링크 기능을 막아라

    tabAnchor.removeClass('active');//모두 빼고
    $(this).addClass('active');// 그요소에만 추가

    // 그요소에만 active를 추가하고 나머지요서에서 빼는 방법 -> siblings()
    // siblings()는 형제자매만 해당된다.
    // <li>요소 요소.요소</li>

    tabPanel.hide(); 
     /*$('#work01').show();
    $('#work02').show();
   
    var c = A.attr('href');
    var $target =  $(this).attr('href');
    */

    var $tabsSet = $(this).attr('href');
    $($tabsSet).show();
  });

});

