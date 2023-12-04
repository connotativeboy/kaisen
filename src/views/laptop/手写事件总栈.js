class Bus {
    constructor () {
        this.list = {}
    }
    $on (name, callBack) {
        this.list[name] = this.list[name] || [] // 有就指向无就创建
        this.list[name].push(callBack)
    }
    $emit (name, ...augs) {
        if (this.list[name]) {
            this.list[name].forEach(callBack => {
                callBack(augs)
            })
        }
    }
    $off (name) {
        if (this.list[name]) {
            delete this.list[name]
        }
    }
}
class bus {
    constructor () {
        this.list = []
    }
    $on (name, callBack) {
        this.list[name] = this.list[name] || []
        this.list[name].push(callBack)
    }
    $emit (name, ...augs) {
        if (this.list[name]) {
            this.list[name].forEach(callBack => {
                callBack(augs)
            })
        }
    }
    $off (name) {
        if (this.list[name]) {
            delete this.list[name]
        }
    }
}
export default new Bus()
// 或者
const bus = new Bus
// 订阅事件
bus.$on('发布1', (data) => {
    console.log(data)
})

bus.$emit('发布1', '测试', 213)