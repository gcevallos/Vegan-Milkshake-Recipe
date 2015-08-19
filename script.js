$(document).ready(function () {
    $(".instructions li").click(function () {
        $(this).css("text-decoration", "line-through");
    });
    $(".ing li").click(function () {
        $(this).toggleClass('linethrough');
    });
    $("#contentimages").click(function () {
        $(this).remove();
    });
});