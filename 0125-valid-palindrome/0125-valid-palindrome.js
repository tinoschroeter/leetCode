/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
  
  const str = s.replace(/[^0-9a-z]/gi, '').split("").map(char => char.toLowerCase()).join("");
    
  let l = 0;
  let r = str.length -1;
     
  while(l <= r) {
      
      if(str[l] === str[r]) {
          l++
          r--
      } else {
          return false;
      }
  }
    
   return true; 
};