$(document).ready(function(){
    $("dd").hide();

    $("#ideationdt").on("click", function(){
        $("#ideationdd").slideToggle();
    })

    $("#photosdt").on("click", function(){
        $("#photosdd").slideToggle();
    })
})