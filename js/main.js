// 1.获取content div标签
var content=document.getElementById("content");
// 2.给标签赋值
content.innerHTML="你好，世界";
// // 3.修改css
content.style.width="200px";
content.style.backgroundColor="#ff538"
content.style.backgroundImage="url(but.png)";  //文件位置是参照当前网页文件的位置，不是js文件位置
content.style.color="white";
content.style.fontSize="50px";
// // 4.修改标签的属性
// content.className="test";
// // 获取img标签
// var showtag=document.getElementById("show_img");
// showtag.src="but.png";