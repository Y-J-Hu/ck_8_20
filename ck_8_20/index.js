var http=require("http");
var express=require("express");
var qs=require("querystring");
var mysql=require("mysql");
//创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"ck",
    port:3306,
    connectionLimit:25
});
//创建服务器监听端口
var app=express();
var server=http.createServer(app);
server.listen(8088);
//中间键
app.use(express.static("public"));


//猜你喜欢
//功能：刷新界面随机显示4个
app.get("/list",(req,res)=>{
    var num=parseInt(req.query.num);
    //获取数据库链接
    pool.getConnection((err,conn)=>{
        var sql="select*from ck_product limit ?,?";
        conn.query(sql,[num,4],(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();

        });
    });

});

//最近直播课
//功能：根据时间显示当天直播 明天直播 后天直播内容 放入对应的ul中


//下方轮播图
//功能：动态加载轮播图片和图片下方的名称
app.get("/imgLish",(req,res)=>{
   pool.getConnection((err, conn)=>{
       var sql="select*From ck_limg";
      conn.query(sql,(err,result)=>{
          if(err) throw err;
         res.json(result);
          conn.release();
      })
   })
});

//用户注册
// 添加数据库
app.post('/register.do',(req,res)=>{
    req.on('data',(data)=>{

        var str=data.toString();
        console.log(str);
        var obj=qs.parse(str);
        console.log(obj);
        var uname=obj.uname;
        console.log(uname);
        var upwd=obj.upwd;
        var unumber=obj.unumber;
        pool.getConnection((err,conn)=>{
            var sql='insert into ck_user values(null,?,?,?)';
            if(err)throw err;
            conn.query(sql,[uname,upwd,unumber],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.json({code:1,msg:"添加成功"});
                }else{
                    res.json({code:-1,msg:"添加失败"});
                }
                conn.release();
            })
        })
    })
});

//用户登录 登录之后直接跳转首页
//查找数据库验证用户名和密码
app.post("/login.do",(req,res)=>{
    req.on("data",(data)=>{
        var str=data.toString();
        var obj=qs.parse(str);
        var u=obj.uname;
        var p=obj.upwd;
        pool.getConnection((err,conn)=>{
            var sql="select * from ck_user where uname=? and upwd=?";
            conn.query(sql,[u,p],(err,result)=>{
                if(err)throw err;
                if(result.length==0){
                    res.json({code:-1,msg:"用户名或密码不正确"});
                }else{
                    res.json(result);
                }
                conn.release();

            })
        })

    })
});

