
/*
Write Number in Expanded Form
6kyu

You will be given a number and you will need to return it as a string in Expanded Form. 

For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/


function expandedForm(num) {
   var array = [];
   var baseN = num;
   var baseS = num.toString();
       for (i=(baseS.length-1); i>=0; i--) {
       if (baseS[i]!=="0"){
       var itemN = Number(baseS.slice(i));
       array.push(itemN);
       baseN = baseN-itemN;
       baseS = baseN.toString();
       }}
     var stringRes = array.sort(function(a, b){return b-a}).join(" + ");
     return stringRes; 
}