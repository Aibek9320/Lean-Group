$(document).ready(function(){
    $("#home-slider").owlCarousel({
        items: 1,
        loop: true,
    });
    var certSlider = $('#certificates-slider');
    certSlider.owlCarousel({
        items: 5,
        margin: 30
    })
    $('.custom-next').click(function() {
        certSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        certSlider.trigger('prev.owl.carousel', [300]);
    })
  });