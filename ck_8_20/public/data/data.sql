//猜你喜欢
create database ck charset=utf8;
use ck;
create table ck_product(
    pid int primary key auto_increment,
    pname varchar(2000),
    price varchar(200),
    pic varchar(2000),
    pcount double(10,2),
    ptime datetime
);
insert into ck_product values(null,"产品类岗位职责","免费",'f1_08.jpg',12.7,now());
insert into ck_product values(null,"Android安卓零基础开发实战经典","免费",'f1_14.jpg',13.5,now());
insert into ck_product values(null,"java经典教学","免费",'f1_04.jpg',10.4,now());
insert into ck_product values(null,"UID设计-运营活动设计","免费",'f1_11.jpg',7.8,now());
insert into ck_product values(null,"English英语入门","免费",'f1.jpeg',21.1,now());
insert into ck_product values(null,"2014秋季录播课全集","免费",'f1_03.jpg',10.2,now());
insert into ck_product values(null,"会计从业资格考试-会计基础","免费",'f1_05.jpeg',4.2,now());
insert into ck_product values(null,"标准韩国语","免费",'f1_06.gif',3.5,now());
insert into ck_product values(null,"手绘卡片-卡通人物创造","免费",'f1_07.jpg',15.1,now());
insert into ck_product values(null,"十分钟玩转PPT","免费",'f1_09.jpg',23.3,now());
insert into ck_product values(null,"药学专业知识","免费",'f1_10.jpg',54.6,now());
insert into ck_product values(null,"Ps入门概念","免费",'f1_12.jpg',78.3,now());
insert into ck_product values(null,"SXT尚学堂-javascript","免费",'f1_13.jpg',46.13,now());
insert into ck_product values(null,"【竞赛培训】自然语言处理(NLP)技术解谜--百度NLP资深","免费",'f1_15.jpg',34.56,now());
insert into ck_product values(null,"Excel2013如何突破学习瓶颈专题","免费",'f1_16.jpg',4.89,now());
insert into ck_product values(null,"PhotoShop Cs3 基础教程7天速成","免费",'f1_17.jpg',11.4,now());
//最近直播课
create table ck_TV(
    tid int primary key auto_increment,
    tdate datetime,
    tname varchar(50000)
);
insert into ck_TV values(null,2017-8-10," <li><span class='time'>18:30</span> <span class='c_name'><a href='#' title='添翼ISPN CGFNS RN7月份:暑期词汇课' target='_blank' class='clearfix'>添翼ISPN CGFNS RN7月份直播课：暑期词汇课</a> </span> </li>");

insert into ck_TV values(null,2017-8-10," <li><span class='time'>18:00</span> <span class='c_name'><a href='#' title='你好法语 A2 初级 中级 法语学习' target='_blank' class='clearfix'></a></span></li>");
insert into ck_TV values(null,2017-8-10," <li><span class='time'>19:45</span><span class='c_name'> <a href='#' title='自然拼读预备阶段：培养孩子的听音辨音能力' target='_blank' class='clearfix'>自然拼读预备阶段：培养孩子的听音辨音能力</a></span> </li>");

insert into ck_TV values(null,2017-8-11," <li> <span class='time'>20:00</span> <span class='c_name'><a href='#' title='2018高考地理暑期一轮复习（上）+自然地理部分' target='_blank' class='clearfix'>2018高考地理暑期一轮复习（上）+自然地理部分</a> </span> </li>");

insert into ck_TV values(null,2017-8-11,"  <li> <span class='time'>20:00</span> <span class='c_name'><a href=' title='#'【直播】新概念英语第一册免费公开课 每周五周六晚八点' target='_blank' class='clearfix'>【直播】新概念英语第一册免费公开课 每周五周六晚八点</a> </span></li>");

insert into ck_TV values(null,2017-8-11,"<li><span class='time'>20:00</span><span class='c_name'><a href='#' title='你好法语-B1阶段' target='_blank' class='clearfix'>你好法语-B1阶段</a></span></li>");

insert into ck_TV values(null,2017-8-11,"<li> <span class='time'>06:45</span><span class='c_name'><a href="" title='吴昊物理网校高中物理选修3-4系列1：机械振动' target='_blank' class='clearfix'>吴昊物理网校高中物理选修3-4系列1：机械振动</a></span></li>");

insert into ck_TV values(null,2017-8-11," <li><span class='time'>19:00</span><span class='c_name'><a href='#' title='添翼西医综合护理中文课程--王老师护士资格证考试培训' target='_blank' class='clearfix' >添翼西医综合护理中文课程--王老师护士资格证考试培训</a></span> </li>");

insert into ck_TV values(null,2017-8-12," <li><span class='time'>20:00</span><span class='c_name'><a href='#' title='【建筑实务】2017年一级建造师建筑实务精讲及每日作业讲解' target='_blank' class='clearfix'>【建筑实务】2017年一级建造师建筑实务精讲及每日作业讲解</a></span></li>");

insert into ck_TV values(null,2017-8-13," <li><span class='time'>21:45</span><span class='c_name'> <a href='#'title='吴昊物理网校高中物理选修3-4系列2：机械波' target='_blank' class='clearfix'>吴昊物理网校高中物理选修3-4系列2：机械波</a></span></li>");
insert into ck_TV values(null,2017-8-13," <li><span class='time'>22:15</span><span class='c_name'><a href='#' title='吴昊物理网校高中物理选修3-4系列3：光' target='_blank' class='clearfix' >吴昊物理网校高中物理选修3-4系列3：光</a></span></li>");
insert into ck_TV values(null,2017-8-13," <li><span class='time'>05:30</span><span class='c_name'><a href='#' title='吴昊物理网校高中物理选修3-5系列5：七年光电原子真题' target='_blank' class='clearfix' >吴昊物理网校高中物理选修3-5系列5：七年光电原子真题</a></span></li>");
insert into ck_TV values(null,2017-8-13," <li><span class='time'>09:00</span><span class='c_name'><a href='#' title='明宇培训cad案例课程绘图实操' target='_blank' class='clearfix'>明宇培训cad案例课程绘图实操</a></span></li>");

insert into ck_TV values(null,2017-8-13," <li><span class='time'>20:30</span><span class='c_name'><a href='' title='室内高端渲染VIP大师班' target='_blank' class='clearfix'>室内高端渲染VIP大师班</a></span></li>");
insert into ck_TV values(null,2017-8-13,"<li><span class='time'>05:30</span><span class='c_name'><a href='' title='吴昊物理网校高中物理必修1系列5：自由落体运动' target='_blank' class='clearfix'>吴昊物理网校高中物理必修1系列5：自由落体运动</a></span></li>");

insert into ck_TV values(null,2017-8-13,"<li>span class='time'>06:45</span><span class='c_name'><a href='' title='吴昊物理网校高中物理必修1系列6：重力、弹力、摩擦力' target='_blank' class='clearfix'>吴昊物理网校高中物理必修1系列6：重力、弹力、摩擦力</a></span></li>");


#用户登录
create table ck_user(
    uid int primary key auto_increment,
    uname varchar(200),
    upwd varchar(200)
);

insert into ck_user values(null,'dongqiang','123456');
insert into ck_user values(null,'dacheng','123456');
insert into ck_user values(null,'taobao','123456');

//下面轮播图
create table ck_Limg(
    lid int primary key auto_increment,
    url varchar(1000),
    name varchar(1000)
);
insert into ck_Limg values(null,"4935986_big.jpg","大地经纬");
insert into ck_Limg values(null,"1893932_big.jpg","谢明波语文网课");
insert into ck_Limg values(null,"4455342_big.jpg","蓝迈政治课堂");
insert into ck_Limg values(null,"5062908_big.jpg","职坐标");
insert into ck_Limg values(null,"1827213_big.jpg","火星人课堂");
insert into ck_Limg values(null,"2209515_big.jpg","汇众教育");
insert into ck_Limg values(null,"1243964_big.jpg","一路行医路行");
insert into ck_Limg values(null,"3295917_big.jpg","黄冈99教育");
insert into ck_Limg values(null,"1351317_big.jpg","赢在职场");






