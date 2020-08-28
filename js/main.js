let a = -2;
let b = 2;

function myFun(num1, num2){
    
    let dodawanie = num1 + num2;
    let odejmowanie = num1 - num2;
    let mnozenie  = num1 * num2;
    let result;
    
     if(dodawanie < 0 || odejmowanie < 0 || mnozenie < 0){
         result = "Wynik jest nieprawidłowy";
        } else {
            result =
            "Wynik dodawania wynosi :" + dodawanie + '\n' +
            "Wynik odejmowania wynosi :" + odejmowanie + '\n' +
            "Wynik mnożenia wynosi :" + mnozenie;
        }
    return result;
}
console.log(myFun(a, b));

