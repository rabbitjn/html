// 实现鼠标覆盖导航栏图片切换显示图片
// 1.1鼠标覆盖事件,获取所有导航图片
var imgeOneList=document.getElementsByClassName("imge_one");
// 1.2获取显示图片
var showImg=document.getElementById("show_img");  
// 1.3显示放大图片的标签
var bigImg = document.getElementById("big_img")
// 1.4 获取显示鱼片的div
var showDiv=document.getElementById("show_div");
// 1.5遍历整个数组，获取每一个图片标签，并且给每一个添加鼠标覆盖事件
for (var i=0;i<imgeOneList.length;i++){
    // 根据下标获取每一张图片
    var imgOne=imgeOneList[i];
    // 给每一个图片添加鼠标覆盖事件onmouseenter
    // 鼠标移除（离开)onmouseleave   
    imgOne.onmouseenter=function(){
        //鼠标覆盖哪张，就将当前覆盖图片的src赋值给图片的src（show_img）
        // showImg=imgOne.scr;
        // this当前对象(鼠标覆盖的图片)
        showImg.src=this.src;
        // 修改bigImg图片
        // id calss src name预定义属性，
        // 获取img的 自定义属性big-src，getAttribute
        bigImg.src=this.getAttribute("big-src");

    }
}
// 2.实现鼠标在show——div上移动，阴影区域跟随移动
var bigDiv=document.getElementById("big_div");
// 2.1获取阴影区域
var shadow=document.getElementById("shadow");
// e,event事件的缩写,鼠标的坐标通过鼠标移动事件传递到方法中
showDiv.onmousemove=function(e){
    //2.1 显示阴影区域
    shadow.style.display="block";
    bigDiv.style.display="block";
    // 2.2获取鼠标移动的横纵坐标
    var pageX = e.clientX;
    var pageY = e.clientY;
    // console.log(pageX+"---"+pageY)
    // 2.3计算阴影区域的坐标
    // shadow.offsetWidth获取阴影区域逇宽度
    var x=pageX-shadow.offsetWidth/2;
    var y=pageY-shadow.offsetHeight/2;
    // 2.3鼠标移动的坐标给阴影区域的偏移量复制,鼠标就是阴影的最左边坐标
    // shadow.style.left=pageX+"px";
    // shadow.style.top=pageY+"px";
    // 2.4鼠标移动的坐标给阴影区域的偏移量复制,最上面的最左边出去了
    // shadow.style.left = x+"px";
    // shadow.style.top = y+"px";
 

    //2.4 计算阴影区域最大右移和最大下移的偏移量
    var maxRight = showDiv.offsetWidth-shadow.offsetWidth;
    var maxBottom = showDiv.offsetHeight-shadow.offsetHeight;
    if(x<=0){
        x=0;
    }
    if(x>=maxRight){
        x=maxRight;
    }
    if(y<=0){
        y=0;
    }
    if(y>=maxBottom){
        y=maxBottom;
    }
    // 2.5鼠标移动的坐标给阴影区域的偏移量复制,最上面的最左边出去了
    shadow.style.left = x+"px";
    shadow.style.top = y+"px";
    // 3 根据小阴影区域覆盖位置
     // 3.1计算对应放大区域的坐标
    var bigX= shadow.offsetLeft*bigImg.offsetWidth/showDiv.offsetWidth;
    var bigY = shadow.offsetTop*bigImg.offsetHeight/showDiv.offsetHeight;
    // 3.2计算出来的坐标赋值给
    bigImg.style.left=-bigX+"px";
    bigImg.style.top=-bigY+"px";
}
// 4。鼠标移除showDiv，阴影区域和放大的div要隐藏
showDiv.onmouseout=function(){
    shadow.style.display="none";
    bigDiv.style.display="none";
}
// enter和leave 不用out 和move
// 不要再图片上做放大等，在div上做，因为图片会有卡顿.