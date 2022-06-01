jQuery( document ).ready(function() {
    // console.log('test');
    var mywindow = jQuery(window);
    updateStyling(mywindow.scrollTop());
    console.log(mywindow.scrollTop());

    var mywindow = jQuery(window);
    var mypos = mywindow.scrollTop();
    let scrolling = false; /* For throlling scroll event */
    window.addEventListener('scroll', function() {
        console.log('scrolling');
        mypos = mywindow.scrollTop();
        scrolling = true;
    });
    setInterval(() => {
        if (scrolling) {
            scrolling = false;
            updateStyling(mypos);
        }
    }, 200);

    function updateStyling(mypos){
        if (mypos >= 20) {
            jQuery('#header-navbar').addClass('header-navscroll');
        } else {
            jQuery('#header-navbar').removeClass('header-navscroll');
        }
    }
});
