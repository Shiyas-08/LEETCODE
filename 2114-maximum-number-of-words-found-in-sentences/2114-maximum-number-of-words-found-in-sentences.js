/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0;
    length=0;
    for(let value of sentences){
        length=value.split(" ").length;

        if(length>max){
            max=length
        }
    }
    return max

    
};