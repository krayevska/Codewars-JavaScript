function rot13(message){

let result = message.split("");
  
  result.forEach((c, i) => {
    if(c.toLowerCase() != c.toUpperCase()){
      //if it is a letter - find new CharCode, store it in newCurrentLetter
      let current = c.charCodeAt(c);
      let newCurrentLetter = "";
      if(current > 77 && current < 91 || current >= 110){
        newCurrentLetter = String.fromCharCode(current - 13);
        } else {
        newCurrentLetter = String.fromCharCode(current + 13)
      }
      //replace letter with 13 character shift
      result[i] = newCurrentLetter;
    } 
    //if not a letter, do nothing
  })
  return result.join("");
}
