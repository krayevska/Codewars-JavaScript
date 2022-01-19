function persistence(num) {
  let count = 0;
  let arr = ("" + num).split("");
  while (arr.length > 1){
    let newNum = arr.reduce((a, c) => a * c);
    arr = ("" + newNum).split("");
    count++;
  }
  return count;
}
