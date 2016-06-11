/**
 * Created by Administrator on 2016/4/28.
 */
//价格排序图片替换
$(document).ready(function(){
    $('#price').click(function(){
        defaultsrc = document.getElementById("defaultImg");
        defaultsrc.src = ['public/image/noDefault.png'];
        var emotions = ['priceDown.png','priceUp.png',"public/image/"]
        imgsrc=document.getElementById('priceImg');
        imgsrc.src=emotions[2]+emotions[arguments.callee.em^=1];
        return false;
    })
})
$(document).ready(function(){
    $('#default').click(function(){
        defaultsrc = document.getElementById("defaultImg");
        defaultsrc.src = ['public/image/Default.png'];
        imgsrc=document.getElementById('priceImg');
        imgsrc.src=['public/image/noPrice.png'];
        return false;
    })
})


//滑动屏幕实现加载效果

//$(window).scroll(function () {
//    var scrollTop = $(this).scrollTop();
//    var scrollHeight = $(document).height();
//    var windowHeight = $(this).height();
//    if (scrollTop + windowHeight == scrollHeight-1) {
//        //alert(scrollTop + windowHeight);
//        //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
//        defaultsrc = document.getElementById("defaultImg");
//        imgsrc=document.getElementById('priceImg');
//        if(defaultsrc.src = ['public/image/Default.png']){
//            alert(defaultsrc.src = ['public/image/Default.png']);
//        }else if(imgsrc.src=['public/image/priceDown.png']){
//            alert(imgsrc.src=['public/image/priceDown.png']);
//        }else if(imgsrc.src=['public/image/priceUp.png']){
//            alert(imgsrc.src=['public/image/priceUp.png']);
//        }
//        var page = Number($("#redgiftNextPage").attr('currentpage')) + 1;
//     redgiftList(page);
//    $("#redgiftNextPage").attr('currentpage', page + 1);
//
//    }
//});
//var loading = false;
//$(window).scroll(function(){
//    if((($(window).scrollTop()+$(window).height())+1)>=$(document).height()){
//        if(loading == false){
//            loading = true;
//            $('#loadingbar').css("display","block");
//            $.get("load.php?start="+$('#loaded_max').val(), function(loaded){
//                $('body').append(loaded);
//                $('#loaded_max').val(parseInt($('#loaded_max').val())+12);
//                $('#loadingbar').css("display","none");
//                loading = false;
//            });
//        }
//    }
//});
//$(function() {
//    $('#loaded_max').val(12);
//});
$(function() {
    $('button').attr('postback','false');
});