// This is a demo task.
//
//     Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
//     For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
//     N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

/**
 * @return {number}
 */
function CodilityMissingInt(A){
    let numObject = {};
    A.forEach(num =>{
        if(!numObject[num]){
            numObject[num]=true;
        }
    });

    if(isNegative(numObject)){
        return 1
    }

    let minValue = 1;
    for(const num in numObject){
        if(parseInt(num) > 0 && minValue === parseInt(num)){
            minValue++
        } else if (!(parseInt(num) === 0)){
            return minValue
        }
    }

    return minValue;
}

function isNegative(numObject){
    for(const num in numObject){
        if(parseInt(num) > 0){
            return false
        }
    }

    return true
}

console.log(CodilityMissingInt([0,1, 3, 6, 4, 2]));
console.log(CodilityMissingInt([-1, -3]));
console.log(CodilityMissingInt([1, 2, 3]));
console.log(CodilityMissingInt([3]));
