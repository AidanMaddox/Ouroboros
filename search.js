


var pageTitle = new Array;
var pageUrl= new Array;
var keyWord = new Array;

pageTitle[0]="Home";
pageUrl[0]="OAC_home.html";
keyWord[0]="home, landing, page, main";

pageTitle[1]="About";
pageUrl[1]="OAC_about.html";
keyWord[1]="about, us, info, page";

pageTitle[2]="Shop";
pageUrl[2]="OAC_shop.html";
keyWord[2]="store, shopping, page, shop";

pageTitle[3]="Contact";
pageUrl[3]="OAC_contact.html";
keyWord[3]="contact, coment, page, more";






function searchSite(){
$("#searchButton").on("click",function(){
  //$("#results").HTML("");
    var searchTerm = $("#searchBox").val().toLowerCase();
    //alert(searchTerm);

  //var searchWindow = window.open("OAC_search.html","_self");
    search(searchTerm);


  //$("#result").html("Hello World");



});

}




function search(sValue){
  //alert("Search Begun");
  if(sValue>""){
    //alert("has value");
    temp="";

    for(var i = 0; i<pageTitle.length;i++){
    //  alert("for loop");
        if(pageTitle[i].toLowerCase().indexOf(sValue) != -1 || pageUrl[i].toLowerCase().indexOf(sValue) != -1 || keyWord[i].toLowerCase().indexOf(sValue) != -1){
          //alert("match");
          temp+="<div class='result'>"
                         // temp+= "<h3>" + i + "</h3>";
                          temp+= "<h2>" + pageTitle[i]+ "</h2>"+ "<br>";
                          //temp+= keyWord[i] + "<br>";
                          temp+= "<a href='" + pageUrl[i] +"'> Visit </a>"
                          //searchWindow.document.write("Help");
                          //$(".results").append("<h1>Match #</h1>");
                          $(".results").append(temp);
                          //alert("wrote");
                        

                      }

                  }

                //  document.querySelector("#results").style.margin = "auto";





  }

}
