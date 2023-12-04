function instance (left, right) {
    // left是实例 right是构造函数
    left = Object.getPrototypeOf(left) // left._proto_
    let proto = right.prototype
    while (left) {
        if (left === proto) {
            return true
        }
        left = Object.getPrototypeOf(left)
    }
    return false
}
console.log(instance([], Object))