const Array = [1, 2, 3, 5];

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

// Should return 4
console.log(PermMissingElem1(Array));
