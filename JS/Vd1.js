var a = {
    name: 'son',
    age: 20,
    address: 'VN'
}
for (var key in a) {
    console.log(a[key]) //lấy ra cái value của mấy cái key 
}

var b = [
    'java',
    'php',
    'c#',
    'javascript'
]
for (var key in b) {
    console.log(key) //lấy ra cái index
}

