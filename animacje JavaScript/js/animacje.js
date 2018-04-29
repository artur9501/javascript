$(function () {
    $('p').css("background-color", "red");
    $('#button1').click(function () {
        $('p').hide(3000).show(3000);
    });
    $('#button2').click(function () {
        $('h1').fadeOut(3000).fadeIn(3000);
    });
    $('#button3').click(function () {
        $('h2').slideUp(3000).slideDown(3000);
    });
    animateDiv();

    function animateDiv() {
        $('div')
            .animate({
                width: '200px',
                height: '200px'
            }, 5000)
            .animate({
                width: '100px',
                height: '100px'
            }, 5000, animateDiv)
    }

})
