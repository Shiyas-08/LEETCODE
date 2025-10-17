/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let totalElment=nums.reduce((acc,curent)=>acc+curent)
 
    let str=nums
  .join("")
  .split("")
  .map(Number)
  let totalIndex=str.reduce((acc,vale,index)=>acc+vale)
  return totalElment-totalIndex
  
    
    };
    // differenceOfSum(nums)

