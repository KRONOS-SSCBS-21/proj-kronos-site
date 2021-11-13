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
      $(".kronos-logo").attr("src" , "assets/images/kronos-logo-black-2.png");
      $(".navbar").css("background", "#fff");
      $( '.nav-link' ).each(function () {
        this.style.setProperty( 'color', '#000', 'important' );
      });
      $(".nav-button").removeClass("btn-outline-light").addClass("btn-outline-dark");
      $(".navbar-toggler-icon").addClass("navbar-toggler-icon-dark");
      $(".navbar-toggler").addClass("custom-navbar-toggler");
      $(".navbar").css("transition", "0.7s");
      $(".navbar").addClass("shadow p-2 rounded");
    } else {
      $(".kronos-logo").attr("src" , "assets/images/kronos-logo.png");
      $(".navbar").css("background", "none");
      $( '.nav-link' ).each(function () {
        this.style.setProperty( 'color', '#fff', 'important' );
      });
      $(".nav-button").removeClass("btn-outline-dark").addClass("btn-outline-light");
      $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-dark");
      $(".navbar-toggler").removeClass("custom-navbar-toggler");
      $(".navbar").css("background", "rgba(0, 0, 0, 0)");
      $(".navbar").css("transition", "0.7s");
      $(".navbar").removeClass("shadow p-2 rounded");
    }

    if($(window).width() <= 580){
      $( '.nav-link' ).each(function () {
        this.style.setProperty( 'color', '#000', 'important' );
      });
    }
  });
});
