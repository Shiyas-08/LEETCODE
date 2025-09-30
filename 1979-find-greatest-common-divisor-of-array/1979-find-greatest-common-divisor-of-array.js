
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  nums.sort((a, b) => a - b);
    // const smallest = nums[0];
//   console.log(smallest)
    const small= nums[0];
    const large=nums[nums.length-1]
    // console.log(small,large)

    for(i=small;i>=1;i--){
        if(small%i==0&&large%i==0){
            return i
        }
    }
    
};
let result =findGCD ([2,5,6,13,10])
console.log(result)