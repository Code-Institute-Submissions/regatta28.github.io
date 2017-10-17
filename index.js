$(document).ready(function() {
    $(".navigations").mouseenter(function(){
        $(this).addClass("underline");
    });
    $(".navigations").mouseleave(function(){
        $(this).removeClass("underline");
    });
});