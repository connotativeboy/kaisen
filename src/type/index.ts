const config: aa = {
    a: 1,
    b: 'b',
    c: [1, 2, 3],
    d: [
        { label: 'hah', value: 1 },
        { label: 'sss', value: 2 },
        { label: 'dsds', value: 3 }
    ],
    e: {
        tt: '1',
        kk: '2',
        ll: 'sdsa'
    }
}
interface bb {
    label: string;
    value: number;
}
interface aa {
  a: number
  b: string
  c: Array<number>
  d: bb[]
  e: Record<string, string>
}

const test: Pick<aa, 'a' | 'b' | 'e'> = {
    a: 1,
    b: 'b',
    e: {
        oo: 'ww',
        lllk: '212'
    }
}
function sum(a: number, b:number): number {
    return a + b
}
sum (111, 333)
// 联合类型
let a: boolean | string
a = '联合类型'

// any与unknow同样表示未知
let cc: unknown
let ee // 隐式any

let s:string
cc = 'hello'
// s = cc
// 虽然cc为'hello',但是上面定义的是unknow，所以不能赋值给s

// 上面情况能够在判断的情况下使用
if (typeof cc === 'string') {
    s = cc
}

// 类型断言 
s = cc as string // 意思就是确定cc肯定是string类型

// void表示没有返回值 
function fn (a:number, b:number|string):void {
}
// never类型， 永远不会有返回值
function fn2(): never {
   throw new Error('报错啦！')
}
 
let b:{ name: string, age?: number  }
b = { name:"开森" }
// 假如上面定义好了类型，但是不能持续的向里面加❓
// 出现的以下的情况
let ccc: {name:string, [prop: string]:any}
ccc =  { name: '猪八戒', age: 'sss'} // 这样就能够向里面添加新的内容了、

// 函数的类型声明
let newa: (a:number, b:string) => number
// 下面就能够使用
newa = function(n1, n2) {
    return n1 - (+n2)
}


// Array数组， 一般都是存储相同类型的数组 string[]就表示字符串类型数组 === Array<string>

let f: number[]

// 元组就是固定长度的数组，并且能够是每个位置对应的类型
let aaaa: [string, number]
aaaa = ['开森', 666]

// 枚举类，就是把能够出现的情况统统梳理出来enum
enum Gender {
    男,
    女
}

let i: {name: string, gender: Gender }

i = {
    name: '孙悟空',
    gender: Gender.男
}

// 类型的别名
type myType = 1|2|3|4|5  // 意思就是这个类型是其中的
let k: myType
k = 5 // k = 6就不能成功

// 二、编码选项
{
    // 可以在tsconfig.json文件中进行注释
    // 会被ts编译的文件位置
    "include": [
        "./src/**/*"
        // 一个星星代表任意文件
        // 两个星星代表任意目录
        "./src/**/*.ts"
    ]
    
    // 以下标注的就是不希望被编译的文件
    "exclude": [
        "./src/**/*"
    ]

    // extends,就是继承外部的其他文件
    "extends": ".config.base"
    // 以上就是代表把外部的内容引入

    // compilerOptions
    "compilerOptions": {
        "target": "ES6", // TS被编译成ES的版本，ESNext就是ES的最新版本
        "lib": ["dom"], // 在代码运行时所包含的库
        "module": "tsnext", // 指定模块化的规范
        "outDir": "./dist", // 就是编译后文件指定的目录
        "outFile": "./dist" // 就是编译后文件指定的目录, 合并成同一个文件
    }
}

// 三、webpack为TS文件进行打包，修改vue.config.js文件
const { defineConfig } = require('@vue/cli-service')
// 或者cosnt path = require('path')
// module.exports = {}
module.exports = defineConfig({
    // 需要确定一个入口文件
    entry: "./src/index.ts"

    // 指定打包后文件的目录
    output: {
        path: "./dist",
        filename: "bundle.js" // 打包后的文件名
    },
    module: {
        // 指定加载时的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test:/\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/ // 只要路径中存在这个
            }
        ]
    },
    // 这个就是配置webpack的插件
    plugins: [],
    // 用来设置引用的模块
    resolve: {
        // 扩展名，以这两个为扩展名的都引入
        extensions: ['.ts', '.js']
    }
})
