// common script
$(document).ready(function() {document.createElement('header');
  preventDefaultAnchor();
  hoverEffect();


  $('#gnb nav > ul.top > li > a').on('click', function() {
    $('#gnb nav > ul.top > li').removeClass('on');
    $(this).parent().addClass('on');
  });


  $('#header div.bar a').on('click', function() {
    if ($('#gnb').hasClass('side')) {
      $('#gnb').removeClass('side');
    } else {
      $('#gnb').addClass('side');
    }
  });

  function hoverEffect() {
    $('div.left.middle ul li div').on('mouseenter', function(){
      $(this).children('ul.hover').css({'display': 'block'});
    });
    $('div.left.middle ul li div').on('mouseleave', function(){
      $(this).children('ul.hover').css({'display': 'none'});
    });
  }
  













});

// 상단 튐 방지
function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}




