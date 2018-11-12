### 什么是js模型？
>js盒子模型指的是通过js中提供的一系列的属性和方法，获取页面元素  
样式的信息
```javascript
元素的原型链 模式。
#box(有很多私有属性)-》HTMLDivElement.prototype==>HTMLELement.prototype
===>Element.prototype==>Node.prototype==>EventTarget.prototype==>Object.prototype
 div.className =" ";
 div.classList.add();添加className
div.contentEditable =true;
```
>内容的宽度和高度：我们设置的width/height这两个样式是内容的宽和高，如果没有设置height的值，容器的高度会根据里面内容进行适应，这样获取的值就是真实的内容的高，如果设置的固定的高度了，不管内容是多还是少，其实我们的内容的高度指的都是那个值。

>真实内容的宽度和高度：这个代指的是实际内容的宽高（和我们设置的height没有必然联系）例如，我设置高度为200px，如果内容有溢出，那么真实内容高度就要把溢出内容的高度加进来。
1. client系列(当前元素的几个私有属性)

>clientWidth/clientHeight :内容的宽度/高度+左右/上下填充（和内容溢出没有关系）  

>clientLeft:左边框的宽度； clientTop：上边框的高度（(border[Left/Top]Width)
