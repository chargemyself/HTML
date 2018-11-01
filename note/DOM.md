## DOM基础
> DOM:document object model 文档对象模型，提供一些属性和方法可以让我们去操作DOM元素。

### 获取DOM元素的方法
- document.getElementById('元素的ID') 在整个文档中，通过元素的ID获取到这个元素对象(获取的是一个元素)  
注意:如果页面中的id重复了，那么这个方法默认只获得第一个元素
- document.getElementsByTagName('元素的标签名') 在整个文档中，通过元素的标签名获取一组元素。获取的是一个对象数据类型结果，并且是一个类数组（以数字作为索引，索引从0开始，逐级递增，索引代表的是当前对应的某一个元素，有一个叫做length的属性代表获取的个数）  
document称之为上下文(context)，就是我们自己可以限定当前获取元素的范围[getElementById的上下文只能是document]
- context.getElementsByName()通过元素的name属性的值获取一组元素  
在ie浏览器下只对表单元素起作用  
这个方法应用于获取具有同样name的表单元素
- context.getElementsByClassName() 通过元素的类名（class的值） 是项目中最常用的一种方法，但是在ie6-ie8中会报错。获取多个的这几个方法，即使你获取的只有一个，他也是类数组，也是一个集合，如果想用其中的第一个，你也要通过索引拿出来用。
> - document.documentElement //获取HTML元素
　document.body//获取body元素  
 curWidth==document.documentElement.clientWidth||document.body.clientWidth  //兼容所有浏览器的获取当前屏幕的宽度    
  curHeight=document.documentElement.clientHeight||document.body.clientHeight//兼容所有浏览器的获取当前屏幕的高度  
- 在移动端我们回去元素常用的方法（IE6~8下不兼容）  
　document.querySelector()获取一个  
　document.querySelectorAll()获取多个


### DOM节点的查看
> node :节点，浏览器认为在一个HTML页面中的所有内容都是节点（包括标签,注释，文字文本等）
>- 元素节点：Html标签
- 文本节点：文字内容（高版本浏览器会把空格和换行也当做文本节点）
- 注释节点：注释内容
- document文档节点

>>元素节点  
+ nodeType：1
+ nodeName：大写标签（在部分浏览器的怪异模式下，我们写的标签名是小的，获取的就是小写的）
+ nodeValue：null
+ [curEle].tagName :获取当前元素的标签名（获取的标签一般都是大写）

>>文本节点
+ nodeType：3
+ nodeName：#text
+ nodeValue： 文本内容

>>注释节点
+ nodeType：8
+ nodeName：#comment
+ nodeValue：注释内容

>>文档节点
+ nodeType:9
+ nodeName:#document
+ nodeValue:null

demo
```javascript
<body>
    <div class="div1">hello</div>
    <div class="div1 div2">hellow</div>
    <div class="div1 div3"> hello </div>

  </body>

  //document.body.childNodes
  NodeList(7) [text, div.div1, text, div.div1.div2, text, div.div1.div3, text]
```


> 节点是用来描述页面中每一个部分之间的关系的。只要我可以获取页面中的一个节点，那么我就可以通过相关属性和方法获取页面中的所有的节点。
> 有时候文本节点，只是因为是换行符
![dom tree](img1/20.png)

`11个获取节点的方式``
+ childNodes获取当前元素的子节点（节点集合：类数组），不仅仅是元素节点，文本，注释都会包含在里面。子节点只是在儿子辈分中查找。
+ children 获取所有的元素子节点（元素集合），在IE6-8下获取的结果和标准浏览器中有区别，（ie6-8中会把注释节点当做元素节点）
+ parentNode获取当前元素的父节点（元素对象）
+ previousSibling/nextSibling  
>> previousSibling:获取当前节点的上一个哥哥节点（不一定是元素节点，可能是文本和注释）  
>>nextSibling:获取当前节点的下一个弟弟节点
+ previousElementSibling/nextEelmentSibling
>> previousElementSibling:获取当前节点的上一哥哥元素节点
>>nextEelmentSibling:获取当前节点的下一个弟弟元素节点
>>ie6.7,8不兼容
+ firstChild /lastChild
>> firstChild:当前元素所有子节点中的 第一个（也不一定是元素节点，可能是文本和注释）
>> lastChild:当前元素所有子节点中最后一个
+ firstElementChild/lastElementChild(IE6-8)不兼容
>>firstElementChild:当前元素所有子节点中第一个元素节点
>>lastElementChild:当前元素所有子节点中最后一个元素节点

### DOM中的增删改   查
> 真实项目中，偶尔会在js动态创创建一些HTML标签，然后把其增加到页面中。

+ document.creatElement在js中动态创建一个HTML标签。
+ 容器.appendChild(新元素)，把当前创建的新元素添加到容器末尾的位置。
+ 容器.insertBefore(新元素，老元素)。把当前创建的新元素添加到容器之前。




```javascript
var newElement =document.createElement("p")  //其实创建的是一个对象。  
//可以利用这个创建一个a标签，属性为href在，控制台打开。就可以用控制台解析这链接了。
newElement.id ="box";
newElement.innerText ="hello world" //这里可以给p添加id，className等。
document.body.appendChild(newElement)  添加到末尾的位置。
//<p>​hello world​</p>​
//console.log(newElement)得到一个对象。
```

```javascript
queryURLParameter的另外一种方法
function queryURLParameter(){
  var link =document.createElement("a");
  link.href =url;
  var search =link.search;
  var obj ={};
  if(search.length ===0) return;
  search = search.substr(1).split(/$|=/g);
  for(var i =0;i <search.length;i++){
    obj[i] =obj[i+1];

  }
  link = null;
  return obj;
}
```

+ 容器.removeChild(元素) 在当前容器中把某一个元素移除掉（获取元素先）
+ 容器.replaceChild(新元素，老元素)，在当前容器中，那新元素替代老元素
+ 元素.cloneNode(false/true)把原有的元素克隆一份一模一样的。默认是false。
克隆是不能克隆事件的。
>> false只克隆当前元素本身。  
>> true深度克隆，把当前元素本身以及元素的所有后代进行克隆。

+ set/get/remove]Attribute 给当前元素设置/获取/移除  属性（一般操作都是都是自定义属性）
```javascript
box.setAttribute("index",0);   //其实也可以box.index这样设置。
>> 区别是：box.index 是把当前操作的元素当做个一个普通对象，为其设置属性名  
（和页面中的HTML标签没关系）简单理解就是结构上没有，但是控制台有
>> box.setAttribute("index",0)把元素当做特殊对象处理，设置自定义属性是和  
页面结构中的DOM元素映射在一起的。结构上有，控制台没有。  
>>用那种办法设置，就用那种办法获取。
box.getAttribute("index");
box.removeAttribute("index");
box.setAttribute("style","background:yellow")
```

>js中获取的元素对象，我们可以理解为两种角色：
- 与页面Html结构无关的普通对象。
- 与页面html结构存在映射关系的元素对象。
- 元素对象中的内置对象，大部分都和页面的标签存在映射关系：
>> xxx.style.backgroundColor ="xxx"此时不仅把js中对象对应的属性改变了，  
也会映射到页面的html标签，标签中有一个style行内样式，元素的样式改变了。  
>>xxx.className ="xxx"此时不仅是把js对象中的属性值改变了，而且页面中的标签增加了class样式类（可以看见）  
>>元素对象中自定义属性：xxx.index=0，仅仅是把js对象增加了属性名，和页面中的html没啥关系。（在结构上看不见）  
>>xx.setAttribute:通过这种方式设置的自定义属性和之前提到的内置属性差不多，都和HTML结构存在映射关系。（设置的自定义属性可以呈现在结构上）


```javascript
var div1=document.getElementsByClassName("div1")[0];
div1.index =0
//0
div1.getAttribute("index")
//null
div1.index
//0
div1.setAttribute("index1",2)
div1.index1
//undefined
div1.getAttribute("index1")
//"2"
==>直接获取的方式只能获取节点本来具有的属性，而getAttribute（）可以获取自己定义的属性,但是不能获取本来具有的属性？
div1.style.backgroundColor
""
div1.getAttribute("style")
null
div1.getAttribute("style.backgroundColor")
null
div1.className
"div1"
div1.className
"div1"
div1.getAttribute("className")
null
```






### 兼容代码
`获取当前元素的上一个哥哥元素节点(兼容所有浏览器)`

```javascript
// 思路：如果没有，就不找了，就是null。如果有是其他的文本什么的就继续找，  
// 直到nodeType ==1
function prev(curEle){
  var p =curEle.previousSibling;
  // p和p！=null是一样的效果
  while(p  && p.nodeType !== 1){
    p = p.previousSibling;
  }
  return p;
}

```
`获取下一个弟弟元素节点`
```javascript
function next(curEle){
  var p =curEle.nextSibling;
  while(p && p.nodeType!==1){
    p = p.nextSibling;
  }
  return p;
}
```



`preAll获取所有的哥哥元素节点`
```javascript
// 思路是如果是null就没有了。然后nodetype为1就添加到空数组里面
function preAll(curEle){
  var allEle =[];
  var p = curEle.previousSibling;
  while(p){
    if(p.nodeType == 1){
      allEle.push(p);
    }
    p =p.previousSibling;
  }
  return allEle;
}
```

`获取所有的弟弟元素节点`
`获取所有兄弟元素节点`
`index:获取当前元素在兄弟的排名`


### Date日期操作基础
>date 是日期类，可以对时间进行处理。

```javascript
var time =new Date();//获取客户端本机的时间
不能作重要的参考依据
typeof new Date  ==》object

time.getFullYear（）获取四位整数年。
time.getMonth（）获取月(0-11)(1-12yue).
time.getDate()  获取日
time.getDay()  获取天  （0-6）
time.getHours() 获取小时
time.getMinutes() 获取分钟
time.getSeconds() 获取秒
time.getMilliseconds() 获取毫秒。
time.getTime()获取当前日期距离‘1970-01-01 00:00:00 ’的毫秒差

```

```javascript
var time =new Date('2017-10-22')

```
