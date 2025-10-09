/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let X=0;
    let Y=0;

    for(let i of moves ){
        switch(i){
    case 'U':
     Y++;
         break;
    case 'D':
    Y-- ;
    break;;
    case 'L':
    X++;
    break;
    case 'R':
    X--;
    break;

    
        }
    }
    return X===0&&Y==0;
};
