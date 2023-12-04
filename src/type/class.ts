/*
 四、面向对象编程 --- 一个事物或者一个实物到了程序当中都是一个对象。 window对象 dom对象 console对象
例如人： 身高体重，年龄，都是数据 --- 对应的是对象的属性人能动，能吃，能喝 都是行为 --- 对应到对象中就是方法.
*/


// 使用 class关键字定义一个类
class Person{
    // 这是属于定义的实例属性
    name: string = '孙悟空'

    // 下面定义的是（静态属性）类属性，就是不需要创建实例去访问，而是只能通过类去访问
    static age: number = 11
    // 访问就是要Person.age
}

// 接下来就是构造函数以及其中的this
class Dog {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        // 其中使用this，每个this都是实例出来的对象
        this.name = name;
        this.age = age
    }
}

const Dog1 = new Dog('小黑', 3) // 这样构造函数中的this就是指向Dog1

//类的继承使用方式
// /上面存在一个dog类

// 使animal类继承Dog类，子类继承父类
class animal extends Dog {
    run () {
        console.log(11)
    }
    // 这样还能在子类中添加属性或者方法，并且不会影响父类
    // 加入在子类添加相同属性或者方法，那就是能够覆盖父类，但是不影响父类。
    // super类的使用，加入此类是继承来的，当在子类中添加构造函数时，使用this必须使用super
    sex: string
    constructor (name: string, age: number,sex: string) {
        super(name, age)
        this.sex = sex
    }
}

// 抽象类， 不能new一个抽象类对象，即父类能够使用
abstract class food {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

