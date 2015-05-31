$(document).ready(function(){
	$(".album").click(function() {
  	$(".menu").animate({
  		top: "0px",
     	left: "0px"
   	}, 400);
		$("body").animate({
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
    $(".photo1a").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $(".photo2a").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(300);
    $(".photo3a").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $("#album1").show(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album2").click(function(){
    $("header").html("Neat Stuff").css("color", "black").css("background-color","white");
    $(".photo1b").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(300);
    $(".photo2b").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $(".photo3b").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $("#album1").hide(200);
    $("#album2").show(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album3").click(function(){
    $("header").html("Beautiful Wife").css("color", "black").css("background-color","white");
    $(".photo1c").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $(".photo2c").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(300);
    $(".photo3c").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(300);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").show(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album4").click(function(){
    $("header").html("The Wife and I").css("color", "black").css("background-color","white");
    $(".photo1d").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(300);
    $(".photo2d").hide().removeClass("col-sm-offset-4").removeClass("col-sm-4").addClass("col-sm-4").show(300);
    $(".photo3d").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(300);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").show(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album5").click(function(){
    $("header").html("Just the Kids").css("color", "black").css("background-color","white");
    $(".photo1e").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $(".photo2e").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $(".photo3e").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").show(200);
    $("#album6").hide(200);
  })
  $(".album6").click(function(){
    $("header").html("Holidays").css("color", "black").css("background-color","white");
    $(".photo1f").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $(".photo2f").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $(".photo3f").hide().removeClass("col-sm-offset-1").removeClass("col-sm-10").addClass("col-sm-4").show(300);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").show(200);
  })
  $(".photo1a").click(function(){
    $(".photo2a").hide();
    $(".photo3a").hide();
    $(".photo1a").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo2a").click(function(){
    $(".photo1a").hide();
    $(".photo3a").hide();
    $(".photo2a").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(300);
  })
  $(".photo3a").click(function(){
    $(".photo1a").hide();
    $(".photo2a").hide();
    $(".photo3a").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo1b").click(function(){
    $(".photo2b").hide();
    $(".photo3b").hide();
    $(".photo1b").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(300);
  })
  $(".photo2b").click(function(){
    $(".photo1b").hide();
    $(".photo3b").hide();
    $(".photo2b").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo3b").click(function(){
    $(".photo1b").hide();
    $(".photo2b").hide();
    $(".photo3b").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo1c").click(function(){
    $(".photo2c").hide();
    $(".photo3c").hide();
    $(".photo1c").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo2c").click(function(){
    $(".photo1c").hide();
    $(".photo3c").hide();
    $(".photo2c").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(300);
  })
  $(".photo3c").click(function(){
    $(".photo1c").hide();
    $(".photo2c").hide();
    $(".photo3c").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(300);
  })
  $(".photo1d").click(function(){
    $(".photo2d").hide();
    $(".photo3d").hide();
    $(".photo1d").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(300);
  })
  $(".photo2d").click(function(){
    $(".photo1d").hide();
    $(".photo3d").hide();
    $(".photo2d").hide().removeClass("col-sm-4").addClass("col-sm-4").addClass("col-sm-offset-4").show(300);
  })
  $(".photo3d").click(function(){
    $(".photo1d").hide();
    $(".photo2d").hide();
    $(".photo3d").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(300);
  })
  $(".photo1e").click(function(){
    $(".photo2e").hide();
    $(".photo3e").hide();
    $(".photo1e").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo2e").click(function(){
    $(".photo1e").hide();
    $(".photo3e").hide();
    $(".photo2e").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo3e").click(function(){
    $(".photo1e").hide();
    $(".photo2e").hide();
    $(".photo3e").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo1f").click(function(){
    $(".photo2f").hide();
    $(".photo3f").hide();
    $(".photo1f").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo2f").click(function(){
    $(".photo1f").hide();
    $(".photo3f").hide();
    $(".photo2f").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
  $(".photo3f").click(function(){
    $(".photo1f").hide();
    $(".photo2f").hide();
    $(".photo3f").hide().removeClass("col-sm-4").addClass("col-sm-10").addClass("col-sm-offset-1").show(300);
  })
	
});