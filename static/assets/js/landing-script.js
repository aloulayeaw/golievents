(function ($) {
  "use strict";

  // =======Sticky-Header========>>>>>
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $(".sticky-navbar").removeClass("sticky");
      $('.back-to-top').hide();
    } else {
      $(".sticky-navbar").addClass("sticky");
      $('.back-to-top').show();
    }
  });
  // =======Sticky-Header========>>>>>


new WOW().init();

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.querySelector('.dynamic-year');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = currentYear;
    console.log(currentYear)
  }
});