$(function () {
    $('p').eq(1).css("background-color", "green");
    $('p').addClass(function (index) {
        return "paragraf-" + index;
    })

});
