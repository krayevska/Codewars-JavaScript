/*
Valid Parentheses
5kyu

Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, 
and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

You may assume that the input string will only contain 
opening and closing parenthesis and will not be an empty string.
*/

function validParentheses(parens){
  if(parens[0]==")"||parens[parens.length-1]=="(")return false;
  var l = [];
  var r = [];
  for (p=0; p<parens.length; p++){
   if (parens[p]=="(")l.push(parens[p]);
   else if (l.length >= r.length)r.push(parens[p]);
    else return false       
   }
 return l.length == r.length ? true : false;
}