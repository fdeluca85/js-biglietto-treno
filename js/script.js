// alert ("hello world")


// richiesta Km
let kilometri = parseFloat(prompt("Inserisci i Km da percorrere"));
document.getElementById("kilometri").innerHTML = kilometri + "km";
// console.log(kilometri);


// richiesta età

let eta = parseInt(prompt("Inserisci la tua età"));
document.getElementById("eta").innerHTML = eta;
// console.log(eta);


// prezzo tratta

let tratta = (kilometri * ".21");
document.getElementById("tratta").innerHTML = tratta.toFixed( 2 ) + "€";
// console.log(tratta);



// sconto minorenni del 20%
let scontominorenni = (tratta * '20') / '100';
// console.log(scontominorenni);



// sconto del 40% per i superiori di 65 anni
let scontosenior = (tratta * '40') / '100';
// console.log(scontosenior);


// prezzo finale
let prezzo;
            // prezzo minorenni
if (eta < 18) {
    prezzo = (tratta - scontominorenni)
// console.log (tratta - scontominorenni);
} 
            // prezzo senior
else if (eta >= 65) {
    prezzo = (tratta - scontosenior)
    // console.log (tratta - scontosenior);
    }

else {
    prezzo = tratta
    // console.log (tratta);
    }

    document.getElementById("prezzo").innerHTML = prezzo.toFixed( 2 ) + "€";
    