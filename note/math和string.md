## math中常用的方法
> 数学函数：但是是对象数据类型的  typeof Math ==> "object"  
> Math 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象。
> Math对象中给我们提供了很多操作数字的方法  

> dir(Math)

```javascript
abs/ceil/floor/round/random/max&&min/PI
Math.abs()：取绝对值
Math.abs(-12)==》12

Math.ceil:向上取整
Math.floor：向下取整
Math.ceil（12.5） ==》13
Math.ceil(-12.5) ==>-12
Math.floor(12.5） ==》12


  Math.round :四舍五入。
  Math.round(12.3) ==>12


Math.random():后去[0,)之间的随机小数。
获取[0,10]之间的随机整数。
Math.round(Math.random()*10)
【n,m】之间的证书 ===》Math.round(Math.random()*(m-n)+n)


Math.max：获取一组数字中最大值。
Math.min:获取一组数字中的最小

Math.PI  是属性，不是方法。获取圆周率

Math.pow(x,y):返回x的y次幂.
Math.sqrt(x):返回x的平方根.
```



### 字符串及其常用方法

> 在js中单双号包裹起来的都是字符串  
>字符串的创建方式
+ 字面量
+ String(thing)
+ new  Sting(thing)

> 1.索引：第一个字符索引是0；第二个是1  
>2.length属性  
>3.指定索引不存在就是undefined。

```javascript
"hello world".length
//11
"hello world"[0]
//"h"
"hello world"[100]
//undefined
```

> 常用的方法   

```javascipt
str.charAt(index) :index
一个介于0 和字符串长度减1之间的整数。 (0~length-1)如果没有提供索引，charAt() 将使用0。如果index大于length-1，返回的是"";
```
![charAt eg](img1/12.png)

```javascript
str.charCodeAt(index)
==》参数index:一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。
==》返回值是一表示给定索引处（String中index索引处）字符的 UTF-16 代码单元值的数字；如果索引超出范围，则返回 NaN。
```


```javascript

str.concat(string2, string3[, ..., stringN])
concat 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。 concat 方法并不影响原字符串。
强烈建议使用 赋值操作符（+, +=）代替 concat 方法：性能原因

```
![concat eg](img1/13.png)


```javascript
str.substr(start[, length])
参数：
start
开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength + (-3)）。
length
可选。提取的字符数。
返回值：
新的字符串
```
![concat eg](img1/14.png)
---------------------
![sunstr eg](img1/15.png)
