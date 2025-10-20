/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
       let m = 0;
    let n = 0;
    let count = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            m++;
        } else if (moves[i] === 'R') {
            n++;
        } else {
            count++;
        }
    }

    return Math.abs(m - n) + count;
};

