$(".topbar-cart").mouseenter(function(){
    $(".cart-mini").css("background","white");
    // 修改文字颜色
    $(".cart-mini").css("color","#ff6700");
    // 购物车图片
    // $(".cart-mini img").attr("src","../img/d0/692a6c3b0a93a24f74a29c0f9d68ec71.png");
    // 购物车列表慢慢华夏
    $(".cart-menu").slideDown(300);
})
// 鼠标移除购物车,没出来
$(".topbar-cart").mouseenter(function(){
    $(".cart-mini").css("background","#424242");
    // 修改文字颜色
    $(".cart-mini").css("color","#ff6700");
    // 购物车图片
    $(".cart-mini img").attr("src","../img/d0/692a6c3b0a93a24f74a29c0f9d68ec71.png");
    // 购物车列表慢慢华夏
    $(".cart-menu").slideDown(300);
})