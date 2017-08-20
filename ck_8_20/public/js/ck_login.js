//验证用户名密码格式
$(".u_get").click(function(){
    var user=/^[A-Za-z0-9]{6,14}$/i;
   if(!user.test($("#userName").val())){
       //提示信息显示
       $("#u_Name span").css("display","block");
       //边框变色
       $("#userName").css("border","1px solid #3DC68E");
       return;
   }else{
       //提示信息消失
       $("#u_Name span").css("display","none");
       //输入框颜色消失
       $("#userPwd").css("border","");
   }

    if(!user.test($("#userPwd").val())){
        $("#u_Pwd span").css("display","block");
        $("#userPwd").css("border","1px solid #3DC68E");
        return;
    }else{
        $("#u_Pwd span").css("display","none");
        $("#userPwd").css("border","");
    }
    var u=$("#userName").val();
    var p=$("#userPwd").val();
    console.log(u);
    $.ajax({
        type:'POST',
        url:"/login.do",
        data:{uname:u,upwd:p},
        success:function(data) {
            //如果用户名或密码输入错误
           if(data.code<0){
               $("#u_Pwd span").html("");
               //提示信息显示 用户名或密码错误
               $("#u_Pwd span").html(data.msg)
                   .css("display","block");
           }
            //会话保存用户id 用户名
            sessionStorage['uid']=data[0].uid;
            sessionStorage['uname']=data[0].uname;
            //跳转首页
            location.href="ck_sy.html";
        }
    })

});
//input获得焦点边框变色
$(".u_input input").focus(function() {
    var $this = $(this);
    $this.css("border", "1px solid #3DC68E");
    $this.parent().siblings().children(2).css("border","");
});
$(".u_input input").blur(function(){
    $(this).css("border","");
});

