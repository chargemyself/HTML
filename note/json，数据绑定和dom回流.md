### 前后端交互的简单模型
![图片](img1/33.png)

1. json 不是一个单独的数据类型，它是一种特殊的数据格式==》对象数据类型
```javascript
var json = {name:'李四',age:23};//普通格式的对象
       var jsonObj = {"name":"李四","age":7}//json格式的对象（相对于普通的格式来说，只是把属性名用双引号包起来了）
```

2. 在window浏览器中，提供一个json的属性，提供了两种方法：  
-》JSON.parse-》把JSON格式字符串转换成为JSON格式对象。  
-》JSON.stringify-》把JSON格式的对象转换成JSON格式字符串
> 在IE6-7浏览器中，我们的window下没有JSON对象，刚才的parse和stringify都不存在了
兼容写法如下:
把JSON格式的字符串转换成JSON格式的对象

```javascript
　　　　var str = '{"name":"李四","age":7}'

　　　　eval("("+str+")") //不要问为什么，一定要记住使用eval的话，不要忘记手动的加一个小括号　
```

```javascript
var utils = {
            jsonParse:function(str){
                var val = null;
                try{
                    val = JSON.parse(str)    
                }catch(e){
                    val = eval("("+str+")")
                }

                return val;
            }
        }
```

### 数据绑定的问题
> 因为前段网页的数据是不能写死的。很多时候需要从后台得到数据。
1. 利用动态创建元素节点和把它追加到页面中的方式实现数据绑定（将动态添加的li添加到ul中）  

```javascript
var oUl = document.getElementById('ul')
        for(var i = 0;i<ary.length;i++){
            var cur = ary[i];
            var oLi = document.createElement('li');
            oLi.innerHTML = "<span>"+(i+1)+"</span>"+cur.title
            oUl.appendChild(oLi)
        }
```
>　优势：把需要动态绑定的内容一个个的追加到页面中，对原来的元素没有任何的影响  
>　弊端：每当创建一个li，我们就添加到页面中，引发一次DOM的回流，最后引发回流次数过多，影响我们的性能。

2. 字符串拼接的方式:首先循环需要绑定的数据，然后把需要动态绑定的标签以字符串的方式拼接到一起。（字符串拼接是我们以后工作中最常用的一种绑定数据的方式）
```javascript
var str = "";
        for(var i = 0;i<ary.length;i++){
            var cur = ary[i];
            str+="<li>";
            str+="<span>"+(i+1)+"</span>"
            str+=cur.title;
            str+="</li>"
        }
        oUl.innerHTML += str;//oUl.innerHTML(把之前的li以字符串的方式获取到)+str;拼接完成的整体还是字符串
　　　　 最后再把字符串统一的添加到页面中，浏览器还需要把字符串渲染成为对应的标签
```
>弊端:我们把新拼接的字符串添加到ul中，原有的li绑定的事件都消失了
>优势:事先把内容拼接好，最后统一添加到页面中，只引发一次回流

`js中dom深入知识：尽量减少回流`
>回流(重排 reflow)：当页面中的HTML结构发生改变（增加、删除元素、位置发生改变），浏览器都需要重新的计算一遍最新的DOM结构，重新的对当前的页面进行渲染
>重绘：某一个元素的部分样式发生改变了（背景颜色），浏览器只需要　重新的渲染当前的元素即可

3. 文档碎片
```javascript
var frg = document.createDocumentFragment();
//　创建一个文档碎片，相当于临时创建了一个容器　
for(var i = 0;i<ary.length;i++){
            var cur = ary[i];
            var oLi = document.createElement('li');
            oLi.innerHTML = "<span>"+(i+1)+"</span>"+cur.title
            frg.appendChild(oLi)
        }
        oUl.appendChild(frg);
        frg = null;
//只有一次回流，并且对原来的没有影响
```


### 表格排序及dom映射
1. 表格排序
```javascript
//1、先把元素集合类数组转化为数组
        var ary = utils.listToArray(oLis);//上几节封装好的listToArray
        //2、给数组进行排序:按照每一个li中的内容大小进行排序
        ary.sort(function(a,b){
            return parseFloat(a.innerHTML) - parseFloat(b.innerHTML)
        })
        //3、按照ary中存储的最新顺序依次的把对应的li添加到页面当中
        var frg = document.createDocumentFragment();
        for(var i = 0;i<ary.length;i++){
            frg.appendChild(ary[i]);
        }
        oUl.appendChild(frg);
        frg = null;
```

2. dom映射机制
```javascript
var oUl = document.getElementById('ul1');
        var oLis = oUl.getElementsByTagName('li');
        console.log(oLis.length);//->5

        var oLi = document.createElement('li');
        oUl.appendChild(oLi);
        console.log(oLis.length);//6没有重新的获取，但是oLis这个集合中的长度和内容会自动跟着发生改变
```
