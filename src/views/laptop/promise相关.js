/*
1、promise.all就是将多个promise实例包装成一个新的promise实例，
   同时成功和失败返回的结果是不同的，成功返回一个结果数组，失败
   优先返回最先被reject失败状态的值。
*/
let p1 = new Promise((resolve, reject) => {
    resolve('成功1')
})
let p2 = new Promise((resolve, reject) => {
    resolve('成功2')
})
let p3 = new Promise((resolve, reject) => {
    reject('失败3 ')
})
Promise.all([p1, p2]).then(res => {
    console.log('成功啦' + res)
}).catch(err => {
    console.log('失败了' + err)
})
Promise.all([p1,p3,p2]).then(res=>{
    console.log(res)  /不执行
}).catch(err=>{
    console.log(err)  //'失败'
})
