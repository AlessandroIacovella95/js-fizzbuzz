/* //*BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.*/

/* //*BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.*/

//Prendo il container dal DOM//
const bonus = document.querySelector('.bonus');

//Creazione numeri da 1 a 100 con ciclo **FOR**//
for (let i = 1; i < 100; i++) {

    // crea un nuovo elemento nel DOM
    let newElement = document.createElement('div');

    // attacca il div appena creato all'elemento bonus
    bonus.append(newElement);
    
    //SE i numeri sono multipli di 3 e mutlipli di 5, stampo la scritta FIZZBUZZ
    if (i % 3 == 0 && i % 5 == 0) {

    //inserisci il testo corretto in base alla condizione, nel newElement: appena creato
        newElement.classList.add ('custom')
        newElement.style.backgroundColor = '#F0466F'
        newElement.append('FizzBuzz');

    //ALTRIMENTI SE sono multipli solo di 3, stampo la scritta FIZZ
    } else if (i % 3 == 0) {
        newElement.classList.add ('custom')
        newElement.style.backgroundColor = '#0CD6A1'
        newElement.append('Fizz');

    //ALTRIMENTI SE sono multipli solo di 5, stampo la scritta BUZZ    
    } else if (i % 5 == 0) { 
        newElement.classList.add ('custom')
        newElement.style.backgroundColor = '#FFD166'
        newElement.append('Buzz');

    //ALTRIMENTI stampo il numero      
    } else {
        newElement.classList.add ('custom')
        newElement.style.backgroundColor = '#1389B2'
        newElement.append(i);
    }
}
