# 流程控制
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
![text](../img1/5.png)
![text](../img1/6.png)

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

## for in 循环
