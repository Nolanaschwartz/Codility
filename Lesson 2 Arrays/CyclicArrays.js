function CyclicArrays(Array, Rotations){
    for(let i = 0; i < Rotations; i++){
        Array.unshift(Array[Array.length - 1]);
        Array.pop();
    }
    return Array
}


console.log(CyclicArrays([3, 8, 9, 7, 6], 3))