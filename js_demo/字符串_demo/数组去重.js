// 方法一：双循环遍历法
function removeRea1(ary){
    for(var i =0;i<ary.length-1;i++){
        var cur =ary[i];
        for(var j =i +1;j<ary.length;j++){
            if(cur ===ary[j]){
                ary.splice(j,1);
                // // //数组塌陷问题：使用splice删除数组中的某一项后，删除的这一项后面的每
                // 一项索引都要前进一位，此时如果
                // // j++，循环操作累加了，最新j后去的元素不是紧挨删除的这一项，而是跳过获取的元素。
                j--;
            }


        }
    }
    return ary;
}
// function removeRea1(ary){
//     for(var i =0;i<ary.length-1;i++){
//         var cur =ary[i];
//         for(var j =i +1;j<ary.length;){
// //          if(cur===ary[j]){
//     ary.splice(j,1);
// }else{
//     j++;
// }

//或者：cur ===ary[j]?ary.splice(j,1):j++
//         }
//     }
//     return ary;
// }


// 方法二：indexOf方法
function removeRea2(ary){
    for(var i =0;i <ary.length;i++){
        var cur =ary[i];
        var curNextAry =ary.slice(i+1);
        // 把當前項後面的那些值以一个新数组返回，我们需要比较的就是
        // 这些项对应的新数组
        if(curNextAry.indexOf(cur)>-1){
            ary.splice(i,1);
            i--;
        }
    }
return ary;
}


// 方法三：
// 遍历数组中的每一项，把每一项作为新对象的属性名和属性值储存起来。当前项是1，就是{1:1}
// 在每一次对象中储存之前，首先看一下原来对象中是否包含了这个属性（tupeof obj[xxx] ==="undefinde"
// 说明没有这个属性。如果存在这个属性说明数组中的当前项是重复的。
// 在原数组中删除这个项。不再向对象储存这个结果。如果不存在就当做对象储存进去。

function removeRea3(ary){
    var obj ={};
    for(var i=0;i<ary.length;i++){
        var cur =ary[i];
        if(typeof obj[cur] !=="undefined"){
      // ary.splice(i,1) ==>使用splice会导致后面的索引向前进一位，如果后面很多项。很消耗性能。
    //   思路，我们把最后一项拿过来替代当前要删除的这一项，然后把最后一项删除。
     ary[i] =ary[ary.length-1];
     ary.length--;
     i--;
     continue; 
        }
        obj[cur]=cur;
    }
    return ary;
}
// 对象可以利用这个.这个居然还带有排序功能，对象的属性名，是不能重复的。而且
function removeRepeat(ary){
    var obj ={}
    var newAry =[]
    for(var i=0;i<ary.length;i++){
        obj[ary[i]] =   ary[i];
    }
    for(var key in obj){
        newAry.push(obj[key]);
    }
    return newAry;}


    // 或者原型链上面修改
    Array.prototype.myUnique=function myUnique(){
        var obj ={};
        for(var i =0;i <this.length;i++){
            var item =this[i];
            if(typeof obj[item] !=='undefined'){
                this[i] = this[this.length -1];
                this.length --;
                i--;
                continue;
            }
            obj[item] =item;
        }
        obj =null;
        return this;
    }