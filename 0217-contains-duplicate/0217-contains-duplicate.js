/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dub=new Set()
    for(let x of nums){
        if(dub.has(x)){

        return true 
        }
        dub.add(x)

        


    }
         return  false

};