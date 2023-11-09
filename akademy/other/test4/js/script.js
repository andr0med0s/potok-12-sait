// console.log($);
$(function () {
    
    $(".animate__animated").on("mouseover", function(){
        $(this).addClass("animate__bounce");
    }).on("mouseleave", function(){
        $(this).removeClass("animate__bounce");
    })

})