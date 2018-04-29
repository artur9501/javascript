$(function () {

    $('p').click(function () {
        $(this).css("color", "orange");
    })

    $('#button').on({
        'mouseenter': function () {
            $(this).css({
                'color': 'green',
                'background-color': 'blue'
            });
        },
        'mouseleave': function () {
            $(this).css({
                'color': 'blue',
                'background-color': 'green'
            })
        }

    })
})
