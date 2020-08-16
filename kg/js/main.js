$(document).ready(function () {

  $(document).on('beforeunload', function () {
    $(document).scrollTop(0);
    $(window).scrollTop(0);
  });

  $(document).on('scroll', function () {
    var scrollVal = $(document).scrollTop();
    rotateBG(scrollVal);
    anim1(scrollVal);
    anim2(scrollVal);
    anim3(scrollVal);
    anim4(scrollVal);
    // anim5(scrollVal);
  });


  var a = 0;

  function rotateBG(i) {
    if (i < 1400) {
      var x = i * -0.02;
      $('.bodyBg').css({
        'transform': 'rotate(' + x + 'deg)'
      });
      a = x
    } else if (i >= 1400) {
      var b = i * 0.02;
      d = a + (b + a);
      $('.bodyBg').css({
        'transform': 'rotate(' + d + 'deg)'
      });
    } else if (i < 2800) {
      var x = i * -0.02;
      $('.bodyBg').css({
        'transform': 'rotate(' + x + 'deg)'
      });
      a = x

    }
  }

  function anim1(i) {
    var x = 0;
    var offsetTop = Number($('.main-items').offset().top) - Number($(window).height());
    var items = $('.scroll1');
    if (i > offsetTop) {
      x = i * 0.01;
      if (window.matchMedia('(min-width: 997px)').matches) {
        items.eq(0).css({
          'transform': 'translateX(' + (x * 8) + '%)'
        });
        items.eq(1).css({
          'transform': 'translateX(' + (x * 6) + '%)'
        });
        items.eq(2).css({
          'transform': 'translateX(' + (x * 3) + '%)'
        });
        items.eq(3).css({
          'transform': 'translateX(' + (x - 2) + '%)'
        });
        items.eq(4).css({
          'transform': 'translateX(' + '-' + (x - 2) + '%)'
        });
        items.eq(5).css({
          'transform': 'translateX(' + '-' + (x * 3) + '%)'
        });
        items.eq(6).css({
          'transform': 'translateX(' + '-' + (x * 6) + '%)'
        });
        items.eq(7).css({
          'transform': 'translateX(' + '-' + (x * 8) + '%)'
        });
      } else {
        items.eq(0).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(1).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(2).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(3).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(4).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(5).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(6).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(7).css({
          'transform': 'translateX(' + 0 + '%)'
        });
      }
    }
  }

  function anim2(i) {
    var x = 0;
    var offsetTop = Number($('.main-col_1').offset().top) - Number($(window).height());
    var items = $('.scroll2');
    if (i > offsetTop) {
      x = i * 0.02;
      if (window.matchMedia('(min-width: 997px)').matches) {
        items.eq(0).css({
          'transform': 'rotate(' + (x + 0.1) + 'deg)'
        });
        items.eq(1).css({
          'transform': 'rotate(' + (x + 0.2) + 'deg)'
        });
        items.eq(2).css({
          'transform': 'rotate(' + (x + 0.3) + 'deg)'
        });
      } else {
        items.eq(0).css({
          'transform': 'rotate(' + 0 + 'deg)'
        });
        items.eq(1).css({
          'transform': 'rotate(' + 0 + 'deg)'
        });
        items.eq(2).css({
          'transform': 'rotate(' + 0 + 'deg)'
        });
      }
    }
  }

  function anim3(i) {
    var x = 0;
    var offsetTop = Number($('.main-priss').offset().top) - Number($(window).height());
    var items = $('.scroll3');
    if (i > offsetTop) {
      x = i * 0.02;
      if (window.matchMedia('(min-width: 997px)').matches) {
        items.eq(0).css({
          'transform': 'translateX(' + x + '%)'
        });
        items.eq(1).css({
          'transform': 'translateX(' + (x * 1.5) + '%)'
        });
        items.eq(2).css({
          'transform': 'translateX(' + (x * 2) + '%)'
        });
        items.eq(3).css({
          'transform': 'translateX(' + (x * 2.5) + '%)'
        });
      } else {
        items.eq(0).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(1).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(2).css({
          'transform': 'translateX(' + 0 + '%)'
        });
        items.eq(3).css({
          'transform': 'translateX(' + 0 + '%)'
        });
      }
    }
  }

  function anim4(i) {
    var x = 0;
    var offsetTop = Number($('.main-col_2').offset().top) - Number($(window).height());
    var items = $('.scroll4');
    if (i > offsetTop) {
      x = i * 0.02;
      if (window.matchMedia('(min-width: 997px)').matches) {
        items.eq(0).css({
          'transform': 'rotate(' + (x + 0.1) + 'deg)'
        });
      } else {
        items.eq(0).css({
          'transform': 'rotate(' + 0 + 'deg)'
        });
      }
    }
  }

  function anim5(i) {
    var x = 0;
    var offsetTop = Number($('.main-row_4').offset().top) - Number($(window).height());
    var items = $('.scroll5');
    if (i > offsetTop) {
      x = i * 0.02;
      if (window.matchMedia('(min-width: 997px)').matches) {
        items.eq(0).css({
          'transform': 'translateX(' + '-' + (x * 0.4) + '%)'
        });
      } else {
        items.eq(0).css({
          'transform': 'translateX(' + 0 + '%)'
        });
      }
    }
  }



  $('.openMap').click(function () {
    $('.map__wrap').addClass('map__wrap_active');
  });
  $('.close__map').click(function () {
    $('.map__wrap').removeClass('map__wrap_active');
  });


  ymaps.ready(init);

  function init() {
    var myMap;
    var geolocation = ymaps.geolocation;

    myMap = new ymaps.Map('map', {
      center: ["40.940741", "72.994228"],
      zoom: 16,
      scroll: true
    }, {
      searchControlProvider: 'yandex#search'
    });
    var glyphIcon = new ymaps.Placemark([40.940741, 72.994228], {}, {
      preset: 'islands#yellowGlyphIcon',
      iconGlyph: 'home',
    });
    myMap.geoObjects.add(glyphIcon);
    myMap.behaviors.disable('scrollZoom');

    // Сравним положение, вычисленное по ip пользователя и
    // положение, вычисленное средствами браузера.
   

  }



  $.get("https://ipinfo.io?token=446b77faf0e147", function (response) {

    var country = response.country;
    console.log(country);
    if (country == "TJ") {
      window.location.href =
        "/tj/"; // Перенаправляем пользователя на страницу с блокировкой, если он из России

    } else if (country == "UZ") {
      window.location.href =
        "/uz/"; // Перенаправляем пользователя на страницу с блокировкой, если он из России

    } else {
      document.querySelector('.preloader').style.display = 'none';
    }
  }, "jsonp");



});