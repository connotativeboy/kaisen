function fib (n) {
    if (n === 0 || n === 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

function fidd(n) {
    if (n === 0 || n === 1) {
        return n
    }
    var p = 0, q = 0, r = 1
    for(let i = 2; i <= n; i++) {
        p = q
        q = r
        r = p + q
    }
    return r
}