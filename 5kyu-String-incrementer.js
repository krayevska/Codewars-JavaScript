/*

by parceval

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString (strng) {
  
  let strngDig = strng.replace (/[^\d.]/g, ''); 
  if(strngDig == "") return strng.concat("1");
  let num = Number(strngDig);
  let newNum = num + 1; 
  let l = num.toString().split('').length;
  let ll = newNum.toString().split('').length;
   
  return num == 0 ? strng.replace(/.$/,"1") 
         : l == ll ? strng.replace(new RegExp(num), newNum)
         : strngDig.length == num.toString().length ? strng.substr(0, (strng.length - l)) + newNum.toString()
         : strng.substr(0, (strng.length - ll)) + newNum.toString();
  }
