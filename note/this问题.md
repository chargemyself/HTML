## this 总结



## call 和apply问题
```javascript
// var ary =[1,2];
// ary.slice ==>这个实例通过原型链查找机制找到Array.prototype上的slice方法
// ary.slice()找到的slice方法执行。在执行slice方法中，才把ary数组进行了截取。

var  obj ={name ： "zhang "};
function fn(){
  console.log(this)
};
fn() //window;
fn.call(obj);
call方法作用：
首先我们让原型上的call方法执行，在执行call方法时候，我们fn方法中 this变为参数obj，
然后在把fn这个函数执行。
```
`重写call方法`
```javascript
Function.prototype.myCall=function (context){
  // myCall方法中的this就是当前我要操作和改变其this关键字的那个函数名。
  // 让fn中的this关键字变为context的值
  // 让this这个函数中的this关键字变为context
   eval(this.toString().replace('this',context))
//   让fn执行
this();
}
```
```javascript
function fn1(){console.log(1)};
function fn2(){console.log(2)};
fn1

//首先fn1通过原型链机制找到Function.prototype上的call方法，并且让call()方法执行  
->此时call这个方法中的this就是我要操作的fn1，在call方法代码执行过程中首先让fn1  
中的"this关键字"变成fn2，然后在让这个方法执行->1
        fn1.call.call(fn2)
        /*
首先fn1通过原型链机制找到Function.prototype上的call方法,然后在让call方法通过原  
型在找到Function原型上的call(因为call本身的值也是一个函数，所以同样可以  
找到Function.prototype),在第二次找到call的时候让方法执行，方法中的this   
 是fn1.call，然后让这个方法中的this变成fn2，最后fn1.call执行->2
        */
```
