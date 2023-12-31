/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
La stampa può essere fatta ovviamente in console.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare passo dopo passo
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" anche su un foglietto
Buon lavoro e buon divertimento! */

for(i=1; i<=100; i++){
    console.log(i);

    if(i % 3 == 0 && i % 5 == 0){
        document.getElementById("containerSquare").innerHTML += `
            <div class="square_orange">
                <p class="text-center text-white fs-3 fw-3 vertical-align-square">FizzBuzz</p>
            <div>
        `
        console.log(i + " Divisibile da 3 e 5");
    } else if (i % 3 == 0){
        document.getElementById("containerSquare").innerHTML += `
            <div class="square_red">
                <p class="text-center text-white fs-3 fw-3 vertical-align-square">Fizz</p>
            <div>
        `
        console.log(i + " Divisibile solo da 3");
    } else if (i % 5 == 0){
        document.getElementById("containerSquare").innerHTML += `
            <div class="square_green">
                <p class="text-center text-white fs-3 fw-3 vertical-align-square">Buzz</p>
            <div>
        `
        console.log(i + " Divisibile solo da 5");
    }  
    else {
        document.getElementById("containerSquare").innerHTML += `
            <div class="square_blue">
                <p class="text-center text-white fs-3 fw-3 vertical-align-square">${i}</p>
            <div>
        `
        console.log(i + " Non divisibile da 3 o 5");
    }

}