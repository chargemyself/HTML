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
　var curWidth =document.documentElement.clientWidth ||  document.body.clientWidth//兼容所有浏览器的获取当前屏幕的宽度  
var curHeight = document.documentElement.clientHeight || document.body.clientHeight//兼容所有浏览器的获取当前屏幕的高度
- 在移动端我们回去元素常用的方法（IE6~8下不兼容）  
　document.querySelector()获取一个  
　document.querySelectorAll()获取多个