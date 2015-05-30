$(document).ready(function(){
	$('.album').click(function() {
  	$('.menu').animate({
  		top: "0px",
     	left: "0px"
   	}, 200);
		$('body').animate({
     	marginLeft: "195px"
  	}, 200);
    $("#album-container").hide(200);
 	});

 	$('.icon-close').click(function() {
   	$('.menu').animate({
    	left: "-195px"
   	}, 200);
		$('body').animate({
    	marginLeft: "0px",
      marginRight: "0px"
  	}, 200);
    $("header").html("My Photo Album")
    $("#album-container").show(200);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
	});
  $(".album1").click(function(){
    $("header").html("Kids and I")
    $("#album1").show(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album2").click(function(){
    $("header").html("Neat Stuff")
    $("#album1").hide(200);
    $("#album2").show(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album3").click(function(){
    $("header").html("Beautiful Wife")
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").show(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album4").click(function(){
    $("header").html("The Wife and I")
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").show(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album5").click(function(){
    $("header").html("Just the Kids")
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").show(200);
    $("#album6").hide(200);
  })
  $(".album6").click(function(){
    $("header").html("Holidays")
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").show(200);
  })
	
});