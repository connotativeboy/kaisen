// n代表每组元素个数
function chunk(arr, n = 1) {
    let arrs = []
    let num = Math.ceil(arr.length / n)
    for (let i = 0;  i < num; i++) {
        let arrN = arr.slice(n*i, n*(i+1))
        arrs.push(arrN)
    }
    console.log(arrs)
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


