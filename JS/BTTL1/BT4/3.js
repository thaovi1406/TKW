let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let s=0
for (let i = 0; i < array.length; i++) {
    if (array[i] %2 != 0)
        s += array[i]
}
console.log('Tổng các số lẻ trong mảng là ' + s)