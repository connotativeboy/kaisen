// 1、Set数组去重
var arr = [1, 2, 3, 3, 5, 6, 2]

const res = Array.from(new Set(arr)) // 利用set去重形成类数组
// Array.from的作用就是把类数组或者可遍历的对象转化为数组

// indexOf去重
let arr3 = []
arr.forEach(item => {
    if (arr3.indexOf(item) === -1) {
        arr3.push(item)
    }
})
// 冒泡排序
function bubble (arr) {
    const length = arr.length
    for (let i = 0; i < length - 1; i ++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 结构赋值
            }
        }
    }
    return arr
}
// 选择排序 
/*
  选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）
  的一个元素，存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。以
  此类推，直到全部待排序的数据元素的个数为零。选择排序是不稳定的排序方法
*/
// 除了写成一个方法，也可以把排序放入array的原型链当中
Array.prototype.selectionSort = function () {
    for(let i = 0; i < this.length - 1; i++) {
        let indexmin = 1
        for (let j = 0; j < this.length; j++) {
            if (this[i] < this[j]) {
                indexmin = j
                [this[i], this[indexMin]] = [this[indexMin], this[i]]
            }
        }
    }
}
// 手写深拷贝
function copyObj () {
    let newObj = {}
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            // object[key] instanceof Object
            newObj[key] = copyObj(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
// 判断是否为对象或者数组typeof instanceof constructor
async function sendRequest () {
    const promises = []
    const pool = new Set()
    for (let i of requestList) {
        if (pool.size > limit) {
            await Promise.race(pool).catch(err => err)
        }
        const promise = i()
        const cd = () => {
            pool.delete(promise)
        }
    }
}

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}