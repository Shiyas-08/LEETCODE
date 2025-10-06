/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr=[];


    nums.sort((a,b)=>a-b);
    while(nums.length>0){
        let alicePick=nums.shift()
        let bobPick=nums.shift()
        arr.push(bobPick);
        arr.push(alicePick)
    }
    return arr
    
};