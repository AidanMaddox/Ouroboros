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


var var1;
var var2;
var name1;
var name2;
var prim;
var sec;



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

if(getCookie("Primary") == 0 && getCookie("Secondary") ==0 && getCookie("Var1") ==0 && getCookie("Var2") == 0 ){
	var1 = 0;
	var2  =0;
	name1 = 0;
	name2=0;
	prim =0 ;
	sec =0 ;



}
else{

	var1 = getCookie("Var1");
	var2  =getCookie("Var2");
	name1 = getCookie("name1");
	name2=getCookie("name2");
	prim =getCookie("Primary") ;
	//alert("primary"+ prim);
	sec =getCookie("Secondary");
	//alert("secondary" +sec);

}


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

document.cookie = "Primary=" + prim;
document.cookie = "Secondary=" + sec;
document.cookie = "Var1=" + var1;
document.cookie = "Var2=" + var2;
document.cookie = "name1=" + name1;
document.cookie = "name2=" + name2;
document.cookie = "Email=" + $("#emailtext").val();
document.cookie = "Name=" + $("#nametext").val();
document.cookie = "Address="+$("#addresstext").val();
console.log(document.cookie);
//alert(document.cookie);


})

var primState;
var secState;
var var1State;
var var2State;
var name1State;
var name2State;

var emailState;
var cnameState;
var addressState;





}) //close ready function

function check(){



  //alert("test");
  primState = getCookie("Primary");
  secState = getCookie("Secondary");
  var1State=getCookie("Var1");
  var2State = getCookie("Var2");
	name1State = getCookie("name1");
	name2State = getCookie("name2");
	emailState = getCookie("Email");
	cnameState = getCookie("Name");
	addressState = getCookie("Address");

	$("#emailtext").val(emailState);
$("#addresstext").val(addressState);
$("#nametext").val(cnameState);
	  //alert("Primary Cookie = " + primState +"Secondary= " + secState + "Var1= "+ var1State + " Var2= "+ var2State);

    if(primState == 0){

    $("#mainIMG").attr("src","images/build/Black Lava Rock_oac.jpg");
    //alert("prim = 0");
    var1=0;
    name1=0;
    prim=0;

  }
  if(primState == 1){

    $("#mainIMG").attr("src","images/build/Matte Black Onyx_oac.jpg");
  var1=1;
  name1=1;
  prim=1;

  }
  if(primState == 2){

    $("#mainIMG").attr("src","images/build/WhiteHowlite_oac.jpg");
    var1=0;
    name1=2;
    prim=2;

}
  if(primState == 3){

  $("#mainIMG").attr("src","images/build/amazonite_oac.jpg");
  var1=1;
  name1=3;
  prim = 3;

  }

  //------------------Secondary ----------

  if(secState == 0){

    $("#secondaryIMG").attr("src","images/build/Black Lava Rock_secondary_oac.png");
    var2=0;
    name2=0;
    sec = 0;

}
if(secState == 1){

  $("#secondaryIMG").attr("src","images/build/Matte Black Onyx_secondary_oac.png");
  var2=1;
  name2=1;
  sec = 1;

}
if(secState == 2){

	$("#secondaryIMG").attr("src","images/build/WhiteHowlite_secondary_oac.png");
	var2=0;
	name2=2;
	sec = 2;

}
if(secState == 3){

	$("#secondaryIMG").attr("src","images/build/amazonite_secondary_oac.png");
	var2=1;
	name2=3;
	sec = 3;

}

if(var1State==0&&var2State==0){
	//alert("cost 12");
	$("#price").html("<h3>Price: $12</h3>");
	//$("#price").append("<h3>$12</h3>")

}
else if(var1State==1&&var2State==1){
	//alert("cost 14");
	$("#price").html("<h3>Price: $14</h3>");
//  $("#price").append("<h3>$42</h3>")
}
else{
	//alert("cost 13");
	$("#price").html("<h3>Price: $13</h3>");
//  $("#price").append("<h3>$13</h3>")
}




// ------------- Names ---------------------

if(name1State==0){
  $("#price").append("<h4>Primary: Lava </h4>");
	name1 =0;
}
else if(name1State ==1){
  $("#price").append("<h4>Primary: Matte Black Onyx </h4>");
	name1 =1;
}
else if(name1State ==2){
  $("#price").append("<h4>Primary: White Howlite </h4>");
	name1 =2;
}
else if(name1State ==3){
  $("#price").append("<h4>Primary: Amazonite </h4>");
	name1 =3;
}

if(name2State==0){
  $("#price").append("<h4>Secondary: Lava </h4>");
	name2 = 0;
}
else if(name2State ==1){
  $("#price").append("<h4>Secondary: Matte Black Onyx </h4>");
	name2 = 1;
}
else if(name2State ==2){
  $("#price").append("<h4>Secondary: White Howlite </h4>");
	name2 = 2;
}
else if(name2State ==3){
  $("#price").append("<h4>Secondary: Amazonite </h4>");
	name2 = 3;
}



}


function refresh(){
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


}







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
}
