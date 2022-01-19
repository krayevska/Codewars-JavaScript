//converting to array, 
//sorting it, 
//then comparing those elements which are next to each other
function duplicateCount(text) {
  const arr = text.toLowerCase().split('');
  let count = 0;
  arr.sort();
  arr.forEach((item, i) => {
      if(arr[i] == arr[i+1] && arr[i] != arr[i-1]){
      count++;
    }
  })
  return count;
}

//usind Set + forEach + RegExp
function duplicateCount(text) {
  const set = new Set(text.toLowerCase().split(""));
  let count = 0;
    
  set.forEach(item => {
    let pattern = new RegExp(item + ".*" + item, "i");
       if(text.match(pattern)){
        count++;
      }
  });
  return count;
}

//using forEach + RegExp + Set
function duplicateCount(text) {
  let arr = text.toLowerCase().split("");
  let result = new Set(arr.filter(item => text.match(new RegExp(item + ".*" + item, "i"))));
  return result.size;
}
 
