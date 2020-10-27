
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
}