// 1.青蛙跳台阶
let n = 100
let arr = [1, 1]
for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
}
return arr[n]
// 2.常见的去除字符串中重复最少的字符
const str = 'abbacdd'
let obj = {}
str.split('').forEach(item => {
    if (obj[item]) {
        obj[item] += 1
    } else {
        obj[item] = 1
    }
})
let min = Math.min(Object.values(obj))
for (let i of obj) {
    if (obj[i] === min) {
        str.replace(new RegExp(i,'g'), '')
    }
}
str.replace(new RegExp(i, 'g'), '')
// js实现深度递归