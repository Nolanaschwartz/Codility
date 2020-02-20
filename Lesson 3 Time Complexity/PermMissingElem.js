const Array = [1, 2, 3, 1];
const emptyArray = [];
const singleArray = [1];

/**
 * @return {number}
 */
// Gets a 60% with Time Complexity O(N**2)
function PermMissingElem1(A) {
    let i = 1;
    let missingElem = undefined;
    while (missingElem === undefined) {
        const index = A.findIndex(element => i === element);
        if (index === -1) {
            missingElem = i;
        } else {
            A.splice(index, 1)
        }
        i++;
    }
    return missingElem;
}


/**
 * @return {number}
 */
function PermMissingElem2(A) {
    let elementSet = new Set();

    if (A.length === 0) {
        return 1
    }

    if(A.length === 1 && A[0] === 1){
        return 2
    }


    let index = A.length;

    for (let i = 0; i < index; i++) {
        if(index < A[i]){
            index = A[i]
        }

        if (!elementSet.has(A[i])) {
            elementSet.add(A[i])
        }
    }

    for (let i = 1; i <= index; i++) {
        if (!elementSet.has(i)) {
            return i
        }
    }

    return -1
}

// Should return 4
// console.log(PermMissingElem1(Array));
console.log(PermMissingElem2(Array));
console.log(PermMissingElem2(emptyArray));
console.log(PermMissingElem2(singleArray));
