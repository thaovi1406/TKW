let n = 100
let S=0
for (let i = 2; i <= n; i+=2) {
    S += i
}
console.log(S)

let i=2
S=0
while (i<=n) {
    S += i
    i+=2
}
console.log(S)

S=0
i=2
do {
    S += i
    i+=2
}
while (i<=n)
console.log(S)