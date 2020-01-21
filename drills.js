
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
  

/* 7 */
function factorial(num){
  if (num === 0)
  { return 1; }
  else
  { return num * factorial( num - 1 ); }
}

console.log(factorial(4));


/* 8 && 9 */
const maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escape(maze, str = '') {
  // console.log(str);
  const rs = str.split('').filter(c => c === 'R').length;
  const ls = str.split('').filter(c => c === 'L').length;
  const us = str.split('').filter(c => c === 'U').length;
  const ds = str.split('').filter(c => c === 'D').length;
  const x = rs - ls;
  const y = ds - us;

  let up;
  let right;
  let down;
  let left;
  if (maze[y - 1]) up = maze[y - 1][x];
  right = maze[y][x + 1];
  if (maze[y + 1]) down = maze[y + 1][x];
  left = maze[y][x - 1];

  //base
  if ( // if no possible moves
    (up === undefined || up === '*') &&
    (right === undefined || right === '*') &&
    (down === undefined || down === '*') &&
    (left === undefined || left === '*')
  ) { return; }
  // if exit is found;
  if (up === 'e') console.log(str + 'U');
  if (right === 'e') console.log(str + 'R');
  if (down === 'e') console.log(str + 'D');
  if (left === 'e') console.log(str + 'L');

  //recursive
  if (up && up !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'U');
  }
  if (right && right !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'R');
  }
  if (down && down !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'D');
  }
  if (left && left !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'L');
  }
}

escape(maze);


/* 10 */
function anagram(str) {
  if (str.length < 2) {
    return str;
  } else {
    let shuffle = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (str.indexOf(char) != i)
        continue;
      
      let moreLetters = str.slice(0, i) + str.slice(i + 1, str.length);
      
      for (let remainderLetters of anagram(moreLetters))
        shuffle.push(char + remainderLetters);
    }
    return shuffle;
  }
}

let thisString = 'abc';
console.log(anagram(thisString));



/* 11 */
let input = {
  'Zuckerberg': {
    'Schroepher': {
      'Bosworth': {
        'Steve':{},
        'Kyle':{},
        'Andra':{}
      },
      'Zhao':{
        'Richie':{},
        'Sofia':{},
        'Jen':{}
      },
      'Badros': {
        'John':{},
        'Mike':{},
        'Pat':{}
      },
      'Parikh': {
        'Zach':{},
        'Ryan':{},
        'Tes':{}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina':{},
        'Michelle':{},
        'Josh':{}
      },
      'Swain': {
        'Blanch':{},
        'Tom':{},
        'Joe':{}
      },
      'Frankovsky': {
        'Jasee':{},
        'Brian':{},
        'Margaret':{}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie':{},
        'Julie':{},
        'Annie':{}
      },
      'Hernandez': {
        'Rowi':{},
        'Inga':{},
        'Morgan':{}
      },
      'Moissinac': {
        'Amy':{},
        'Chuck':{},
        'Vinni':{}
      },
      'Kelley': {
        'Eric':{},
        'Ana':{},
        'Wes':{}
      }
    }}};
  
function iterate(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    iterate(data[key], depth + 1);
  });
}
          
        
      
  
  

  

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