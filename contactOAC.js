


function blankCheck(input){
  if(input==""){

    return input;
    alert(input);
  }
}

function checkAt(input){
  if(input.indexOf("@")<0){
    //alert(input + " need an @ symbol");
  }
}





function checkEmail(){
$("#submitButton").on("click",function(){
  $("#emailError").html("");//clears previous errors
  // var at =checkAt($("#emailBox").val());
  // var blank=  blankCheck($("#emailBox").val());
var input = $("#emailBox").val();
//alert(input);

if(input==""){

  $("#emailError").append("Email can not be blank.");
}

if(input.indexOf("@")<0){
  //alert(input + " need an @ symbol");
  $("#emailError").append("<br>Email requires an @ symbol.");

}




});
}

function checkName(){
$("#submitButton").on("click",function(){

$("#nameError").html("");//clears previous errors

var input = $("#nameBox").val();

if(input==""){

  $("#nameError").append("Name can not be blank.");
}

if(input.indexOf("@")!= -1 || input.indexOf("$")!= -1 || input.indexOf("#")!= -1 || input.indexOf("!")!= -1 || input.indexOf("%")!= -1 || input.indexOf("&")!= -1 ){
  //alert("contains special character");

  $("#nameError").append("Names can not include special characters.");
}
});
}//close function

function checkMessage(){


var expletives = ["problem","help","assistance","complaint","refund","aid","support"]

$("#submitButton").on("click",function(){
$("#messageError").html(""); //clears previous errors
var input = $("#messageBox").val().toLowerCase();

if(input==""){

  $("#messageError").append("Please provide message content.");
}
for(var i=0;i<expletives.length;i++){
  if(input.indexOf(expletives[i]) != -1){
    //alert("contains inappropriate character");

    $("#messageError").append("Your message contains the word: &quot;" + expletives[i] + "&quot; which is inappropriate content.");
$("#messageError").append("<br>");
  }
}


});
}//close function
