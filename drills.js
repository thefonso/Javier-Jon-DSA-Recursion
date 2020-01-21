
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

