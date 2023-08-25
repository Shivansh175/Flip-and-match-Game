//For switching between Game and home screens
$("#play").click(function()
{
    $(".game_screen").slideDown(100);
    $(".game_screen").css("display","flex");
    $(".home_screen").css("display","none");
    
});
$(".exit_menu h2").click(function()
{
    $(".home_screen").slideUp(1000);
    $(".home_screen").css("display","flex");
    $(".game_screen").css("display","none");
    
});


// For flipping the cards
$(".front_view").addClass("visible");

$(".grid_cell .front_view").click(function()
{
    var cell_id = $(this).parent().attr("id");

    $("#"+cell_id).css("transform","perspective(600px) rotateY(180deg)").css("transition"," transform 0.8s ease-out");

    setTimeout(function(){
        $("#"+cell_id +" .front_view").toggleClass("visible");
        $("#"+cell_id +" .back_view").toggleClass("visible");
    },250);

});

$(".grid_cell .back_view").click(function()
{
    var cell_id = $(this).parent().attr("id");

    $("#"+cell_id).css("transform","perspective(600px) rotateY(0deg)").css("transition"," transform 0.8s ease-out");

    setTimeout(function(){
        $("#"+cell_id +" .front_view").toggleClass("visible");
        $("#"+cell_id +" .back_view").toggleClass("visible");
    },250);

});
