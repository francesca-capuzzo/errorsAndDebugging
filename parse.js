/* It takes a string as input. 
It removes spaces from the string. 
It changes the special characters in the string. 
It separates the string on the special characters. 
It transforms the string array into a number array. 
It returns the number array. 

The function is divided into three main parts: 

* The first part is the part that takes the string as input. 
* The second part is the part that removes spaces from the string. 
* The third part is the part that changes the special characters */

class Parser{
    
/**
 * * It takes a string as input. 
 * * It removes spaces from the string. 
 * * It changes the special characters in the string. 
 * * It separates the string on the special characters. 
 * * It transforms the string array into a number array. 
 * * It returns the number array. 
 * 
 * The function is divided into three main parts: 
 * 
 * * The first part is the part that takes the string as input. 
 * * The second part is the part that removes spaces from the string. 
 * * The third part is the part that changes the special characters in the string. 
 * 
 * The first part is divided into two sub-parts: 
 * 
 * * The first sub-part is the part that checks if the string is empty. 
 * * The second sub-part is the part that checks if the string is valid. 
 * 
 * The second part is divided into two sub-parts:
 * @param {string} string - The string to be parsed.
 * @returns an array of numbers.
 */
    static parseCsvLine(string){

        const IsStringEmpty = string.length === 0;

        if (IsStringEmpty) {
            throw new EmptyStringError("Stringa vuota")
        }

        const stringNoSpaces = this.removeSpaces(string);
        const stringNoCommas = this.changeSpecialChar(stringNoSpaces);
        const arrayOfString = this.separateStringOnSpecialChar(stringNoCommas);
        const numberArray = this.transformStringArrayInNumberArray(arrayOfString);

        const CouldNotParseAllArray = numberArray === 0;

        if (CouldNotParseAllArray) {
            throw new InvalidStringError("Stringa invalida")
        }

        const AtLeastOneParseIsFailed = numberArray.length < arrayOfString.length;

        if (AtLeastOneParseIsFailed) {
            throw new PartialInvalidStringError("Parzialmente invalido", numberArray);
        }
        return numberArray;
    }


    static replaceAll(string, charToReplace, newChar){
        const regex = new RegExp(charToReplace, "g");
        return string.replace(regex, newChar);
    }

    static removeSpaces(string){
        return Parser.replaceAll(string, " ", "");
    }

    static changeSpecialChar(string){
        return Parser.replaceAll(string, ",", ".");
    }

    static separateStringOnSpecialChar(string){
        return string.split(";");
    }

 /**
  * *Convert a string array into a number array.*
  * 
  * The above function is a JavaScript function. 
  * 
  * The function takes a string array as input and returns a number array as output. 
  * 
  * The function uses a for loop to iterate over the string array. 
  * 
  * For each string in the array, the function checks if the string can be converted to a number. 
  * 
  * If the string can be converted to a number, the function adds the number to the number array. 
  * 
  * The function returns the number array
  * @param array - The array to be transformed.
  * @returns an array of numbers.
  */
    static transformStringArrayInNumberArray(array){
        const numberArray = [];
        for (const string of array) {
            const number = parseFloat(string);
            if (isNaN(number) === false) {
                numberArray.push(number);
            }
        }
        return numberArray;
    }

  
    /////////////////////////////////////////////////////////////////////////////////////

    static cleanStringAndGenerateArray(string){
        const stringNoSpaces = this.replaceAll(string, " ", "");
        const stringWithoutN = this.replaceAll(stringNoSpaces, "\n", "");
        const stringSplit = this.separateStringOnSpecialChar(stringWithoutN);
        return stringSplit;
    }

  

    static generateSubArrays(array, len) {
        let chunks = [];
        let i = 0;
        let n = array.length;
        while (i < n) {
            chunks.push(array.slice(i, i += len));
        }
        return chunks;
    }



    static generateObjectFromArray(array, keys) {
        let object={};
        let values = array;
        for (let i = 0; i < array.length; i++) {
            object[keys[i]] = values[i];
        }
        return object;
    }


      // static generateSubArrays(string){
    //     let multidimensionalArray = [];
    //     const array = this.removeNewLine(string);
    //     const array1 = multidimensionalArray.push(array.slice(0, 4));
    //     const array2 = multidimensionalArray.push(array.slice(4, 8));
    //     const array3 = multidimensionalArray.push(array.slice(8, 12));
    //     return multidimensionalArray;
    // }


     // static generateObjectFromArray(array) {
    //     let object=[];
    //     let keys = array[0];
    //     let newArray = array[1].concat(array[2]).concat(array[3]);
    //     let subArrays = this.generateSubArrays(newArray, 4);
    //     console.log(subArrays);
    //     for (let k = 0; k < subArrays.length; k++) {
    //         const values = subArrays[k];
    //         console.log(values);
    //         for (let i = 0; i < 4; i++) {
    //             let obj2 = {};
    //             obj2[keys[i]] = values[i];
    //             object.push(obj2);
    //         }
    //     }
    //     return object;  
    // }

    
    // static generateObjectFromArray(array) {
    //     let object={};
    //     let keys = array[0];
    //     let newArray = array[1].concat(array[2]).concat(array[3]);
    //     console.log(newArray);
    //     let values = newArray;
    //     for (let i = 0; i < array.length; i++) {
    //         object[keys[i]] = values[i];
    //     }
    //     return object;
    // }

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


class PartialInvalidStringError extends Error{
    constructor(message, partialResult){
        super(message);
        this.partialResult = partialResult;
    }
}




