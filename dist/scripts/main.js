$(document).ready(function(){
	$('.album').click(function() {
  	$('.menu').animate({
  		top: "0px",
     	left: "0px"
   	}, 400);
		$('body').animate({
     	marginLeft: "195px"
  	}, 400);
    $("#album-container").hide(400);
 	});

 	$('.icon-close').click(function() {
   	$('.menu').animate({
    	left: "-195px"
   	}, 400);
		$('body').animate({
    	marginLeft: "0px",
      marginRight: "0px"
  	}, 400);
    $("header").html("My Photo Album").css("color", "white").css("background-color","#333333");
    $("#album-container").show(200);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
	});
  $(".album1").click(function(){
    $("header").html("Kids and I").css("color", "black").css("background-color","white");
    $("#album1").show(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album2").click(function(){
    $("header").html("Neat Stuff").css("color", "black").css("background-color","white");
    $("#album1").hide(200);
    $("#album2").show(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album3").click(function(){
    $("header").html("Beautiful Wife").css("color", "black").css("background-color","white");
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").show(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album4").click(function(){
    $("header").html("The Wife and I").css("color", "black").css("background-color","white");
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").show(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album5").click(function(){
    $("header").html("Just the Kids").css("color", "black").css("background-color","white");
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").show(200);
    $("#album6").hide(200);
  })
  $(".album6").click(function(){
    $("header").html("Holidays").css("color", "black").css("background-color","white");
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").show(200);
  })
	
});