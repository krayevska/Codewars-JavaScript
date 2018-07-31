
/*
Simple Pig Latin
5kyu

Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/



function pigIt(str){
 var arrayN = [];
   for (i=0; i<str.split(" ").length; i++) {
     var newstr = str.split(" ")[i].slice(1);
     newstr = newstr + str.split(" ")[i].slice(0,1) + "ay";
     arrayN.push(newstr);
   }
   return arrayN.join(" ");
 }