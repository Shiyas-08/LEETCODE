/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // arr1=Math.abs(nums)
    let arr= nums.map((value)=>value*value)
     let sortArr= arr.sort((a,b)=>a-b)
     return sortArr
};