/* Scramblies by joh_pot */

/* without arrays */

function scramble(str1, str2) {
 
  let counters = {};
  
  for(let i = 0; i < str1.length; i++){
      counters[str1[i]] = (counters[str1[i]] || 0) + 1;
  } 
  
  for(let i = 0; i < str2.length; i++){
      if(counters[str2[i]]){
          counters[str2[i]]--;
      } else {
          return false;
      }
  }
  return true;
}

/*using arrays*/

function scramble(str1, str2) {
  
      let arr1 = str1.split("");
      let arr2 = str2.split("");
            
      let counters1 = {};
    	let counters2 = {};
       
      arr1.forEach(item => {
        if(item in counters1){
            counters1[item]++;
        } else {
            counters1[item] = 1;
        }
      })
      
      arr2.forEach(item => {
        if(item in counters2){
            counters2[item]++;
        } else {
            counters2[item] = 1;
        }
      })
      
      for(let i = 0; i < arr2.length; i++){
        if(counters1[arr2[i]] == undefined  || counters1[arr2[i]] < counters2[arr2[i]]){
          return false;
        }
      }

     return true;           
        
   }
