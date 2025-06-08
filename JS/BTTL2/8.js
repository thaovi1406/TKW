array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
test = (array) => {
    let s = []
    for (let i in array) {
        if (array[i] % 2 != 0) {
            s.push(2*array[i])
        }
    }
    return s
}
console.log(test(array))