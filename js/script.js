
$(document).ready(function () {

  $(".menu__icon").click(function() {
    $(this).toggleClass("active");
    $(this).parent().toggleClass("active");
  })
  
  adaptiveButtons();
  $(window).resize(function() {
    adaptiveButtons();
  })

});


function adaptiveButtons() {
  let w = $(window).outerWidth();
  let headerMenu = $('.menu__body');
  let footerButtons = $('.footer__buttons');
  let footerLogo = $('.footer__logo');
  let headerButton = $('.header__buttons');
  if (w < 768) {
    if (!headerButton.hasClass('done')) {
      headerButton.addClass('done').appendTo(headerMenu);
    }
  } else {
    if (headerButton.hasClass('done')) {
      headerButton.removeClass('done').appendTo($('.header__row'));
    }
  }
  if (w < 993) {
    if (!footerLogo.hasClass('done')) {
      footerLogo.addClass('done').prependTo(footerButtons);
    }
  } else {
    if (footerLogo.hasClass('done')) {
      footerLogo.removeClass('done').prependTo($('.footer__column')[0]);
    }
  }
}