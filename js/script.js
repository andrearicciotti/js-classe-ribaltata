// INTRO
// let date = new Date();
// console.log(date);

// let date = new Date(1234563463);
// console.log(date);

// let date = new Date(`09/10/0033`);
// console.log(date);

// let date = new Date(1990, 10, 12, 12, 30, 50, 415215);
// console.log(date);


// FOMATTAZIONE ORARIO
let date = new Date();
console.log(date);

console.log(date.toString());
console.log("--- riporta la stringa intera");
console.log("---");

console.log(date.toDateString());
console.log("--- riporta il giorno + la data in formato middle endian");
console.log("---");

console.log(date.toLocaleString());
console.log("--- riporta in formato little endiand con l' orario");
console.log("---");

console.log(date.toLocaleDateString()); 
console.log("--- riporta in formato little endian");
console.log("---");

console.log(date.toGMTString()); 
console.log("--- riporta in formato little endian + il giorno per il GMT (Greenwich Mean Time)");
console.log("---");

console.log(date.toUTCString()); 
console.log("--- riporta in formato little endian + il giorno per il UTC (Universal Time Coordinated");
console.log("---");

console.log(date.toISOString()); 
console.log("--- riporta la data nel formato standard stabilito dall' ISO, T separa ora da data e Z finale stabilisce l' UTC");
console.log("---");


// ESTRAPOLARE DATA - GET
// let date = new Date();
// console.log(date.getMonth());

// Esempio funzionamento interno metodo getDay
// var giorno;
// switch (z.getDay()) {
// case 0:
// giorno = "domenica";
// break;
// case 1:
// giorno = "lunedì";
// break;
// case 2:
// giorno = "martedì";
// break;
// case 3:
// giorno = "mercoledì";
// break;
// case 4:
// giorno = "giovedì";
// break;
// case 5:
// giorno = "venerdì";
// break;
// case 6:
// giorno = "sabato";
// break;
// }
// console.log("Oggi è " + giorno);


// MANIPOLARE DATA - SET

// let data = new Date();
// data.setFullYear(data.getFullYear() + 2);
// console.log(data);


// VISUALIZZARE ORA DI GREENWICH - UTC
// let oggi = new Date();
// console.log(`A Greenwich Sono le ${oggi.getUTCHours()}:${oggi.getUTCMinutes()}`);
// console.log(oggi.getUTCHours(), oggi.getUTCMinutes());
// console.log(oggi.getTimezoneOffset());


// CONVERSIONE DATA IN STRINGA
// let m = new Date(2023, 11, 30, 12, 30, 30);
// console.log(m.toDateString());
// console.log(m.toTimeString());


// OPERATORI LOGICI E METODO DATE
// let scadenza = new Date(2023, 8, 10);
// let scadenza = new Date(2023, 11, 10);
// let oggi = new Date();
// if (oggi < scadenza) messaggio = "Non ancora scaduto!";
// if (oggi > scadenza) messaggio = "Scaduto!";
// console.log(messaggio);
