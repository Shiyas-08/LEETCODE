/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let arr=num.split('')
    while(arr.length){
        if(arr[arr.length-1]==='0'){
        arr.pop()
        
    }else{
        return arr.join("")
    }
    }
    
};