const X = 10;
const Y = 85;
const D = 30;

/**
 * @return {number}
 */
// Brute force method O(Y-X)
function FrogJump(X, Y, D) {
    let jumps = 0;

    if (X >= Y) {
        return jumps;
    }

    let position = X;
    while (position < Y) {
        position += D;
        jumps++;
    }

    return jumps
}

/**
 * @return {number}
 */
// Time complexity of O(1)
function FrogJumpEfficient(X, Y, D) {
    const distanceToCover = Y - X;
    let numberOfJumps = Math.floor(distanceToCover / D);
    const modulo = distanceToCover % D;

    if (modulo > 0) {
        numberOfJumps++;
    }
    return numberOfJumps;
}


console.log(FrogJumpEfficient(X, Y, D));