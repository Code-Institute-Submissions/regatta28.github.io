$(document).ready(function() {
    $(".navigations").mouseenter(function(){
        $(".navigations").addClass("underline");
    });
    $(".navigations").mouseleave(function(){
        $(".navigations").removeClass("underline");
    });
});