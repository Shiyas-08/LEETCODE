/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
   let arr=[]
   for(let word of words){
       let parts=word.split(separator)
      for(let part of parts){
    
                  if(part !==""){
                      arr.push(part)
                  }
       }

   }
   return arr
}
    