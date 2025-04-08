$(document).ready(function(){
    function slide(){
        $('.slide').stop().animate({marginLeft:"-150%"},800,function(){
            $('.slide li:first').appendTo('.slide');
            $('.slide').css("margin-left","-69.5%");
        });
    }

    setInterval(slide,3000);    
});