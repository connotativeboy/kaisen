const str = 
"https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=15007414_20_dg&wd=xxx&fenlei=256&rsv_pq=0xf83da8e20002ad7b&rsv_t=76fbP2XefR%2BNXpZbhY9bG2a%2BgwvOGv6YWY%2BXoYBnlp8t4UOU8g%2FcltUdf1n8&rqlang=en&rsv_enter=0&rsv_dl=tb&rsv_sug3=4&rsv_sug1=2&rsv_sug7=101&rsv_btype=i&prefixsug=xxx&rsp=5&inputT=1363&rsv_sug4=1592"
const str2 = str.split('?')[1] // ie=utf...
const arr = str2.split('&')
let obj = {}
arr.forEach((item, index, Array) => {
  Array[index] = item.split('=')
})
arr.forEach(item => {
  obj[item[0]] = item[1]
})

function returnStr (str = '') {
    const str2 = str.split('?')[1] // ie=utf...
    const arr = str2.split('&')
    let obj = {}
    const arr2 = arr.forEach((item, index) => {
        return  item.split('=')
    })
    arr2.map(item => { obj[item[0]] = obj[item[1]] })
    return obj
}
console.log(obj)