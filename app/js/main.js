$(function () {

  //плавный скролл
  $(".menu__link, .header__logo, .footer__logo").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function () {
    $scrollPosition = $(window).scrollTop();
    // console.log($scrollPosition); тестим
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

  //материалы
  $('.materials__item').hover( function(){
    $('.materials__desc', this).toggleClass('active');
  })

  //секция вопросов
  $('.faq__item-title').on('click', function () {
    if ($('.faq__list').hasClass('one')) {
      $('.faq__item-title').not($(this)).removeClass('active');
      $('.faq__item-desc').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })
})