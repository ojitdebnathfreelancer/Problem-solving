function leftRotate(arr, d) {
    for (let i = 0; i < d; i++) {
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
let rotations = 2;
console.log(leftRotate(arr, rotations));
