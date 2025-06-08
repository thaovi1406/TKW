test = (n) => {
    if (n<=1) {
        return n + ' không phải là số nguyên tố';
    }
        
    for (let i=2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return n + ' không phải là số nguyên tố';
        }
    }
    return n + ' là số nguyên tố';
}
console.log(test(29))