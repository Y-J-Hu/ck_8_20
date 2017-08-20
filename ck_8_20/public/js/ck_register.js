
(function(){
    $('.item_p input').on("focus",function(e){
        var $e=$(e.target);
        $e.css("border","1px solid #3F88EB")
           .next().next().css("display","block")
           .parent().siblings().children("input").css("border","")
           .next().next().css("display","none");
    });

    function reguser(sel,reg){
        if(!reg.test(sel.val())){
            sel.next().addClass("item_error").next().text("格式不正确");
        }else{
            sel.next().removeClass().addClass("item_right item")
                .next().text("").css("display","none");
        }
    }
    var user=/^[A-Za-z0-9]{6,14}$/i;
    var phone=/^1[0-9]{10}$/;
    $('.item_p input').on("blur",function(e){
        $(e.target).css("border","");
    });
        var uname=$('#uName');
        var upwd=$('#uPwd');
        var unumber=$('#uNumber');
        var upwd2=$('#upwd2');
    $('#uName').blur(function(){
        reguser(uname,user);
    });
    $('#uPwd').blur(function(){
        reguser(upwd,user);
    });
    $('#uNumber').blur(function(){
        reguser(unumber,phone);
    });
    $('#uPwd2').blur(function(){
        if(upwd.val()!=$(this).val()){
            $(this).next().addClass("item_error").next().text("密码不正确");
        }else{
            $(this).next().removeClass().addClass("item_right item")
                .next().text("").css("display","none");
        }
    });

    $('#btn_reg').click(function(){
        var u=$('#uName').val();
        var p=$('#uPwd').val();
        var n=$('#uNumber').val();
        $.ajax({
            type:'POST',
            url:'/register.do',
            data:{uname:u,upwd:p,unumber:n},
            success:function(data){
                if(data.code>0){
                    console.log(data);
                    alert("注册成功！编号为："+data[0].uid);
                    location.href="ck_Login.html";
                }else{
                    alert(data.msg);
                }
            }

        })
        console.log();
    });
$("#btn_log").click(function(){
    location.href='ck_Login.html';
})

})();