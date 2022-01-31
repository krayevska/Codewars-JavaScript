/*
Next bigger number with the same digits, by GiacomoSorbi

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

*/

function nextBigger(n){
    //creating an array
    let arr = ("" + n).split("");
    
    //getting rid of cases where 
    //each left element is bigger 
    //than its neighbor to the right
    let arrCopy = arr.slice();
    arrCopy.sort((a, b) => { return b - a });
    if(arrCopy.join("") === "" + n){
      return -1;
    }
    
    let result = null;
    let results = [];
    let usedIndex;
    let lastIndex = arr.length - 1;

    function findOptions(indexSearchFrom, indexToCompare){
      //iterating through array to the left from indexSearchFrom
      //and searching elements less then indexToCompare
      for(let i = indexSearchFrom; i >= 0; i--){
        //if such element has been found
        if(arr[i] < arr[indexToCompare]){
          //swap it with indexToCompare
          [arr[i], arr[indexToCompare]] = [arr[indexToCompare], arr[i]];
          if(i < arr.length - 2){
            //if subarray to the right from found element is bigger than 1 element
            //sorting that subarray in descending order
            let rest = arr.splice(i + 1).sort();
            //creating new array with sorted ending
            result = [...arr, ...rest];
            //turning array into number anr pushing it to results
            results.push(Number(result.join("")));
            //changing value of usedIndex to start next search to the left of it
            usedIndex = i;
            //getting original array
            arr = ("" + n).split("");
          } else {
            //if subarray to the right from found element is 1 element long
            //no need for sorting so pushing it in results
            results.push(Number(arr.join("")));
            //changing value of usedIndex to start next search to the left of it
            usedIndex = i;
            //getting original array
            arr = ("" + n).split("");
          }
          //recursively calling a function with new usedIndex value
          findOptions(usedIndex - 1);
        }
      }
    }

    //moving through array from end to start 
    //callig findOptions with lastIndex--
    while(lastIndex){
      findOptions(lastIndex - 1, lastIndex);
      lastIndex--;
    }
  //returning smallest option from results  
  return Math.min(...results);
}
