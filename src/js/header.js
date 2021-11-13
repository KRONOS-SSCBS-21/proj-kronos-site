window.addEventListener("DOMContentLoaded", () => {
  /**
   * Create sticky header that hides on scoll down and show on scroll up
   */

  // detect scroll top or down
  if ($(".smart-scroll").length > 0) {
    // check if element exists
    var last_scroll_top = 0;
    $(window).on("scroll", function () {
      scroll_top = $(this).scrollTop();
      if (scroll_top == 0) {
        $(".smart-scroll").removeClass("scrolled-up");
      } else if (scroll_top < last_scroll_top) {
        $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
      } else {
        $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
});

// Making Navbar solid on scroll and added shadow
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".navbar").css("background", "#1461d4");
      $(".navbar").css("transition", "0.7s");
      $(".navbar").addClass("shadow p-2 rounded");
    } else {
      $(".navbar").css("background", "rgba(0, 0, 0, 0)");
      $(".navbar").css("transition", "0.7s");
      $(".navbar").removeClass("shadow p-2 rounded");
    }
  });
});
