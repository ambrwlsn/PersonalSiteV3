$(document).ready(function() {
    $('.Link').click(function(event) {
        console.log(this);
        console.log($(this).attr('href'));
        event.preventDefault();
        $(window).scrollTo($(this).attr('href'), 1000, { easing: 'easeInCubic' });
        //$(window).scrollTo('li:eq(15)', 2500, {easing:'elasout'});


    });


    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });




    $(".cross").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});
