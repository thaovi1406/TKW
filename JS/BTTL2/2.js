/*let array = [1, 2, 3, 4, 5]
let sum = 0
for (let i=0; i<array.length; i++) {
    sum += array[i]
}
console.log(sum)*/

function TinhTong(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let array = [1, 2, 3, 4, 5]
console.log(TinhTong(array))