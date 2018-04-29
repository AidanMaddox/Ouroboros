var getCookie = function (cname)
	{
	var cookieLen = cname.length;
	var cLen = document.cookie.length;
	var i = 0;
	var cEnd;

	while (i < cLen)
		{
		var j = i + cookieLen;
		if (document.cookie.substring(i,j) == cname)
			{
			cEnd = document.cookie.indexOf(";",j);

			if (cEnd == -1)
				{ cEnd = document.cookie.length; }

			return unescape(document.cookie.substring((j+1), cEnd));
			}
		i++;
		}

	return " ";
	}

var buttonState;

function cookieCheck(){

    buttonState = getCookie("buttonState");

    //alert("Cookie" + buttonState);

    if(buttonState ==0 ){
      //alert("State is 0")

    toLight();

    }

    else{
      //alert(buttonState);

      toDark();
    }
}


function colorShift(){

    //var buttonState = getCookie("buttonState");
    //alert(buttonState);



  $("#changecolor").on("click",function(){
    if(buttonState == 0){
      //alert("To Dark");
        toDark();
      buttonState=1;
      document.cookie = "buttonState=" + buttonState;
      //alert(buttonState);
    }
    else{
      //alert("To Light")
      toLight();
      buttonState = 0;
        document.cookie = "buttonState=" + buttonState;
      //alert(buttonState);
    }

  });


}


function toDark(){


	$(".assn").css("background-color","#101010");
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
  $("#missionpic").css("background-color","#101010");
  $("#outercontainer").css("background-color","#101010");
  $("#frame").attr("src", "logo_animation/index2.html");
  $("#changecoloricon").attr("src","images/revert.svg");
  $("a").css("color","white");
}

function toLight(){
	$(".assn").css("background-color","white");
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
  $("#missionpic").css("background-color","white");
  $("#outercontainer").css("background-color","white");
  $("#frame").attr("src", "logo_animation/index.html");
  $("#changecoloricon").attr("src","images/invert.svg");
  $("a").css("color","#222121");
}
