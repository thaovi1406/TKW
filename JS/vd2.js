/*let a = [5, -10, 3, 4, 8, 11, -2]
let dem =0, s=0, tb=0, index=0
for (let i=0; i<=a.length; i++) {
    if (a[i]%2==0) {
        dem +=1;
        s += a[i];
        tb = s/dem;
    }
    if (a[i]==5) {
        index=i //a[i]=10
        a[index]=10;
    }
}
a.push(10, 11, 12)
console.log(dem)
console.log(tb)
console.log(a)*/

let a = [5, -10, 3, 4, 8, 11, -2]
func = (a) => {
    let dem =0
    for (let i=0; i<=a.length; i++) {
        if (a[i]%2==0) {
            dem +=1;
        }
    } 
    return dem;
}

console.log(func(a))


let b = [5, -10, 3, 4, 8, 11, -2]
func1 = (b) => {
    let s = 0, tb=0, dem=0
    for (let i=0; i<=b.length; i++) {
        if (b[i]%2==0) {
            dem+=1;
            s += b[i];
            tb = s/dem;
        }
    }
    return tb;
}
console.log(func1(b))


let c = [5, -10, 3, 4, 8, 11, -2]
func2 = (c) => {
    for (let i=0; i<=c.length; i++) {
        if (c[i]==5) {
            index=i //a[i]=10
            c[index]=10;
        }
    }
    return c
}
console.log(func2(c))

let d = [5, -10, 3, 4, 8, 11, -2]
func2 = (d) => {
    d.push(10,11,12)
    return d
}
d=func2(d)
console.log(d)


