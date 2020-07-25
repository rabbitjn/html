//当鼠标移入购物车时执行方法
$(".topbar-cart").mouseenter(function(){
    //修改背景色为白色
    $(".cart-mini").css("background","white");
    //修改文字颜色  #ff6700
    $(".cart-mini").css("color","#ff6700");
    //更换购物车图片
    $(".cart-mini img").attr("src","img/d0/692a6c3b0a93a24f74a29c0f9d68ec71.png");
    //购物车列表慢慢滑下
    $(".cart-menu").stop().slideDown(300);
})
//当鼠标移出购物车执行方法
$(".topbar-cart").mouseleave(function(){
    //修改背景色
    $(".cart-mini").css("background","#424242");
    //修改文字颜色
    $(".cart-mini").css("color","#b0b0b0");
    //更换购物车图片
    $(".cart-mini img").attr("src","img/d0/d7db56d1d850113f016c95e289e36efa.png");
    //购物车列表慢慢滑下
    $(".cart-menu").stop().slideUp(300);
})