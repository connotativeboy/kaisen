function copyDeep (obj) {
    let newObj = {}
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            // copyDeep(obj[i])
            console.log(obj[i])
        } else {
            newObj[i] = obj[i]
        }
    }
    return newObj
} 
const obj1 = {
    id: 1,
    name: {
        text: '2'
    },
    sex: 'nan'
}
console.log(copyDeep(obj1))
function copyDeep (obj) {
    let newObj = {}
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = copyDeep(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
console.log(copyDeep(obj1))