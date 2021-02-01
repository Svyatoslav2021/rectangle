$(".photo").each(function(){

    $(this).mouseover(function(){

        $(this).css({
            "transform":"translateY(-100%)",
            "transition":"1s"
        });

        $(this).parent().find(".photo2").css({
            "transform":"translateY(0%)",
            "transition":"1"
        });

    });

    $(this).mouseleave(function(){

        $(this).parent().find(".photo").css({
            "transform":"translateY(0%)",
            "transition":"1s"
        });

        $(this).parent().find(".photo2").css({
            "transform":"translateY(100%)",
            "transition":"1s"
        });

    });

});

$(".photo2").each(function(){

    $(this).mouseover(function(){

        $(this).parent().find(".photo").css({
            "transform":"translateY(-100%)",
            "transition":"1s"
        });

        $(this).parent().find(".photo2").css({
            "transform":"translateY(0%)",
            "transition":"1s"
        });

    });

    $(this).mouseleave(function(){

        $(this).parent().find(".photo").css({
            "transform":"translateY(0%)",
            "transition":"1s"
        });

        $(this).parent().find(".photo2").css({
            "transform":"translateY(100%)",
            "transition":"1s"
        });

    });

});
$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
  }).owlCarousel({
  	// smartSpeed: 1000,
    // dragEndSpeed: 500,
    items: 1,
    loop:false,
    margin:0,
    nav:false
});