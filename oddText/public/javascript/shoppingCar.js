/**
 * Created by Administrator on 2016/5/11.
 */


    //购物车勾选图片变换
var checkShop = document.getElementsByName("divName");
var checkShopImg = document.getElementsByClassName("checkShopImg");
for(var i = 0;i< checkShop.length;i++){
    (function(i){
        checkShop[i].onclick = function(){
            alert(checkShop[i]);
            if(checkShopImg[i].src.slice(-17) == "image/checked.png"){
                checkShopImg[i].src = "public/image/nochecked.png"
            }else{
                checkShopImg[i].src = "public/image/checked.png";
            }
        }
    })(i)
}


     //删除提示框功能样式实现
var confirm =document.getElementById("confirm");
var cancle = document.getElementById("cancel");
var close = document.getElementById("close");
    $(function() {
        $("button[name=gotopay]").click(function () {
            $(".bottom").css("opacity", "0.3");
            $(".bottom").css("disabled", "true");
            $(".aret1").css("display", "block");
            $(".closeBtn").click(function () {
                $(".bottom").css("opacity", "1");
                $(".bottom").css("disabled", "false");
                $(".aret2").css("display", "none");
            })
            $(".btnCenter").click(function () {
                $(".bottom").css("opacity", "1");
                $(".bottom").css("disabled", "false");
                $(".aret2").css("display", "none");
            })
        });

       $("button[name=deleatGood]").click(function () {
                var a = this;
                $(".bottom").css("opacity", "0.3");
                $(".bottom").css("disabled", "true");
                $(".aret1").css("display", "block");
                $("#confirm").click(function () {
                    $(a).parent().parent().remove();
                    $(".bottom").css("opacity", "1");
                    $(".bottom").css("disabled", "false");
                    $(".aret1").css("display", "none");
                })
                $("#cancle").click(function () {
                    $(".bottom").css("opacity", "1");
                    $(".bottom").css("disabled", "false");
                    $(".aret1").css("display", "none");
                })
                $(".closeBtn").click(function () {
                    $(".bottom").css("opacity", "1");
                    $(".bottom").css("disabled", "false");
                    $(".aret1").css("display", "none");
                })
            });

    });
