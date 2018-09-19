var liczba1 = 2;
var liczba2 = 3;


function dzialania() {
    function wdodawanie(){
        var dodawanie = liczba1 + liczba2;
        var x = dodawanie;
    
        if (x > 0==true) {
            console.log("Wynik dodawania wynosi " + dodawanie);
        }else{
            console.log("Wynik jest ujemny");      
        }
    }wdodawanie();
    function wodejmowanie() {
        var odejmowanie = liczba1 - liczba2;
        var x = odejmowanie;
        
        if (x > 0==true) {
            console.log("Wynik odejmowanie wynosi " + odejmowanie);
        }else{
            console.log("Wynik jest ujemny");      
        }
    }wodejmowanie();
    function wmnozenie() {
        var mnozenie = liczba1 * liczba2;
        var x = mnozenie;
        
        if (x > 0==true) {
            console.log("Wynik mnozenia wynosi " + mnozenie);
        }else{
            console.log("Wynik jest ujemny");
        }
    }wmnozenie();
}
dzialania();




/*Notatki
var liczba1 = 2;
var liczba2 = 3;


function wdodawanie() {
    var dodawanie = liczba1 + liczba2;
    var x = dodawanie;
    
    if (x > 0==true) {
        console.log("Wynik dodawania wynosi " + dodawanie);
    }else{
        console.log("Wynik jest ujemny");      
    }
    function wodejmowanie() {
        var odejmowanie = liczba1 - liczba2;
        var x = odejmowanie;
        
        if (x > 0==true) {
            console.log("Wynik odejmowanie wynosi " + odejmowanie);
        }else{
            console.log("Wynik jest ujemny");      
        }
    
        function wmnozenie() {
            var mnozenie = liczba1 * liczba2;
            var x = mnozenie;
            
            if (x > 0==true) {
                console.log("Wynik mnozenia wynosi " + mnozenie);
            }else{
                console.log("Wynik jest ujemny");
            }
        }
    }
}
console.log(wdodawanie());
console.log(wodejmowanie());
console.log(wmnozenie());

*/