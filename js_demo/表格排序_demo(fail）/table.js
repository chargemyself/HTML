
var utils = {
        jsonParse:function(str){
            var val = null;
            try{
                val = JSON.parse(str)    
            }catch(e){
                val = eval("("+str+")")
            }
    
            return val;
        },
    };
    
var oTab = document.getElementById('tab');
var tHead = oTab.tHead;//表格的独有属性
var oThs = tHead.rows[0].cells;//表格的独有属性
var tBody = oTab.tBodies[0];
var oRows = tBody.rows;
var data = null
//1、首先获取后台（data.txt）中的数据->"JSON格式的字符串"
    //1)、首先创建一个Ajax对象
    var xhr = new XMLHttpRequest;
    //2)、打开我们需要请求数据的那个文件地址
    xhr.open('get','data.txt',false);
    //3)、监听请求的状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
            var val = xhr.responseText;
            data = utils.jsonParse(val);//前几节已经写好的方法
        }
    }
    //4)、发送请求
    xhr.send(null);
//2、实现数据绑定
    function bind(){
        var frg = document.createDocumentFragment();
        for(var i = 0;i<data.length;i++){
            var cur = data[i];
            var oTr = document.createElement("tr");//每一次循环创建一个tr
            //每一个tr中还需要创建四个TD，因为每一个对象中有四组键值对
            for(var key in cur){
                var oTd = document.createElement("td");
                if(key==="sex"){
                    oTd.innerHTML = cur[key]===0?"男":"女";
                }else{
                    oTd.innerHTML =cur[key];
                }                    
                oTr.appendChild(oTd); 
            }
            frg.appendChild(oTr);

        }
        tBody.appendChild(frg);
        frg = null;
    }
    bind()

    //实现隔行换色
    function changeBg(){
        for(var i = 0;i<oRows.length;i++){
            oRows[i].className = i%2===1?"bg":null;
        }
    }
    changeBg();
    //表格排序方法:实现按照年龄这一列排序
    function sort(n){//n是当前点击这一列的索引
        //把存储所有行的类数组转化为数组
        var ary = utils.listToArray(oRows);
        var _this = this;
        //给数组排序：按照每一行中的第二列的内容
　　　　　　　　　//点击当前列，需要让其他的列的flag存储的值回归到初始值-1，这样在返回头点击其他列，才是按照升序排列
　　　　　　　　　for（var k = 0;k<oThs.length;k++）{
          if(oThs[k]!==this){
　　    　　　　　　　　oThs[k].flag = -1;
　　　　　　　　   }
       }

        _this.flag*=-1;
        ary.sort(function(a,b){
            var curInn = a.cells[n].innerHTML;
            var nexInn = b.cells[n].innerHTML;
            var curInnNum = parseFloat(a.cells[n].innerHTML);
            var nexInnNum = parseFloat(b.cells[n].innerHTML);
            if(isNaN(curInnNum) || isNaN(nexInnNum)){//处理非数字的排序
                return (curInn.localeCompare(nexInn))*_this.flag;
            }
            return (curInnNum-nexInnNum)*_this.flag
        })
        //按照ary中的最新顺序，把每一行重新的添加到tBody中
        var frg = document.createDocumentFragment();
        for(var i = 0;i<ary.length;i++){
            frg.appendChild(ary[i])
        }
        tBody.appendChild(frg);
        frg = null;
        //按照最新的顺序 重新进行隔行换色
        changeBg();
    }
    //点击所有具有class='cursor'这个样式的都 进行排序

    for(var i = 0;i<oThs.length;i++){
        var curTh = oThs[i];
        curTh.index = i;//获取索引
        curTh.flag = -1;//升降序
        if(curTh.className==='cursor'){
            curTh.onclick = function(){
                sort.call(this,this.index);
            }
        }
    }