## call_apply 的区别
>apply和call的方法是一模一样的，都是用来改变方法的this关键字，并且把方法执行:而且在严格模式和非严格模式下对于第一个参数是null/undefined这种情况的规律是一样的；
bind:这个方法在IE6-8下不兼容 ->和call和apply类似都是用来改变this关键字的

```javascript
'use strict' //告诉当前浏览器接下来的js代码将按照严格模式进行编写
        var obj = {name:'张三'}
        function fn(num1,num2){
            console.log(num1+num2);
            console.log(this)
        }
        fn(100,200);//this ->window num1=100 num2=200
        fn.call(100,200);// this->100 num1 = 200 num2=undefined  NaN
        fn.call(obj,100,200)//this->obj  call在给fn传递参数的时候，是一个个传递值的，而apply不是一个个传，而是把要传递的参数值放在一个数组中进行操作。但是也相当于一个个的给fn的形参赋值
        fn.apply(obj,[100,200]);//
        //预处理:事先把fn的this改变为我们想要的结果，并且把对应的参数值也准备好，以后要用到了，直接的执行即可。bind这里实现了预处理的效果
        var tempFn = fn.bind(obj,100,200);//只是改变了fn中的this为obj，并且给fn传递了两个参数值100和200，但此时并没有把fn这个函数执行,执行bind会有一个返回值，这个返回值tempFn就是我们把fn的this改变后的那个结果
        tempFn();
        fn.call();//this->window  在严格模式下this->undefined
        fn.call(null);//this->window 在严格模式下this->null
        fn.call(undefined)//this->window 在严格模式下this->undefined
```