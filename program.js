// function repeatCharacters(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i].repeat(2);
//     }
//     return result;
// }
// console.log(repeatCharacters("String"));
// console.log(repeatCharacters("Ronaldo"));
// console.log(repeatCharacters("Su"));
// ---------------------------------------------------------
// function checkForSeven(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] == 7) {
//             return 'Boom';
//         }
//     }
//     return 'Not';
// }
// console.log(checkForSeven("1,2,3,4,5,6,7,8"));
// console.log(checkForSeven("1,2,3,4,5,6,8"));
// console.log(checkForSeven("1,97,8"));
// ------------------------------------------------------------
// function removeNumbers(str) {
//     let sum = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] < '0' || str[i] > '9') {
//             sum += str[i];
//         }
//     }
//     return sum;
// }
// console.log(removeNumbers("mubashir1"));
// console.log(removeNumbers("mu68684bashir1"));
// console.log(removeNumbers("mub16641r1"));
// ---------------------------------------------------------------
// function reverser(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (str[i] == str[i].toUpperCase()) {
//             reversed += str[i].toLowerCase();
//         } else {
//             reversed += str[i].toUpperCase();
//         }
//     }
//     return reversed;
// }
// console.log(reverser("Hello World"));
// console.log(reverser("Hello World"));
// console.log(reverser("Hello World"));
// -------------------------------------------------------------------
// function removeDuplicates(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!result.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(removeDuplicates("hellllllllo"));
// console.log(removeDuplicates("apppppple"));
// ----------------------------------------------------------------------
// function longestWord(num1) {
//     let num2 = num1.split(' ');
//     let sum = ''; 

//     for (let i = 0; i < num2.length; i++) { 
//         if (num2[i].length > sum.length) {
//             sum = num2[i];
//         }
//     }

//     return sum;
// }
// console.log(longestWord("Hello darkness my old friend"));
// console.log(longestWord("Hello there Mate"));
// console.log(longestWord("I play fooltball"));
// ------------------------------------------------------------------------
// function sumOfCubes(num1) {
//     let sum = 0;
//     for (let i = 1; i <= num1; i++){
//         sum += i ** 3;
//     }
//     return sum;
// }
// console.log(sumOfCubes(3));
// console.log(sumOfCubes(7));
// console.log(sumOfCubes(9));
//-------------------------------------------------------------------------
// function getSumOfDigit (number){
//     let cnt = 0;
//     for(let i = number; i > 0; i=Math.floor(i / 10) ){
//         cnt += i % 10;
//     }
//     return cnt;
// }
// console.log(getSumOfDigit(12345));
// console.log(getSumOfDigit(98765));
//------------------------------------------------------------------------
// function counter1 (){
//   let cnt = 0;
//   return ()=>{
//     cnt++;
//     return cnt;
//   }
// }
// let counter = counter1();
// console.log(counter(1));
// console.log(counter(2));
//------------------------------------------------------------------------
// function sumCubes(num1) {
//     if (num1 == 0) {
//         return 0;
//     }

//     else {
//         return Math.pow(num1, 3) + sumCubes(num1 - 1);
//     }
// }

// console.log(sumCubes(3));



