$(document).ready(function() {


  $(document).on('scroll', function () {
    var scrollVal = $(document).scrollTop();
    rotate(scrollVal);
    animX(scrollVal);
    animY(scrollVal);
    animXY(scrollVal);
    // anim4(scrollVal);
    // anim5(scrollVal);
  });
  $(document).on('resize', function () {
    var scrollVal = $(document).scrollTop();
    rotate(scrollVal);
    animX(scrollVal);
    animY(scrollVal);
    animXY(scrollVal);
  });
  var a = 0;
  
  function rotate(i) {
    if(window.matchMedia('(min-width: 992px').matches){
      for( var x = 0; x < $('.rotate').length; x++ ) {
        var offsetTop = Number($('.rotate').eq(x).offset().top) - Number($(window).height());
        var index = $('.rotate').eq(x).attr('data-index');
        var offSets = $('.rotate').eq(x).attr('data-offset');
        if (i > offsetTop) {
          a = (i - offsetTop) * index - offSets; 
          $('.rotate').eq(x).css({'transform': 'rotate(' + a + 'deg)'});
        }
      }
    } else {
      $('.rotate').css({'transform': 'rotate(0deg)'});
    }
  }
  
  function animX(i) {
    if(window.matchMedia('(min-width: 992px').matches){
      for( var x = 0; x < $('.translateX').length; x++ ) {
        var offsetTop = Number($('.translateX').eq(x).offset().top) - Number($(window).height());
        var index = $('.translateX').eq(x).attr('data-index');
        var offSets = $('.translateX').eq(x).attr('data-offset');
        if (i > offsetTop) {
          a = (i - offsetTop) * index - offSets; 
          $('.translateX').eq(x).css({'transform': 'translateX(' + a + '%)'});
        }
      }
      } else {
        $('.translateX').css({'transform': 'translateX(0px)'});
      }
    }
    
    function animXY(i) {
      if(window.matchMedia('(min-width: 992px').matches){
        for( var x = 0; x < $('.translateXY').length; x++ ) {
          var offsetTop = Number($('.translateXY').eq(x).offset().top) - Number($(window).height());
          var index = $('.translateXY').eq(x).attr('data-index');
          var start = $('.translateXY').eq(x).attr('data-start');
          if (i > offsetTop) {
            a = (i - offsetTop) * (index * 0.001) - start; 
            $('.translateXY').eq(x).css({'transform': 'scale(' + a + ')'});
          }
        }
      } else {
        $('.translateXY').css({'transform': 'scale(1)'});
      }
    }
    
    
    function animY(i) {
      if(window.matchMedia('(min-width: 992px').matches){
        for( var x = 0; x < $('.translateY').length; x++ ) {
          var offsetTop = Number($('.translateY').eq(x).offset().top) - Number($(window).height());
          var index = $('.translateY').eq(x).attr('data-index');
          var offSets = $('.translateY').eq(x).attr('data-offset');
          if (i > offsetTop) {
            a = (i - offsetTop) * index - offSets; 
            $('.translateY').eq(x).css({'transform': 'translateY(' + a + '%)'});
          }
        }
      } else {
        $('.translateY').css({'transform': 'translateY(0px)'});
      }
      }




});