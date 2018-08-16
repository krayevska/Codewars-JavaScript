/* 
Replace With Alphabet Position
6kyu

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.
*/

function alphabetPosition(text) {
  var lcs = text.toLowerCase();
  var r = "";
  for (i=0; i<lcs.length; i++) 
   if (lcs.charCodeAt(i) > 96 && lcs.charCodeAt(i) < 123)
    r += (lcs.charCodeAt(i)-96).toString() + " ";
  return r.slice(0, r.length-1);
}