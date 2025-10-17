/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
let arr=String(n).split("").map((Number))

let product=arr.reduce((acc,curent)=>acc*=curent);

let sum=arr.reduce((acc,curent)=>acc+=curent);
return product-sum
};