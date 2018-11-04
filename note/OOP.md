## 面向对象编程


### 单例模式
>对象数据类型：据说以前是没有引用数据类型的。把描述同一个事物（同一个对象）的属性和方法放在同一个内存空间下，起到分组的作用，这样不同事物之间的属性即使属性名相同，相互也不会发生冲突。
>就是一个对象。  

>单例模式中，我们把person和person2叫做命名空间

>单例模式是一种项目开发中经常用的模式，因为项目中我们可以使用单例模式来进行，我们叫做“模块化开发”
>"模块化开发“：对于一个大项目，划分几个功能板块，每个人负责一部分，同时开发，最后把每个人的代码进行合并
```javascript
var person1 ={name:"zhang",age:18};
var persone ={name:"li",age:15};

```
>传统手工作业模式。

### 工场模式
>单例模式虽然解决了分组的作用，但是不能实现批量的生产，属于手工作业模式  

>把实现同一件事情相同的代码放在同一个函数中，以后如果想要实现这个功能，不需要重新编写这些代码，只需要执行当前函数即可。 ==》函数的封装。


```javascript
function createJs(name,age){
    var obj ={};
    obj.name =name;
    obj.age =age;
    obj.write =function(){
        console.log("hello world");
    };
      return obj;
}


  var p1 =creatJs("zhang",28);
  p1.write();
```

>js是一门轻量级的脚本“编程语言”（html+css不属于编程语言，属于标记语言。
+ .net c# php java 
+ 所有的编程语言都是面向对象开发的--》类的继承，封装，多条。
+ 继承：子类继承父类中的属性和方法。
+ 多态： 当前方法的多种形态。后台语言中：多态包含了重载和重写。
>>+ js当中不存在重载，方法名一样，后面的会把前面的覆盖掉，最后只保留一个。（有一个类似重载，但不是重载，根绝传递的参数不一样，实现的功能不同）
>>+ 重写：子类重写父类的方法。

```javascript
function sum(num){
    if(typeof num ==="undefined"){
        return 0;
    }
    return num;
}
// sum(100);
//sum();
```


### 构造函数模式
```javascript
function CreateJs(name,age){
    this.name = name;
    this.age =age;
    this.writeJs =function(){
        console.log("my name is"+this.name +",i can js")
    };
};
var  p1 = new Creatjs("zhhang",18);
var p2 =new CreatJs("li",15);
```

>构造函数模式目的就是为了创建一个自定义类，并且创建这个类的实例。

>构造函数模式和工厂模式的区别？
1. 普通函数执行，是函数执行。  
==》构造函数模式 new creatJs()  通过new执行后，我们的creatJs就是一个类。  
==》而函数执行的返回值p1就是creatJs这个类的实例。
2. 在函数代码执行的时候
相同：都是形成一个私有的作用域，然后形参赋值==》预解释==》代码从上到下执行（类和普通函数一样，也有普通函数的的一面）
不同：在代码执行之前，不用自己在手动创建对象了，浏览器会默认创建一个对象数据类型的值（这个对象其实就是我们当前类一个实例）
//接下来代码从上到下执行，以当前的实例为执行的主体（this代表的就是当前的实例）然后分别把属性名和属性值

3. 在构造函数模式中，类中（函数体中）出现的this.xxx =xxx中this是当前类的一个实例。
4. P1和p2都死CreatJs这个类的实例，所以都拥有writeJs这个方法，的那还是不同实例之间的方式不是不一样的。  
在类中实例增加的属性this.xxx =xxx属于当前实例的私有属性，实例和实例之间是单独的个体，所以私有属性之间是不相等的。
+ console.log(p1.writeJs === p2.writeJs) ==>false

```javascript
创建一个数组：
var ary =[];//字面量方式
var ary =new Array();//实例创建的方式，构造函数模式执行的方式。
//不管怎样ary都是Array的一个实例。
//js中的所有的类都是函数数据类型，它通过new执行变成一个类  但是本身也是一个普通的函数。
//js的实例都对象类型的。

```

