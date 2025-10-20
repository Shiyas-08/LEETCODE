/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let freq={}
    for(let char of s){
        if( freq[char]){
             freq[char]++
        }else {
            freq[char]=1
        }
    }
      for (let char of t) {
        if (!freq[char] || freq[char] === 0) {
            return char; 
        } else {
            freq[char]--; 
        }
    }
   
};