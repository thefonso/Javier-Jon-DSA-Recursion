
/* 1 */

function countSheep(num) {
  if(num === 0) {
    return 'All sheep jumped over the fence';
  } 
  let sheep = num + ' another sheep jumps over the fence. ';

  return sheep + countSheep(num - 1);
}
console.log(countSheep(2));
console.log(countSheep(0));



/* 2 */
function powerCalculator(base, exp) {
  if(exp < 0) {
    return 'exponent should be >= 0';
  }

  if(exp === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, exp - 1);
  }
}
console.log(powerCalculator(10,2));
console.log(powerCalculator(10,-2));



/* 3 */
function reverseString(str) { 
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
  
console.log(reverseString('random'));


/* 4 */
function nthTriangularNumber(n) {
  if (n === 1) {
    return 1;
  } else
  //return n * (n+1)/2;
    return n + nthTriangularNumber(n-1);
}

console.log(nthTriangularNumber(6));


/* 5 */
const strSplitter = function(str) {
  if (str.length != 10) {
    return 'Please enter a date in the MM/DD/YYYY format!';
  }
  let strSplitter = [];
  let month = str.charAt(0).concat(str.charAt(1));
  let day = str.charAt(3).concat(str.charAt(4));
  let year = str.charAt(6).concat(str.charAt(7).concat(str.charAt(8).concat(str.charAt(9))));

  strSplitter.push(month, day, year);
  return strSplitter;

};

console.log(strSplitter('01/01/2020'));
console.log(strSplitter('00'));





/* 6 */
function fibIndex(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  if (num === 0) {
    return undefined;
  } else {
    return fibIndex(num - 1) + fibIndex(num - 2);
  }
}

console.log(fibIndex(8));
  
  

  

//1. input: 25    output: 11001

//2.

//3. code

function binaryRep(num) {
  //base case
  if(num <= 0) {
    return;
  }
  const binary = num % 2;
  return binaryRep(Math.floor(num/2)) + binary;
}

console.log(binaryRep(1));