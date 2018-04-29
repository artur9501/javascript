//$(function () {
//
//
//    $('#first').css({
//        color: 'red',
//        'background-color': 'green',
//
//
//    });
//});
//
//$(function () {
//
//    var paragraf = $('p').text();
//    console.log(paragraf);
//
//    var paragrafZmieniony = $('p').text("Hello World").text;
//    console.log(paragrafZmieniony)
//
//})

//Przykładowe zadanie z emaila
$(function () {

    var paragraf = $('p').first();
    console.log(paragraf.text());

    paragraf.text("Hello World");
    console.log(paragraf.text());

    var addHtml = $('#second').html("hello<br>world");
    addHtml.append("Dodanie na koniec");
    addHtml.prepend("dodanie na poczatek");
    addHtml.after("<p>XYZ</p>");

    $('h1').find('strong').remove();

    $('p').css({
        'font-size': '30px',
        'color': 'red',
    })
    $('h1').addClass('blue');
})
