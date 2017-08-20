/******用户登录界面***********/
var uid=sessionStorage['uid'];
var uname=sessionStorage['uname'];
(function(){
    var str1=`
        <li>
            <a href="ck_Login.html" class="ac">马上登陆</a>
        </li>
        <li>
            <a href="ck_register.html" class="ac">注册</a>
        </li>`;
    var str2=`<li>
                <a href="javascript:;" class="ac">您好！&nbsp;欢迎&nbsp;${uname}</a>
        </li>
        <li>
            <a href="javascript:;" class="ac">注销</a>
        </li>`;
    if(uid==null){
        $("#login").html(str1);
    }else{
        $("#login").html(str2);
    }
    $("#login").on("click","a",function(e){
        var $this=$(e.target);
        if($this.text()=="注销"){
            //刷新
            location.reload();
            //清除会话数据
            sessionStorage.clear();
            $("#login").html(str1);

        }
    });
})();

/*header 开头导航条*/
(function() {
    //header li 获得焦点 背景颜色改变事件
    $(".liClient>a").hover(
        function(){
            var $this = $(this);
            $this.css("background", "#179362");
        },function(){
            var $this=$(this);
            $this.css("background","");
    });

    //搜索框 课程与学校 点击 显示隐藏事件
    var $ck=$("#ck_search1");
    var $fc=$("#fc_search1");
    $ck.on("click",function(e){
        "use strict";
        var $target=$(e.target);
        $target.css("display","none");
        $fc.css("display","block");
    });
    //课程与学校 获得焦点更换背景颜色
    $fc.on("mouseover","a",function(){
        $(this).css("background","#f0f0f0");
    });
    $fc.on("mouseout","a",function(){
        $(this).css("background","#fff");
    });
    $fc.on("click","a",function(e){
        var $target=$(e.target);
        $ck.html($target.text()+` <i class="icoR icoR4"></i>`);
        $ck.css("display","block");
        $fc.css("display","none");
    });
   var $ipts=$("#ck_ipt1");
    var span=$("#ck_ipt1>span")
    var as= $("#ck_ipt1>a");
    var is=$("#ck_ipt1>a>i");
    var ipt=$("#ck_ipt1>input").val();
    //表单验证是否为空
   $ipts.on("click",function(e){
       e.preventDefault();
       //var ipt=$(".ipt");
      span.css("display","none");
       if(ipt==null){
           span.css("display","block");
       }else{
           span.css("display","none");
       }
   });
    //搜索框按钮改变背景颜色
    $ipts.hover(function(){
        "use strict";
        as.css("background","#DEF4EB");
        is.addClass("tR_text_focus");
    },
   function(){
        "use strict";
        as.css("background","");
        is.removeClass("tR_text_focus");
    });
    //弹出框 更多下载hover
     $(".tc_download_bt").on("mouseover","a",function(e){
         $(this).css("background","#179362");

     });
    $(".tc_download_bt").on("mouseout","a",function(){
        $(this).css("background","");
    })

})();

