/**
 * Created by web on 2017/7/31.
 */
/***ҳ��ͷ�������������¼�***/
$(window).bind("scroll",()=>{
    //�����������������
    var top=$(this) .scrollTop();
    //���header����body�����ľ��룻
    var header=$("#section_header");
    var offsetTop=header.offset().top;
    if(top>0){
        header.css("top",top*-1);
    }
});
