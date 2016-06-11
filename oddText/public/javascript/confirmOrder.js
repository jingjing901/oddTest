/**
 * Created by Administrator on 2016/5/3.
 */


   //弹框效果实现

$(document).ready(function(){
    $('#alipayBtn').click(function(){
        defaultsrc = document.getElementById("alipay");
        defaultsrc.src = ['public/image/checked.png'];
        imgsrc=document.getElementById('wechat');
        imgsrc.src=['public/image/nochecked.png'];
        return false;
    })
    //选择店铺弹框
    var allPage = document.getElementById("allPage");
    $("#checkShop").click(function(){
        $(".bottom").css("opacity","0.3");
        $(".bottom").css("disabled", "false");
        $(".aret").css("display","block");
        //allPage.attr("disabled","disabled");
    })
    $("#ckeckOk").click(function(){
        $(".bottom").css("opacity","1");
        $(".aret").css("display","none");
    })
    $(".closeBtn").click(function(){
        $(".bottom").css("opacity","1");
        $(".bottom").css("disabled", "true");
        $(".aret").css("display","none");
    })
    //立即结算弹框判断店铺是否有此商品
    $("#settlement").click(function(){
        $(".bottom").css("opacity","0.3");
        $(".bottom").css("disabled", "false");
        $(".aret2").css("display","block");
    })
    $(".closeBtn").click(function () {
        $(".bottom").css("opacity", "1");
        $(".bottom").css("disabled", "true");
        $(".aret2").css("display", "none");
    })
})


   //选择支付方式按钮变化
$(document).ready(function(){
    $('#wechatBtn').click(function(){
        defaultsrc = document.getElementById("wechat");
        defaultsrc.src = ['public/image/checked.png'];
        imgsrc=document.getElementById('alipay');
        imgsrc.src=['public/image/nochecked.png'];
        return false;
    })
})


   //购买是否可以参加活动
$(document).ready(function(){
    var number = document.getElementById("number").innerText;
    oddTestsrc = document.getElementById("oddTest");
    oddTestC = document.getElementById("oddTestC");
    if(number>1){
        oddTestsrc.src = ['public/image/checked.png'];
        $("#choseOddTest").click(function(){

        })
    }else {
        oddTestsrc.src = ['public/image/nochecked.png'];
        oddTestC.hidden = true;
        $("#choseOddTest").click(function(){
                $("#activities").click(function(){
                    $(".bottom").css("opacity","1");
                    $(".bottom").css("disabled", "false");
                    $(".aret1").css("display","black");
                })
        })
        $(".closeBtn").click(function () {
            $(".bottom").css("opacity", "1");
            $(".bottom").css("disabled", "true");
            $(".aret2").css("display", "none");
        })
    }
})
var checkshop = document.getElementById("checkShop");
