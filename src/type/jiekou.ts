//接口类型，用来定义一个对象的结构，或者类的结构
interface myI {
    name: string,
    age: number,
    sayHello():void
}

// 假如定义两个相同的接口，那么就会把两个interface中的内容添加到一起
const obj: myI = {
    name: '开森',
    age: 11,
    sayHello(){
    }
}
// 注意，在interface中的内容不能够存在实际的值，就是很像抽象类！
// 可以使用类去实现一个接口，意思就是需要创建的类，满足接口的要求

class myIii implements myI {
    name: string;
    age: number;
    sayHello(){
    }
} 

