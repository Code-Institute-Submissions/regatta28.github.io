$(document).ready(function() {
    $(".navigations").mouseenter(function(){
        $(this).addClass("underline");
    });
    $(".navigations").mouseleave(function(){
        $(this).removeClass("underline");
    });
    
});

function showAlert() {
    alert ("Thank you, we will be in contact shortly!");
}