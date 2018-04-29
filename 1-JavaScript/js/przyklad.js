class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;

        this.opiszKsiazke = function () {

            if (this.przeczytana === true) {
                return "Ksiazka ma tytul " + this.tytul + " , autorem jest " + this.autor + " i zostala przeczytana.";
            } else {
                return "Ksiazka ma tytul " + this.tytul + " , autorem jest " + this.autor + " i nie zostala przeczytana.";
            }
        }
    }
}
var wiedzmin = new Ksiazka("Wiedzmin", "Andrzej Sapkowski", true);
var panTadeusz = new Ksiazka("PanTadeusz", "Adam Mickiewicz", false);
var potop = new Ksiazka("Potop", "Henryk Sienkiewicz", false);

var tablica = [wiedzmin, panTadeusz, potop];

function iloscPrzeczytanych() {
    var przeczytaneKsiazki = 0;
    tablica.forEach(function (element) {
        if (element.przeczytana) {
            przeczytaneKsiazki += 1;
        }
        console.log(element.opiszKsiazke());
    });
    console.log("liczba przeczytanych ksiazek wynosi: " + przeczytaneKsiazki);
}
iloscPrzeczytanych(tablica);
