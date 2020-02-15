/**
 * @return {number}
 */
function BinaryGap(number) {
    const binaryRep = convertToBinary(number)
    let binarySegments = [];
    let start = 0;
    let end = 0;
    let flag = true;
    let largestSegment = 0;

    for (let i = 0; i < binaryRep.length; i++) {
        if (binaryRep[i] === 1 && flag) {
            start = i;
            flag = !flag;
        } else if (!flag && binaryRep[i] === 1) {
            end = i + 1;
            binarySegments.push(binaryRep.slice(start, end))
            flag = !flag;
            i--;
        }
    }

    if (binarySegments.length > 0) {
        binarySegments.forEach(segment => {
            if (segment.length - 2 > largestSegment) {
                largestSegment = segment.length - 2
            }
        })
    } else {
        return 0
    }

    return largestSegment
}

function convertToBinary(number) {
    let binaryRep = [];

    while (number !== 0) {
        if (number % 2 === 1) {
            binaryRep.unshift(1)
        } else {
            binaryRep.unshift(0)
        }
        number = Math.floor(number / 2);
    }

    return binaryRep
}


console.log(BinaryGap(32));
console.log(BinaryGap(9));
console.log(BinaryGap(1041));
console.log(BinaryGap(529));
