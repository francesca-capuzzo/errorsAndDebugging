// 1 - USE STRICT:

"use strict";

//è ciò che evita un sacco di comportamenti strani di javascript che con la dicitura "use strict" segnerà errori di stesura del codice:
//pippo = "ciao" ---> javascript non darebbe nessun errore se non ci fosse "use strict" ma se invece lo inserisco, mi genererà un codice di errore dicendo che la variabile pippo non è stata definita.

//***********************************************************************************************************************************************************

// 2 - COMMENTS AND EXPLICIT FUNCTION NAMES:

function checkIfIsEven(numberToCheck) {
    return numberToCheck % 2 === 0;
}

function check(n) { //check if number is even
    return n % 2 === 0;
}

//è importante utilizzare nomi di funzioni esplicative piuttosto che tanti commenti vicino a funzioni con nomi stupid!! questo perchè i commenti vanno mantenuti così come il resto del codice:

//***********************************************************************************************************************************************************

// 3 - CONSOLE.LOG():

let pippo = "ciao";
let pluto = 4;
let paperino = false;

console.log("🚀 ~ file: main.js ~ line 29 ~ pippo, pluto, paperino)", pippo, pluto, paperino);
//con l'estensione TURBO CONSOLE LOG, seleziono le funzioni loggate + CTRL + ALT + L e lui prepara già la funzione console.log con la stringa relativa agli oggetti e dove si trovano!! 

//***********************************************************************************************************************************************************

// 4 - CONSOLE.TABLE():

let array = ["pippo", "pluto", "paperino"];
console.table(array);
//nel log l'array sarà messo in una tabella e con tanti oggetti diventa decisamente più leggibile e carino.

let stud1 = {name: "Andrea", age: 12};
let stud2 = {name: "Francesca", age: 16};
let stud3 = {name: "Emanuele", age: 18};
let stud4 = {name: "Gloria", age: 20};
let stud5 = {name: "Francesco", age: 13};

const array2 = [stud1, stud2, stud3, stud4, stud5];
console.table(array2);
//con gli oggetti viene anche più figo perchè separa key:value e index!!


let player = {name: "andrea", game: "space invader", age: 30, score: 112};                
console.log("🚀 ~ file: main.js ~ line 57 ~ player", player);
console.log("🚀 ~ file: main.js ~ line 57 ~ player", JSON.stringify(player));
player.score = 200;
//NB: in questo caso succede qualcosa di particolare --> nel log, il valore di score è 112 ma aprendo l'oggetto, cambia a 200;
//questo perchè cliccando sull'oggetto nel log, viene visualizzato lo stato dell'oggetto nel momento in cui clicco!!!
//per evitare questo è necessario fare un'istantanea tramite JSON!!

//***********************************************************************************************************************************************************

// 5 - DEBUGGER:

let number = 300;
let isEven = checkIfIsEven(number);
// A ---> posiziono un flag sui numeri direttamente nella CONSOLE del browser, ricarico la pagina ed esce il debugger --> per entrare nelle funzioni devo utilizzare la freccia quadrata in giù altrimenti il debugger le salta.
// B ---> stessa cosa se scrivo direttamente DEBUGGER; in ogni punto del codice;

//***********************************************************************************************************************************************************

// 6 - PARSE: trasformare una stringa in un oggetto da utilizzare (JSON.parse è un esempio)

function parseStringToNumber(string) {                                  
    const number = parseInt(string);          //PARSE INTEGER
    return number;
}

console.log(parseStringToNumber("2"));        //---> result: 2
console.log(parseStringToNumber("2.1"));      //---> result: 2
console.log(parseStringToNumber("2,1"));      //---> result: 2
console.log(parseStringToNumber("2pippo"));   //---> result: 2
console.log(parseStringToNumber("pippo2"));   //---> result: NaN
console.log(parseStringToNumber("pippo"));    //---> result: NaN



function parseStringToNumberFloat(string) {                                  
    const number = parseFloat(string);             //PARSE FLOAT
    return number;
}

console.log(parseStringToNumberFloat("2"));        //---> result: 2
console.log(parseStringToNumberFloat("2.1"));      //---> result: 2.1
console.log(parseStringToNumberFloat("2,1"));      //---> result: 2
console.log(parseStringToNumberFloat("2pippo"));   //---> result: 2
console.log(parseStringToNumberFloat("pippo2"));   //---> result: NaN
console.log(parseStringToNumberFloat("pippo"));    //---> result: NaN

//***********************************************************************************************************************************************************

// 7 - ERROR CORRECTION:

function parseGeneric(string) {
    let stringNumber = string;
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".");   //sostituisco la virgola con il punto in modo che 2,1 venga visualizzato e tradotto come 2.1:
    }
    const number = parseFloat(stringNumber);
    return number;
}

console.log(parseGeneric("2"));        //---> result: 2
console.log(parseGeneric("2.1"));      //---> result: 2.1
console.log(parseGeneric("2,1"));      //---> result: 2.1
console.log(parseGeneric("2pippo"));   //---> result: 2
console.log(parseGeneric("pippo2"));   //---> result: NaN
console.log(parseGeneric("pippo"));    //---> result: NaN



let age = parseGeneric("13");

if (isNaN(age)) {                                   //ISNAN è una funzione di Javasript che controlla se il risultato della funzione è NaN = true;
    console.log("Non sono riuscito a convertire");
} else {
    console.log("age: " + age);
}



function parseGenericWithThrow(string) {
    if (string.length === 0) {
        throw new Error("Stringa vuota");
    }
    let stringNumber = string;
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".");   
    }
    const number = parseFloat(stringNumber);
    if (isNaN(number)) {                            //AGGIUNGO ISNAN E THROW NEW ERROR nella funzione così che mi restituisca un errore se la stringa è diversa da quella che mi aspettavo
        throw new Error("Stringa non valida");      //ERROR è UNA CLASSE INTRINSECA DI JAVASCRIPT
    }
    return number;
}




class EmptyStringError extends Error{
    constructor(message){
        super(message);
    }
}


class InvalidStringError extends Error{
    constructor(message){
        super(message);
    }
}



let age2;


// try {
//     // age2 = parseGenericWithThrow("12");
//     // age2 = parseGenericWithThrow("coglione");
//     age2 = parseGenericWithThrow("");
//     console.log(age2);
// } catch (error) {
//     console.log(error.message);
// }


try {
    // age2 = parseGenericWithThrow("12");
    // age2 = parseGenericWithThrow("coglione");
    age2 = parseGenericWithThrow("");
    console.log(age2);
} catch (error) {

    if (error.message === "Stringa vuota") {
        age2 = 0;
        console.log("age: " + age2);
    }
    console.log(error.message);
    console.log("Inserisci nuovamente");
}




function parseGenericWithClasses(string) {
    if (string.length === 0) {
        throw new EmptyStringError("Stringa vuota");
    }
    let stringNumber = string;
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".");   
    }
    const number = parseFloat(stringNumber);
    if (isNaN(number)) {                           
        throw new InvalidStringError("Stringa non valida");
    }
    return number;
}



try {
    // age2 = parseGenericWithThrow("12");
    // age2 = parseGenericWithThrow("coglione");
    age2 = parseGenericWithClasses("");
    console.log(age2);
} catch (error) {

    if (error instanceof EmptyStringError) {
        console.log(error.message);
        age2 = 0;
        console.log("age: " + age2);
    } else {
        console.log(error.message);
        console.log("Inserisci nuovamente");
    }
}