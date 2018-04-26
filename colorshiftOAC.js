
function colorShift(){
  var buttonState = 0;

  $("#changecolor").on("click",function(){
    if(buttonState == 0){

      $("#changecolor").css("background-color","white");
      $("#headerbar").css("background-color","#101010");
      $("#bottombar").css("background-color","#101010");
      $("body").css("background-color","#101010");
      $("body").css("color","white");
      $(".text").css("color","white");
      $(".text h2").css("color","white");
      $(".button").css("color","white");
      $(".button").css("border","solid white 2px");
      $("#logo_img").attr("src","images/headerlogo_oac_white.png");
      $("#facebook").attr("src","images/facebook_oac_white.png");
      $("#insta").attr("src","images/insta_oac_white.png");
      $("#twitter").attr("src","images/twitter_oac_white.png");
      $("#menuToggle span").css("color","white");
      $("#menu").css("background-color","101010");
      $("#menu a").css("color","white");
      buttonState=1;

    }
    else{
      $("#changecolor").css("background-color","#101010");
      $("#headerbar").css("background-color","white");
      $("#bottombar").css("background-color","white");
      $("body").css("background-color","white");
      $("body").css("color","black");
      $(".text").css("color","black");
      $(".text h2").css("color","black");
      $(".button").css("color","black");
      $(".button").css("border","solid black 2px");
      $("#logo_img").attr("src","images/headerlogo_oac.png");
      $("#facebook").attr("src","images/facebook_oac.png");
      $("#insta").attr("src","images/insta_oac.png");
      $("#twitter").attr("src","images/twitter_oac.png");
      $("#menu").css("background-color","white");
      $("#menu a").css("color","#101010");
      buttonState = 0;
    }

  });


}
