$(function(){
    "use strict";
    $("#header").load("ck_header.html");
});


/*************轮播图****************/
+function(){
    "use strict";
    var image=[
        "img/header_01.jpg",
        "img/header_02.jpg",
        "img/header_03.jpg",
        "img/header_04.jpg",
        "img/header_05.jpg"
    ];
    var $images=$("#images");
    var $indexs=$("#indexs");
    var str="",strIndex="",i=1;
    for(var src of image){
        str+=`<li>
            <a href="#">
                <img src="${src}" />
            </a>
        </li>`;
        strIndex+=`<li><a href="#" value="${i++}"></a></li>`;
    }
    $images.append(str);
    $indexs.append(strIndex);
    $(" #images li:nth-child(1)").addClass("active");
    $("#indexs li:nth-child(1) a").addClass("active");
    var a=0;
    function play(){
        a++;
        if(a>=6){
            a=1;
            start();
        }else{
            start();
        }
    }
    var timer=setInterval(play,3000);
    function start(){
        $(" #images li:nth-child("+a+")").addClass("active").siblings().removeClass("active");
        $(" #indexs li:nth-child("+a+")").children().addClass("active").parent().siblings().children().removeClass("active");
    }
    //更新：重新创建一个定时器timer2 设置点击事件和移出事件之后 timer开始的等待时间
    //bug:设置之后 重新开始的下标又变成之前的下标
    //var timer2=null;

    $(" .slide_Banner").mouseout(e=>{
        timer=setInterval(play,3000);
        //clearInterval(timer2);
    });

    $(".slide_Banner").mouseover(e=>{
       // timer2=setInterval(start(),1000);
        clearInterval(timer);

    });
    //bug：点击按钮事件结束 下标重新变回 定时器之前的下标
    var lis=document.querySelectorAll("#indexs li");
    for(var i=0;i<lis.length;i++ ){
        lis[i].index=i;
        lis[i].onclick=function(){
          var i1=this.index;
           start(i1);
        }
    }
    //点击事件 indexs 下的Li
    $indexs.on("click","a",e=>{
        var i=$(e.target).parent().index();
        $(e.target).addClass("active").parent().siblings().children().removeClass("active");
        i++;
        $(" #images li:nth-child("+i+")").addClass("active").siblings().removeClass("active");

    })
}();
/***********课程导航中的内容***************/
(function(){
    //所有课程下的分类列表中的hover事件
    $(".i_hd").hover(function(){
        $(this).addClass("active");
        $(this).children().last().remove();
           $(this).siblings().show();


    },function(){
        $(this).removeClass("active");
        var is=`<i class="i_hd_arr"></i>`;
        $(this).append(is);
        $(this).siblings().hide();
    });
    //默认首页下的hover 事件 opacity 更改透明度
    $(".content_focus>div").hover(function(){
        $(this).css("opacity","0.7");
    },function(){
        $(this).css("opacity","1");
    })
    $(".content_right img").hover(function(){
        $(this).css("opacity","0.7");
    },function(){
        $(this).css("opacity","1");
    })


})();
/*********热门学校 学校排名 点击切换**************/
(function(){
    $(".school_f li").click(function(){
        var $t=$(this);
        $t.addClass("active")
            .siblings().removeClass("active");
        var $is=$t.index();
       $(".f_body>div").eq($is).addClass("active")
           .siblings().removeClass("active");
    })
})();


/***网页尾部内容*****/
+function(){
    $('.s_gz .con a').hover(function(e){
        var target=$(e.target);
        target.css("text-decoration","underline");
    },function(e){
        var target=$(e.target);
        target.css("text-decoration","none");
    })
    $('.s_gz .weixin').hover(function(){
        var weixin=$(".s_gz .erweima");
        weixin.show();
    },function(){
        var weixin=$(".s_gz .erweima");
        weixin.hide();
    })
}();

/********************异步加载内容**********************/
/****猜你喜欢*****/
(()=>{
    $("#btn_num").click(function(){
        var num=Math.floor(Math.random()*13);
        $.ajax({
            type:"GET",
            url:"/list",
            data:{num:num},
            success:function(data){
                var html="";
                for(var i=0;i<data.length;i++){
                    var o=data[i];
                    html+=`
                <li class="inner_img">
                    <a href="#">
                    <img src="img/data/${o.pic}" alt="${o.pname}"/>
                    </a>
                    <p><a href="#">${o.pname}</a></p>
                    <div class="inner_span">
                    <span class="left_span">${o.price}</span>
                    <span class="right_span"><i class="i_177">${o.pcount}万</i>次学习</span>
                    </div>
                    </li>`;
                }
                $("#section_content .f1>.section_left>.f_content").html(html);
            }
        })

    })
})();
/******最受欢迎的学校轮播图***********/
(function(){
    //var str="";
    //str+=`<li>
    //                <a href="#">
    //                    <img src="${$imags.index(0)}" alt=""/>
    //                </a>
    //                <p><a href="#">${$ips.index(0)}</a></p>
    //            </li>`;
    //$ulImgs.append(str).css("width",($liImgs.length+1)*LIWIDTH);
    $.ajax({
        type:"GET",
        url:"/imgLish",
        success:function(data) {
            var str = "",
                $ulImgs = $("#Imgs"),
                LIWIDTH = 125,
                interval = 500, timer = null, moved = 0;
            for (var li of data) {
                str += `<li>
                    <a href="#">
                        <img src="img/${li.url}" alt=""/>
                    </a>
                    <p><a href="#">${li.name}</a></p>
                </li>`;
            }
            $ulImgs.append(str).css("width", (data.length + 1) * LIWIDTH);
            play();
        }
    });



})();

