/**
 * Created by web on 2017/7/31.
 */
/***页面头部内容鼠标滚动事件***/
$(window).bind("scroll",()=>{
    //获得鼠标滚动滑动距离
    var top=$(this) .scrollTop();
    //获得header距离body顶部的距离；
    var header=$("#section_header");
    var offsetTop=header.offset().top;
    if(top>0){
        header.css("top",top*-1);
    }
});
