
/*
Build Tower
6kyu

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

 */



function towerBuilder(nFloors) {
  var arrayTower = [];
  var block = "*";
  var spaces = " ";
  spaces = spaces.repeat(nFloors-1);
  while (arrayTower.length<nFloors) {
   arrayTower.push(spaces+block+spaces);
   spaces = spaces.slice(1);
   block = block+"**";
  }
 return arrayTower;
}
