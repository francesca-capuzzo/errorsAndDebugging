let string = "12; 7; 1,4; 2.1"
let numberArray = [];

try {
    numberArray = Parser.parseCsvLine(string);
} catch (error) {
    console.log(error.message);
    if(error instanceof PartialInvalidStringError){
        numberArray = error.partialResult;
    }
}

console.log(numberArray);


/////////////////////////////////////////////////////////////////////////////////
//ESERCIZIO A CASA:

let newString = "12; 13; 45; 23\n; 2.1; 13; 34; 21\n; 3.2; 12; 4; 22\n"

let newStringObj = "name; age; school; grade\n; pippo; 13; colombo; 3\n; pluto; 12; leopardi; 2\n; paperino; 11; bertani; 1\n"

/*--> array [tutti i numeri] senza \n;
--> array [[12, 13, 45, 23], [2.1, 13, 34, 21], [3.2, 12, 4, 22]]
--> "name; age; school; grade\n
    //pippo; 13; colombo; 3\n
    //pluto; 12; leopardi; 2\n
    //paperino; 11; bertani; 1\n"
--> [{name: "pippo", age: 13, school: "colombo", grade: 3},{name: "pluto", age: 12, school: "leopardi", grade: 2},{name: "paperino", age: 11, school: "bertani", grade: 1}]*/


let arrayFromString = Parser.cleanStringAndGenerateArray(newString);
//esercizio 1:
console.log(arrayFromString);
//esercizio 2:
console.log(Parser.generateSubArrays(arrayFromString, 4));


//esercizio 3:
let arrayFromString2 = Parser.cleanStringAndGenerateArray(newStringObj)
let multidimensionalArray = Parser.generateSubArrays(arrayFromString2, 4);
console.log(multidimensionalArray);

let obj1 = Parser.generateObjectFromArray(multidimensionalArray[1], multidimensionalArray[0]);
let obj2 = Parser.generateObjectFromArray(multidimensionalArray[2], multidimensionalArray[0]);
let obj3 = Parser.generateObjectFromArray(multidimensionalArray[3], multidimensionalArray[0]);
let newArray = [obj1, obj2, obj3];
console.log(newArray);

