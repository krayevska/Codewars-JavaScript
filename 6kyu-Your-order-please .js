/*
Your order, please 
6kyu

Your task is to sort a given string. Each word in the String will contain a single number. 
This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
 */
 
 function order(words){
  var array = words.split(' ');
  var newArray = [];
    if (array.length==0) {return ('');}
    else {
     for (i=0; i<array.length; i++) {
     var pieceOfArray = array.slice(i, i+1);
     var index = /\d/.exec(pieceOfArray);
     newArray[index] = pieceOfArray;
     }
    words = newArray.join(' ');
    words = words.trim();
    return words; 
    }}
	
	