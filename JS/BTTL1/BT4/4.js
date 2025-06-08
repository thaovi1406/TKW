let count=0
let array1 = [1, 3, 5, 3, 7, 9, 3, 1, 3]
for (let i=0; i<=array1.length; i++) {
    if (array1[i] == 3)
        count += 1
}
console.log('Số lần xuất hiện số 3 là ' + count)