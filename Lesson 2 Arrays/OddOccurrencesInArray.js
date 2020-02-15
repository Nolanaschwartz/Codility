const Array = [9, 3, 9, 3, 9, 7, 9];

/**
 * @return {number}
 */
function OddOccurrenceInArrays1(Array) {
    let pairCounter = {};
    Array.forEach(element => {
        if (pairCounter[element]) {
            pairCounter[element]++;
        } else {
            pairCounter[element] = 1
        }
    });

    // for(const [key, value] of Object.entries(pairCounter)){
    //     if(value % 2 === 1){
    //         return parseInt(key)
    //     }
    // }

    return parseInt(Object.keys(pairCounter).find(key => pairCounter[key] % 2 === 1));
}

// This solution is slower
function OddOccurrenceInArrays2(Array) {
    Array.sort();
    for (let i = 0; i < Array.length;) {
        if (Array[i] === Array[i + 1]) {
            Array.splice(i, 2);
        } else {
            return Array[0]
        }
    }

    return Array[0]
}

console.log(OddOccurrenceInArrays1(Array));
console.log(OddOccurrenceInArrays2(Array));
