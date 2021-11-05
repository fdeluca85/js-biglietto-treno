// alert ("hello world")


// richiesta Km
let kilometri = parseFloat(prompt("Inserisci i Km da percorrere"));
console.log(kilometri);


// richiesta età

let eta = parseInt(prompt("Inserisci la tua età"));
console.log(eta);


// prezzo tratta

let tratta = (kilometri * ".21");
console.log(tratta);


// sconto minorenni del 20%
let minorenni = (tratta * '20') / '100';
console.log(minorenni);


// sconto del 40% per i superiori di 65 anni
let senior = (tratta * '40') / '100';
console.log(senior);
