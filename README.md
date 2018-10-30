# html


# css
### 1.引入方法
+ 行间样式：  
+ 内部样式表放在head里面  
+ 外联样式表放在head里面  

### 2.选择器  
### 3.常见样式设置

### 4. 块元素及内联元素 inline-block
+ 块元素：默认独占一行。没有宽高时候，默认撑满一排。
+ 内联元素：不支持宽高，内容撑开。不换行
+ 块级内联元素


### 5. 浮动float








# javascript
## 报错
+ syntax  error 语法错误

## js数据类型
> 数字number  
> string  
> null  
> undefined  
> 对象  
> function
#### `运算符的优先级问题`


## 判断数据类型的四种办法


## number用法/parseInt/parseFloat

## 值数据类型和应用数据类型的区别
## 对象 object
+ 访问方法
> ![text](img1/1.png)  

## 函数
>创建一个函数的过程，相当于在全局作用域，开辟一个空间，空间中储存函数体的代码。但是此时的代码都是字符串的字符而已。  

>执行这个函数浏览器就是创建一个供函数代码执行的私有环境=》私有作用域  
把创建时候空间中存储的字符串拿过来，然后变为真正js表示式代码。

## if/else if/else 判断语句
测试题
``` javascript
var num = parseFloat('width:12.5px');  //NaN
if(num == 12.5){
    alert(12.5)
}else if(num == NaN){  //>NaN ! =NaN  NaN 和自身都是 不相等的
    alert(NaN);
}else if(typeof num =="number"){
    alert(0);
}else{
    alert("什么也不是")
}
//答案其实是字符串的 0
```

## do-while 语句

## 操作符
三元运算符
> 条件？条件成立执行：条件不成立执行；  
>> + 如果条件成立或者不成立的某一种情况不需要做什么处理，我们空着，语法不符合。使用null，undefined，void 0（就是undefined），占位就可以了。  
>> + 在三元运算符的操作中不能出现break，continue，return等关键词，无法用三元运算符代替if，else。
```javascript
var num =10;
if(10>5){
    num ++;
    console.log("hello world")  //`执行多条操作,用小括号包起来，中间用，（而不是；）分割）`
}else{
    console.log("nihhao")
}
10 >5?(num++,console.log("hello world")):null;
// hello world
```
>`一元操作符`：只能操作一个值的操作符  
>+ 递增和递减操作符 
>> 后置 递增和递减与前值递增和递减有一个非常的区别，就是递增和递减操作是包含它们的而语法被求职之后才执行的。
![text](img1/2.png)  
![text](img1/3.png)


>+ $$/||/!操作符  
![text](img1/4.png)  
> 逗号操作符
``` javascript
var num1= 1,num2 =2,num3=3;
逗号操作符用于声明多个变量。除此之外，在用逗号操作符赋值的时候，逗号操作符总是会返回表达式里面的最后一项。
var num =(5,1,4,8,0)  //num 为0
```

## switch case 判断
> 应用于if else中一个变量在不同值的情况下的不同操作
>>  switch 和case里面的对比条件是 ===
``` javascipt
var num =10;
switch(num){//switch 后面小括号中共存放是一个值，一般是我们写变量，把变量储存的值拿来用，可能也是一个计算
case 1：
    ...
    break;
case 10: //case 后面都是放的值，目的是验证switch后面的值和哪一种case后面的值相等。
    ...
    break;
    defaul：// switch 后面的值和每一种case情况对应的值都不相等，执行最后default。类似else。

}
```
## for 循环
```javasript
for(设置循环起始值；设置循环的执行条件；步长累加){
    循环体：重复做的事情都在循环体里面。
}
1.设置初始值
2.验证条件
3.条件成立，执行循环体；不成立，循环结束；
4.步长累加
是先循环，在执行i++的。。。
```
![text](img1/5.png)
![text](img1/6.png)




## demo展示
1. [给div设置样式](http://htmlpreview.github.io/?https://github.com/chargemyself/HTML/blob/master/js_demo/js-demo1%E7%BB%99div%E8%AE%BE%E7%BD%AE%E6%A0%B7%E5%BC%8F/demo1.html)js-demo1
2. [数组切换图片](http://htmlpreview.github.io/?https://github.com/chargemyself/HTML/blob/master/js_demo/js-demo2%E6%95%B0%E7%BB%84%E5%88%87%E6%8D%A2%E5%9B%BE%E7%89%87/demo2-1.html)js-demo2
3. [模拟短信发送](http://htmlpreview.github.io/?https://github.com/chargemyself/HTML/blob/master/js_demo/js-demo3%E6%A8%A1%E6%8B%9F%E7%9F%AD%E4%BF%A1%E5%8F%91%E9%80%81/demo3.html)js-demo3
4. [实现列表展开和收缩](http://htmlpreview.github.io/?https://github.com/chargemyself/HTML/blob/master/js_demo/js-demo4%E5%AE%9E%E7%8E%B0%E5%88%97%E8%A1%A8%E5%B1%95%E5%BC%80%E5%92%8C%E6%94%B6%E7%BC%A9/%E5%88%97%E8%A1%A8%E5%B1%95%E5%BC%80%E5%92%8C%E6%94%B6%E7%BC%A9.html)js-demo4
5. [带缩略图的轮播图](http://htmlpreview.github.io/?https://github.com/chargemyself/HTML/blob/master/js_demo/js-demo5%E5%B8%A6%E7%BC%A9%E7%95%A5%E5%9B%BE%E7%9A%84%E8%BD%AE%E6%92%AD%E5%9B%BE/demo5.html)js-demo5




