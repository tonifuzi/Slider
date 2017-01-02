var previousSlideNumber;
var isAnimating = false;

$('.item').on('mouseover', function() {
    var te = $(this).text();
    $('.title').text(te);

});


$('.item').click(function(e){
    e.preventDefault();
    e.stopPropagation();
});


$(".item").mouseover(function(e) {
    

    if (isAnimating) {
        return;
    }


    var trgt = e.target;
    var hoveredSlideNumber = trgt.getAttribute('data-djuro');

    if (hoveredSlideNumber == previousSlideNumber) {
        return;
    }


    // image activation
    $('.bcg').removeClass('active');
    $('.bcg' + hoveredSlideNumber).addClass('active');

    // color change for numbers

    var hoveredSlideColor = trgt.getAttribute('data-color');

    $('.animated_numbers').css('color', hoveredSlideColor);

    $('.title').css('color', hoveredSlideColor);






    // link activation
    $('.first_number .bottom_number').text(hoveredSlideNumber.charAt(0));
    $('.second_number .bottom_number').text(hoveredSlideNumber.charAt(1));
    $('.first_number .top_number').text(hoveredSlideNumber.charAt(0));
    $('.second_number .top_number').text(hoveredSlideNumber.charAt(1));

    var resetPos = "-100%";
    var topPos = "0";
    var bottomPos = "-200%";
    var speedAnimation = 250;


    isAnimating = true;

    if (hoveredSlideNumber > previousSlideNumber) {

        $('.first_number').finish().animate({
            "top": topPos
        }, speedAnimation, function() {
            $('.first_number').css({ "top": resetPos });
            $('.first_number .middle_number').text(hoveredSlideNumber.charAt(0));
        });

        $('.second_number').finish().delay(60).animate({
            "top": topPos
        }, speedAnimation, function() {
            $('.second_number').css({ "top": resetPos });
            $('.second_number .middle_number').text(hoveredSlideNumber.charAt(1));
            isAnimating = false;
        });
    } else {
        // isAnimating = true;

        $('.first_number').finish().animate({
            "top": bottomPos
        }, speedAnimation, function() {
            $('.first_number').css({ "top": resetPos });
            $('.first_number .middle_number').text(hoveredSlideNumber.charAt(0));
        });

        $('.second_number').finish().delay(60).animate({
            "top": bottomPos
        }, speedAnimation, function() {
            $('.second_number').css({ "top": resetPos });
            $('.second_number .middle_number').text(hoveredSlideNumber.charAt(1));
            isAnimating = false;
        });
    }

    previousSlideNumber = hoveredSlideNumber;


})
