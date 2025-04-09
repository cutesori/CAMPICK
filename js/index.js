$(document).ready(function(){
    //슬라이더
    function slide(){
        $('.slide').stop().animate({marginLeft:"-150%"},800,function(){
            $('.slide li:first').appendTo('.slide');
            $('.slide').css("margin-left","-69.5%");
        });
    }

    setInterval(slide,3000);    

    // 왼쪽 스티키 높이
    $(".container_side div:nth-of-type(1)").height($(".container_left").height());
    $(".container_side div:nth-of-type(2)").height($(".contentsecond").height());
    $(".container_side div:nth-of-type(3)").height($(".contenttrd").height());
});