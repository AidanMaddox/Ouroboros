$(document).ready(function(){
var1 = 0;
var2 = 0;
name1=0;
name2=0;

$("#lava").on("click",function(){
    $("#mainIMG").attr("src","images/build/Black Lava Rock_oac.jpg");
var1=0;
name1=0;
})
$("#matteblack").on("click",function(){
    $("#mainIMG").attr("src","images/build/Matte Black Onyx_oac.jpg");
var1=1;
name1=1;
})

$("#white").on("click",function(){
    $("#mainIMG").attr("src","images/build/WhiteHowlite_oac.jpg");
var1=0;
name1=2;
})
$("#amazonite").on("click",function(){
    $("#mainIMG").attr("src","images/build/amazonite_oac.jpg");
    var1=1;
    name1=3;
})


$("#lava2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/Black Lava Rock_secondary_oac.png");
var2=0;
name2=0;
})
$("#matteblack2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/Matte Black Onyx_secondary_oac.png");
    var2=1;
    name2=1;
})

$("#white2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/WhiteHowlite_secondary_oac.png");
var2=0;
name2=2;
})
$("#amazonite2").on("click",function(){
    $("#secondaryIMG").attr("src","images/build/amazonite_secondary_oac.png");
    var2=1;
    name2=3;
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

})

}) //close ready function
