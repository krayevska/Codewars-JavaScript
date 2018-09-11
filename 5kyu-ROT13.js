/*
ROT13
5kuy

How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
I found this joke on USENET, but the punchline is scrambled. 
Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) 
is frequently used to obfuscate jokes on USENET.
Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. 
Test examples:
rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

function rot13(str) {
 var pattAlph = /[a-z]/i;
 var strNew = '';
   for (i=0; i<str.length; i++){
     if (!pattAlph.test(str[i])){strNew = strNew + str[i];}
     else {  
     var letterCode = str.charCodeAt(i);
     var letter = str[i];
      if (letterCode>=65&&letterCode<=90){
        letterCode = letterCode>77&&letterCode<=90 ? 64 + (13 - (90 - letterCode)) : letterCode + 13;
       }
      if (letterCode>=97&&letterCode<=122){
       letterCode = letterCode>109&&letterCode<=122 ? 96 + (13 - (122 - letterCode)) : letterCode + 13;
       }
      letter = String.fromCharCode(letterCode);
      strNew = strNew + letter;
     }
   }
    return strNew;
}