/* 
Recover a secret string from random triplets
4kyu

There is a secret string which is unknown to you. 
Given a collection of random triplets from the string, recover the original string.
A triplet here is defined as a sequence of three letters such that 
each letter occurs somewhere before the next in the given string. 
"whi" is a triplet for the string "whatisup".
As a simplification, 
you may assume that no letter occurs more than once in the secret string.
You can assume nothing about the triplets given to you 
other than that they are valid triplets 
and that they contain sufficient information to deduce the original string. 
In particular, this means that the secret string 
will never contain letters that do not occur in one of the triplets given to you.

*/



var recoverSecret = function(triplets) {
var arrayAllLetters = [];
var arrayOfArrays = [];
var resArray = [];
  //making all-letters-array 
  for (i = 0; i<triplets.length; i++){                  
    for (ii = 0; ii<triplets[i].length; ii++){ 
     var patt = new RegExp (triplets[i][ii]);    
     var res = patt.test(arrayAllLetters); 
    if (!res){arrayAllLetters.push(triplets[i][ii])}}}
   // making arrays of all letter to the right for each letter 
   for (i=0; i<arrayAllLetters.length; i++) {           
     var rigthArray = [];
       for (ii=0; ii<triplets.length; ii++){
         var index = triplets[ii].indexOf(arrayAllLetters[i]);
         if (index>=0){
          for (iii=index+1; iii<triplets[ii].length; iii++){
          var patt = new RegExp (triplets[ii][iii]);    
          var res = patt.test(rigthArray); 
          if (!res){rigthArray.push(triplets[ii][iii])}}}
          }
	// making one array of rightArrays	  
    arrayOfArrays.push(rigthArray);                        
   }
    // adding to rightArrays letters to the right for each letter in rightArray                     
    for(i=0; i<arrayOfArrays.length; i++) {                
      for (ii=0; ii<arrayOfArrays[i].length; ii++) {
        var patt = arrayOfArrays[i][ii]; 
        var index = arrayAllLetters.indexOf(patt);
          if (arrayOfArrays[index].length>0){
           for (iii=0; iii<arrayOfArrays[index].length; iii++){
             var patt = new RegExp (arrayOfArrays[index][iii]);    
             var res = patt.test(arrayOfArrays[i]); 
          if (!res){arrayOfArrays[i].push(arrayOfArrays[index][iii]);}}}}
   }
    // one more time adding to rightArrays letters to the right for each letter in rightArray 
    for(i=(arrayOfArrays.length-1); i>=0; i--) {              
      var arrayarraylen = arrayOfArrays[i].length;
        for (ii=0; ii<arrayarraylen; ii++) {
          var patt = arrayOfArrays[i][ii]; 
          var index = arrayAllLetters.indexOf(patt);
            for (iii=0; iii<arrayOfArrays[index].length; iii++){
              var patt = new RegExp (arrayOfArrays[index][iii]);    
              var res = patt.test(arrayOfArrays[i]); 
               if (!res){arrayOfArrays[i].push(arrayOfArrays[index][iii]);}} 
      }
	  //from length of rightArrays finding out index of letter in result
      resArray[arrayAllLetters.length-arrayOfArrays[i].length-1] = arrayAllLetters[i]; 
   }
   return resArray.join('');
}
