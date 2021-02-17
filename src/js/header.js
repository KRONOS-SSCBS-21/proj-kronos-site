window.addEventListener("DOMContentLoaded", () => {

    /**
     * Create sticky header that hides on scoll down and show on scroll up
     */

    $('body .kronos-block-container').css('padding-top', $('.navbar').outerHeight() + 60 + 'px')
    // detect scroll top or down
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if(scroll_top == 0) {
                $('.smart-scroll').removeClass('scrolled-up')
            }
            else if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
})