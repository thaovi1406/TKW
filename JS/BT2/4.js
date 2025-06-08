let array = [3, 5, 7, 2, 8, 1, 4];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log('Số lớn nhất ' + max)