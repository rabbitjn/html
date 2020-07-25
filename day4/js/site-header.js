//鼠标聚集input框时
$(".search-text").focusin(function(){
    //修改form的边框颜色
    $(".header-search form").css("border","1px solid #ff6700");
    //改变input框的右边框
    $(this).css("border-right","1px solid #ff6700");
    //显示keywordlist
    $(".keywordlist").show();
})
//鼠标失去input框焦点时
$(".search-text").focusout(function(){
    //修改form的边框颜色
    $(".header-search form").css("border","1px solid #e0e0e0");
    //改变input框的右边框
    $(this).css("border-right","1px solid #e0e0e0");
    //显示keywordlist
    $(".keywordlist").hide();
})
// 鼠标覆盖搜索框
$("header-search a").hover(function(){
    // 改变颜色
    $(this).css("background-color","#ff6700");
    // 更换图片
    $(".header-search" .img).css("src","./");
},function(){
    $(this).css("background-color","white"); 
})

// --------------------手风琴菜单
$(".header-nav a").mouseenter(function(){
    // 获取鼠标覆盖的是哪个菜单
    
})