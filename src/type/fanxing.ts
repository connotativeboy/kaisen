// 泛型
// 当我们定义类或者函数时，遇到不明确的类型可以使用泛型
function fn<T>(a: T):T {
    return a
}

// 假如直接调用泛型的函数
fn(10) // 不指定泛型，TS可以对类型进行推断
fn<string>('hello') // 指定泛型

function fn2<T, K>(a: T, b: K):T {
    return a
}


// 可以使用继承interface的类型
interface aaa {
    length: number
}
function fn3<T extends aaa>(a: T): number {
    return a.length
}

fn3('sss')
// 起码有length选项
