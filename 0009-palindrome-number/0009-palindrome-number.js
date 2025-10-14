/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let arr=[]
   let digit=x.toString().split("")
   let rev=digit.reverse().join("")
    if (x==rev){
        return true
    }else{
        return false
    }
  
    
};
console.log(isPalindrome(121));