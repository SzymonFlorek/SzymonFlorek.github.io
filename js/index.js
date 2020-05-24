$(document).ready(function () {

  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
    var elem = $("#navbarSupportedContent20");

    if (elem.hasClass('show')) {
      elem.removeClass('show');
      $('.animated-icon1').removeClass('open');
    }
  });

  $(".nav-link").on("click", function () {
    var elem = $("#navbarSupportedContent20");

    if (elem.hasClass('show')) {
      elem.toggleClass('show');
      $('.animated-icon1').toggleClass('open');
    }
  });
});