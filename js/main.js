var liczba1 = 2;
var liczba2 = 3;

var dodawanie = liczba1 + liczba2;
var odejmowanie = liczba1 - liczba2;
var mnozenie = liczba1 * liczba2;


function multiply(liczba1, liczba2) {
    var x = dodawanie;
    console.log(x);
    
    var x = odejmowanie;
    console.log(x);

    var x = mnozenie;
    console.log(x);
    
    if (dodawanie > 0 && odejmowanie > 0 && mnozenie > 0) {
        console.log("Wynik dodawania wynosi " + dodawanie + " Wynik odejmowania wynosi " + odejmowanie + " Wynik mnożenia wynosi " + mnozenie);
    }else{
        console.log("Wynik jest ujemny");
    }
}
console.log(multiply());
