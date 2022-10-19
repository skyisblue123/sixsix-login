/*回到頂部*/
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});

/*錨點*/
$(function () {
  $(‘a[href*=#]:not([href=#])’).click(function() {
      var target = $(this.hash);
      $(‘html,body’).animate({
          scrollTop: target.offset().top
      }, 1000);
      return false;
  });
});