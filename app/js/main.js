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
  $('.materials__item').hover(function () {
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

const li = document.querySelectorAll('.menu__item');
const sec = document.querySelectorAll('section');

function activeMenu() {
  let len = sec.length;
  // console.log(sec);
  while (--len && scrollY + 150 <= sec[len].offsetTop) {}
  li.forEach(ltx => ltx.classList.remove('active'));
  li[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);

document.body.addEventListener('click', e => {
  if (!e.target.matches('.slider__item')) return
  document.querySelector('.slider__img-box img').src = e.target.dataset.src

  document.querySelectorAll('.slider__item').forEach(btn => btn.classList.remove('active'))
  e.target.classList.add('active')
})

//бургер
$('.header__burger, .menu__item').on('click', function () {
  $('.header__top').toggleClass('active');
  $('.header__burger').toggleClass('active');
  $('.body').toggleClass('lock');
});

$('.header__logo').on('click', function () {
  $('.header__top').removeClass('active');
  $('.header__burger').removeClass('active');
  $('.body').removeClass('lock');
})