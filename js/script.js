$(document).ready(function() {
    $("ul li a").mouseenter(function(){
        $(this).addClass("navHighlight");
    });
    $("ul li a").mouseleave(function(){
        $(this).removeClass("navHighlight");
    });
    $("ul li a").mouseenter(function(){
      $(this).addClass("navColor");
    });
    $("ul li a").mouseleave(function(){
      $(this).removeClass("navColor");
    });
    $("#welcomeHeader").hide().fadeIn(2000);
    $("#welcomeParagraph").hide().fadeIn(4000);
});

