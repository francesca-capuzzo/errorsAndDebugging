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