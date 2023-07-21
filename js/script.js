//Creazione numeri da 1 a 100 con ciclo **FOR**//
for (let i = 1; i<= 100; i++) {

    //SE i numeri sono multipli di 3 e mutlipli di 5, stampo la scritta FIZZBUZZ
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');

    //ALTRIMENTI SE sono multipli solo di 3, stampo la scritta FIZZ
    } else if (i % 3 == 0) {
        console.log('Fizz');

    //ALTRIMENTI SE sono multipli solo di 5, stampo la scritta BUZZ
    } else if (i % 5 == 0) {
        console.log('Buzz');

    // ALTRIMENTI stampo il numero    
    } else {
        console.log(i);
    }
    
}

