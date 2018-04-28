var colorsPrimary = new Array;
colorsPrimary.push("Lava Rock");
colorsPrimary.push("Matte Black");
colorsPrimary.push("White Howlite");
colorsPrimary.push("Matte Amazonite");

var colorsSecond = new Array;
colorsSecond.push("Lava Rock");
colorsSecond.push("Matte Black");
colorsSecond.push("White Howlite");
colorsSecond.push("Matte Amazonite");

$(document).ready(function(){
var1 = 0;
var2 = 0;
name1=0;
name2=0;
var prim = 0;
var sec = 0;
$("#close").on("click", function(){
  $("#receipt").css("visibility", "hidden");
})
$("#lava").on("click",function(){
    $("#mainIMG").attr("src","images/build/Black Lava Rock_oac.jpg");
var1=0;
name1=0;
prim=0;
})
$("#matteblack").on("click",function(){
    $("#mainIMG").attr("src","images/build/Matte Black Onyx_oac.jpg");
var1=1;
name1=1;
prim=1;
})

$("#white").on("click",function(){
    $("#mainIMG").attr("src","images/build/WhiteHowlite_oac.jpg");
var1=0;
name1=2;
prim=2;
})
$("#amazonite").on("click",function(){
    $("#mainIMG").attr("src","images/build/amazonite_oac.jpg");
    var1=1;
    name1=3;
    prim = 3;
})


$("#lava2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/Black Lava Rock_secondary_oac.png");
var2=0;
name2=0;
sec = 0;

})
$("#matteblack2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/Matte Black Onyx_secondary_oac.png");
    var2=1;
    name2=1;
    sec = 1;
})

$("#white2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/WhiteHowlite_secondary_oac.png");
var2=0;
name2=2;
sec = 2;
})
$("#amazonite2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/amazonite_secondary_oac.png");
    var2=1;
    name2=3;
    sec = 3;
})


$("#buildSubmit").on("click",function(){
if(var1==0&&var2==0){
  //alert("cost 12");
  $("#price").html("<h3>Price: $12</h3>");
  //$("#price").append("<h3>$12</h3>")

}
else if(var1==1&&var2==1){
  //alert("cost 14");
  $("#price").html("<h3>Price: $14</h3>");
//  $("#price").append("<h3>$42</h3>")
}
else{
  //alert("cost 13");
  $("#price").html("<h3>Price: $13</h3>");
//  $("#price").append("<h3>$13</h3>")
}
if(name1==0){
  $("#price").append("<h4>Primary: Lava </h4>");
}
else if(name1 ==1){
  $("#price").append("<h4>Primary: Matte Black Onyx </h4>");
}
else if(name1 ==2){
  $("#price").append("<h4>Primary: White Howlite </h4>");
}
else if(name1 ==3){
  $("#price").append("<h4>Primary: Amazonite </h4>");
}

if(name2==0){
  $("#price").append("<h4>Secondary: Lava </h4>");
}
else if(name2 ==1){
  $("#price").append("<h4>Secondary: Matte Black Onyx </h4>");
}
else if(name2 ==2){
  $("#price").append("<h4>Secondary: White Howlite </h4>");
}
else if(name2 ==3){
  $("#price").append("<h4>Secondary: Amazonite </h4>");
}

//part two email validation
emailVal($("#emailtext").val(), prim, sec, var1, var2);

})

}) //close ready function

var emailVal = function(email, primary1, secondary1, var1, var2){
  if(email.indexOf("@") == -1 || email.indexOf(".")== -1){
    alert("Please enter a valid email address");
  }
  if (email.indexOf("@")!= -1 && email.indexOf(".")!= -1){
    var atsign = email.indexOf("@");
    var period = email.indexOf(".", atsign);

   if (period > atsign){
        alert("Thanks! We are calculating your receipt now!");
     personName =  $("#nametext").val();
     primaryBead =  colorsPrimary[primary1];
     secondaryBead =  colorsSecond[secondary1];
     if(var1==0&&var2==0){

      totalAmount = "Total: $12";
  
    }
    else if(var1==1&&var2==1){

      totalAmount = "Total: $14";

    }
    else{

      totalAmount = "Total: $13";

    }

     shipAdd =  $("#addresstext").val();
     emailVer =  $("#emailtext").val();
     console.log(personName, primaryBead, secondaryBead, totalAmount, shipAdd, emailVer);
      createReceipt(personName, primaryBead, secondaryBead, totalAmount, shipAdd, emailVer);

    } else {
        alert("Whoops! Looks like that's not a valid email address, please try again.");
    }
}
}

var createReceipt = function(name, primary, second, total, address, email){
$("#personName").html(name);
$("#primary").html(primary);
$("#secondary").html(second);
$("#totalAmount").html(total);
$("#ship").html(address);
$("#emailverif").html(email);
$("#receipt").css("visibility", "visible");

alert($(window).width());
}
