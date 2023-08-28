var openedCards=[];
var sound=0,music=0;

var aud=new Audio("./sounds/BGM.mp3");
aud.play();
aud.autoplay;

$(".sounds li").click(function()
{
    $("#"+$(this).attr("id")).toggleClass("clicked");
    if($(this).attr("id")=="music")
    {
        music=1-music;
        if(music) aud.play();
        else aud.pause();
    }
    else
    {
        sound=1-sound;
        // alert(sound+"=sound");
    }
    
});




// $(".score_menu #score").text("Your Score : "+score);
// $(".score_menu #maxScore").text("High Score : "+maxScore);
//For switching between Game and home screens
$("#play").click(function()
{
    $(".game_screen").slideDown(1);
    aud.volume(0.1);
    $(".game_screen").css("display","flex");
    $(".home_screen").css("display","none");
    
});
$(".exit_menu h2").click(function()
{
    $(".home_screen").slideUp(1000);
    $(".home_screen").css("display","flex");
    $(".game_screen").css("display","none");
    if(sound==1)
    {
        var aud=new Audio("./sounds/click.wav");
        aud.playbackRate=2.5;
        aud.play();
    }
    
    
});

$("li").click(function()
{
    if(sound==1)
    {
        var aud=new Audio("./sounds/click.wav");
        aud.playbackRate=2.5;
        aud.play();
    }
  
});

// For flipping the cards
$(".front_view").addClass("visible");

$(".grid_cell .front_view").click(function()
{
    if(openedCards.length<2)
    {
        var cellId = $(this).parent().attr("id");

        if(sound==1)
        {
            var aud=new Audio("./sounds/open_card.mp3");
            aud.playbackRate=2.5;
            aud.play();
        }
        



        $("#"+cellId).css("transform","perspective(600px) rotateY(180deg)").css("transition"," transform 0.5s ease-out");
        

        setTimeout(function(){
            $("#"+cellId +" .front_view").toggleClass("visible");
            $("#"+cellId +" .back_view").toggleClass("visible");
        },150);

        openedCards.push(cellId);
        checkCards();
    }
});
// $(".grid_cell .back_view").click(function()
// {
//     // var cellId = $(this).parent().attr("id");

//     // $("#"+cellId).css("transform","perspective(600px) rotateY(0deg)").css("transition"," transform 0.5s ease-out");
//     // setTimeout(function(){
//     //     $("#"+cellId +" .front_view").toggleClass("visible");
//     //     $("#"+cellId +" .back_view").toggleClass("visible");
//     // },150);

//     $("div.grid_cell").css("transform","perspective(600px) rotateY(0deg)").css("transition"," transform 0.5s ease-out ");
//     setTimeout(function(){
//         $(" .front_view").addClass("visible");
//         $(" .back_view").removeClass("visible");
//     },150);

// });
function flipBackTheCards()
{
    $("div.grid_cell").css("transform","perspective(600px) rotateY(0deg)").css("transition"," transform 0.5s ease-out ");

    setTimeout(function(){
        $(" .front_view").addClass("visible");
        $(" .back_view").removeClass("visible");
    },150);
    
    // $("div.grid_cell").effect("shake",{times:10},1000);


    if(sound==1)
    {
        var aud=new Audio("./sounds/wrong_card.mp3");
        aud.playbackRate=4;
        $(aud).prop("volume",0.15);
        aud.play();
    }
    

    setTimeout(function()
    {
        openedCards=[];
    },1000);
        
}


//function for storing user's input
// function openCard(cellId)
// {
//     // alert(openedCards.length);
// }

// function to check if user's input is correct or not
function checkCards()
{
    var img0=$("#"+openedCards[0]+" .back_view img").attr("src");
    var img1=$("#"+openedCards[1]+" .back_view img").attr("src");
    if(openedCards.length===2)
    {
        var cell1,cell2;
        cell1="#"+openedCards[0];
        cell2="#"+openedCards[1];
        if(img0===img1)
        {
            setTimeout(function(){
                score++;
                if(maxScore<score) maxScore=score;
                $(".score_menu #score").text("Your Score : "+score);
                $(".score_menu #maxScore").text("High Score : "+maxScore);

                if(sound==1)
                {
                    var aud=new Audio("./sounds/matched_card.mp3");
                    $(aud).prop("volume",0.3);
                    aud.play();
                }
                

                $(cell1).addClass("correct");
                $(cell2).addClass("correct");
                openedCards=[];
            },1000);
        }
        else
        {
            setTimeout(flipBackTheCards,800);
        }
    }
}

//function to executed in case of correct cards
