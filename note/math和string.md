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
下面的都是只可以传一个参数。
str.substr(n,m)
参数：从索引n开始，截取m个字符。如果m不传就是直接截取到最后面。
返回值：新的字符串

str.substring(n,m)
参数：从索引n开始，截取到索引m处（不包含m），把找到的部分截取
返回值：新的字符串

str.slice(n,m)
参数：beginSlice
从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)
endSlice
可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。


```
![substr eg](img1/14.png)
![example](img1/15.png)  

```javascript
str.toUpperCase()
 将调用该方法的字符串值转换为大写形式，并返回。toUpperCase 方法不影响字符串本身的值。
 str.toLowerCase()
toLowerCase 会将调用该方法的字符串值转为小写形式，并返回。toLowerCase 不会影响字符串本身的值。
```

![example](img1/16.png)


```javascript
str.split()
找到分隔符后，将其从字符串中删除，并将子字符串的数组返回。如果没有找到或者省略了分隔符，则该数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str转换为字符数组。如果分隔符出现在字符串的开始或结尾，或两者都分开，分别以空字符串开头，结尾或两者开始和结束。因此，如果字符串仅由一个分隔符实例组成，则该数组由两个空字符串组成。

如果分隔符是包含捕获括号的正则表达式，则每次分隔符匹配时，捕获括号的结果（包括任何未定义的结果）将被拼接到输出数组中。但是，并不是所有浏览器都支持此功能。
```

![example](img1/17.png)
![example](img1/18.png)

```javascript
str.indexOf(n,index)
参数：n就是被查找的字符，index从那一位开始找起来（可选）。indexof区分大小写的。
返回值：指定值的第一次出现的索引; 如果没有找到 -1。

str.lastIndexOf(searchValue[, fromIndex])
参数：
searchValue
一个字符串，表示被查找的值。
fromIndex
从调用该方法字符串的此位置处开始查找。可以是任意整数。默认值为 str.length。如果为负值，则被看作 0。如果 fromIndex > str.length，则 fromIndex 被看作 str.length。

```
![example](img1/19.png)


`使用 indexOf 统计一个字符串中某个字母出现的次数`
```javascript
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}

console.log(count); // displays 4
```

```javascript
str.trim()
trim() 方法会从一个字符串的两端删除空白字符。trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。


var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// 另一个.trim()例子，只从一边删除

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```



