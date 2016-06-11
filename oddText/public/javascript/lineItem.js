/**
 * Created by Administrator on 2016/5/5.
 */
$(document).ready(function(){
    $("#addCar").click(function(){
        $(".bottom").css("opacity","0.3");
        $(".aret").css("display","block");
    })
    $("#ckeckOk").click(function(){
        $(".bottom").css("opacity","1");
        $(".aret").css("display","none");
    })
    $("#buyNow").click(function(){
        $(".bottom").css("opacity","0.3");
        $(".aret").css("display","block");
    })
    $("#closeBtn").click(function(){
        $(".bottom").css("opacity","1");
        $(".aret").css("display","none");
    })
    var num  = +document.getElementById("num").innerText;
    $("#minus").click(function(){
          if(num>1){
              num--;
              $("#add").attr("disabled",false);
              document.getElementById("num").innerText = num;
              if(num === 1){
                  $("#minus").attr("disabled",true);
              }
          }
    })
    $("#add").click(function(){
        if(num<50){
            num++;
            $("#minus").attr("disabled",false);
            document.getElementById("num").innerText = num;
            if(num === 50){
                $("#add").attr("disabled",true);
            }
        }
    })
})

