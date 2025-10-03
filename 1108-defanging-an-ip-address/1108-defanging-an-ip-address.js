/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
 let s="";
  for(let i of address ){
    if(i==="."){
        s+="[.]"
    }else {
        s+=i
    }
  }
      return s

    
};
  console.log(defangIPaddr)
