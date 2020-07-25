// 页面初始化的时候，自动获取当前设备的宽高，然后将获取到的宽高赋值给场景页面
// dom加在完成后执行的方法，能够极大地提高响应速度
// 定义全局变量，记录当前页码
var numpage=1;

$(document).ready(function(){
    // 获取设备的宽高,只在移动端使用
    // pc端不能用，因为有滚动条
    var height= window.innerHeight;
    var width = window.innerWidth;
    // console.log(width+"    "+height);
    // 将获取到的设备宽高给div赋值
    $(".page").width(width);
    $(".page").height(height);
    // 最外层的content赋值
    $(".content").width(width);
    $(".content").height(height*4);
    // 先让楼房淡入，然后飞机再飞入
    $(".page1_building").fadeIn(2000,function(){
        $(".page1_flight").animate({
            width:"60%",
            height:"40%",
            top:"40%",
        },3000)
    })
    // 飞机由远到近的，逐渐变大的过程
    // animate自定义动画，可以灵活的调整状态
    // $(".page1_flight").animate({
    //     width:"60%",
    //     height:"40%",
    //     top:"40%",
    // },3000)
    // 鼠标按住不动，模拟手机上的屏幕滑动翻页,鼠标缩减按住不松手，上移
    // 添加滑动监听
    // event:事件 direction：方向  distance：滑动距离 fingerCount：滑动点数  duration：时长
    $(".content").swipe({
        swipe:function(event,direction,distance,duration,fingerCount){
            console.log(direction);
            if(direction=="up"){
                numpage++;
            }
            if(direction=="down"){
                numpage--;
            }
            if(numpage<1){
                numpage=1;
            }
            if(numpage>4){
                numpage=4;
            }
            // /*0表示第一页，-100%是第2页  -200%是第3页*/
            // 将content的top改变，第一页是0，所以每次滑动都是减小top值，才能实现翻页,后面的只能是赋值
            // 要用动画，不能用css改变
            $(".content").stop().animate({
                top:"-"+(numpage-1)*100+"%"
                // 翻页完成后执行动画效果
                // animationPage后面添()代表滑动之后立即执行
                // 不添加括号，表示不是滑动直接执行
            },2000,animationPage)
            console.log(numpage);
        }
    })
})
// 每一页的动画效果
function animationPage(){
    if(numpage==1){
        $(".page1_building").fadeIn(2000,function(){
            $(".page1_flight").animate({
                width:"60%",
                height:"40%",
                top:"40%",
            },3000)
        })
    }else if (numpage==2){
        // 淡入背景
        $(".page2_bg").fadeIn(2000,function(){
            $(".page2_fram").fadeIn(2000,function(){
                $(".page2_it").fadeIn(2000);
            })
        })
    }else if(numpage==3){
        // 场景1
        // 车向做移动
        $(".page3_bus").animate({left:"-100%"},2000);
        // // 人追
        $(".page3_avatar").animate({left:"50%"},3000,function(){
            // 场景1消失
            $("page3_station,.page3_avatar,.page3_bus_title,.page3_title").fadeOut("slow",function(){
                // 场景2淡入
                // 天台显示
                $(".page3_wall").fadeIn(1000,function(){
                    // 人显示
                    // console.log(numpage);
                    $(".page3_my").fadeIn(1000,function(){
                        // 文字逐渐变大
                        $(".page3_space").animate({width:"40%"},1000,function(){
                            $(".page3_where").animate({width:"40%"},1000)
                        })
                    })
                })
            })
        });
    }
}