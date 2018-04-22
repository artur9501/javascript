class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log("Nazywam się: " + this.imie + " " + this.nazwisko);
    }
}

var agata = new Osoba("Agata", "Biesaga");

console.log(agata);

agata.wyswietlInfo();



//var kaja = {
//
//    imie: "Kaja",
//    wzrost: 160,
//    przedstawOsobe: function () {
//        console.log(this.imie);
//    }
//}
//var artur = {
//
//    imie: "Artur",
//    wzrost: 186,
//    przedstawOsobe: function () {
//        console.log(this.imie);
//    }
//}
//
//kaja.przedstawOsobe();
//artur.przedstawOsobe();
//
//console.log(artur);
