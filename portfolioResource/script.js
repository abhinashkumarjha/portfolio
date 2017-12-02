// A little javascript for home
 document.onmousemove = trackMouse;
function trackMouse(e){
var x = e.clientX;
var y = e.clientY;
document.getElementById('xcor').innerHTML="x is "+ x;
document.getElementById('ycor').innerHTML="y is "+ y;
}

//The Script for the portfolio page
 function createNewDiv(dataPoint){
 	var newDiv="<div class='portfolio-card'><div class='portfolio-image-holder'><img src='"+dataPoint.image+"'></div><div class='portfolio-detail-holder'><a href='"+dataPoint.link+"'><div class='portfolio-project-heading'><h3>"+dataPoint.name+"</h3></div><div class='portfolio-project-desc'><p>"+dataPoint.desc+"</p></div><div class='portfolio-project-link'><p></p></div></a></div></div>";
 	return newDiv;
 }
 for(i=0;i<DataPro.length;i++){
 	newDiv=createNewDiv(DataPro[i]);
 	document.getElementById('card-holder-publication').innerHTML+=newDiv;
 }
// This Script is for menu controls
	$(document).ready(function(){
		// For menu navigation
		$("#topHead").click(function(){
    			$("#topMenu").removeClass("top").addClass("full");
    			$("#topHead").removeClass("active").addClass("non-active");
    			$("#topBody").removeClass("non-active").addClass("active");
    			$(".current").removeClass("active").addClass("non-active");
    			$("#location").removeClass("active").addClass("non-active");
		});

		$('#back-home').click(function(){
    			$("#topMenu").removeClass("full").addClass("top");
    			$("#topHead").removeClass("non-active").addClass("active");
    			$("#topBody").removeClass("active").addClass("non-active");
    			setTimeout(function(){
    				$(".current").removeClass("non-active").addClass("active");
            $("#location").removeClass("non-active").addClass("active");
    			},500);
    			
		});

		$('#card1').click(function(){
    			$("#topMenu").removeClass("full").addClass("top");
    			$("#topHead").removeClass("non-active").addClass("active");
    			$("#topBody").removeClass("active").addClass("non-active");
    			$(".current").addClass("non-active").removeClass("current active");    			
    			$(".nav-bllocks").removeClass("non-active").addClass("active");
    			document.getElementById("location").innerHTML="Home";
    			setTimeout(function(){
    				$("#home").removeClass("non-active").addClass("active current");
            $("#location").removeClass("non-active").addClass("active");
    			},500);
		});

		$('#card2').click(function(){
    			$("#topMenu").removeClass("full").addClass("top");
    			$("#topHead").removeClass("non-active").addClass("active");
    			$("#topBody").removeClass("active").addClass("non-active");
    			$(".current").addClass("non-active").removeClass("current active");
    			$(".nav-bllocks").removeClass("non-active").addClass("active");
    			document.getElementById("location").innerHTML="My timeline";
    			setTimeout(function(){
    				$("#about-me").removeClass("non-active").addClass("active current");
            $("#location").removeClass("non-active").addClass("active");
    			},500);
		});

		$('#card3').click(function(){
    			$("#topMenu").removeClass("full").addClass("top");
    			$("#topHead").removeClass("non-active").addClass("active");
    			$("#topBody").removeClass("active").addClass("non-active");
    			$(".current").addClass("non-active").removeClass("current active");
    			$(".nav-bllocks").removeClass("non-active").addClass("active");
    			document.getElementById("location").innerHTML="Portfolio";
    			setTimeout(function(){
    				$("#publication").removeClass("non-active").addClass("active current");
            $("#location").removeClass("non-active").addClass("active");
    			},500);
		});

		$('#card4').click(function(){
    			$("#topMenu").removeClass("full").addClass("top");
    			$("#topHead").removeClass("non-active").addClass("active");
    			$("#topBody").removeClass("active").addClass("non-active");
    			$(".current").addClass("non-active").removeClass("current active");
    			$("#location").removeClass("non-active").addClass("active");
    			$(".nav-bllocks").removeClass("active").addClass("non-active");
    			document.getElementById("location").innerHTML="Contact Me";
    			setTimeout(function(){
    				$("#contact-me").removeClass("non-active").addClass("active current");
    			},500);
    			setTimeout(function(){
    				showGoogleMaps();
    			},700);	
		});

        $('#card5').click(function(){
                $("#topMenu").removeClass("full").addClass("top");
                $("#topHead").removeClass("non-active").addClass("active");
                $("#topBody").removeClass("active").addClass("non-active");
                $(".current").addClass("non-active").removeClass("current active");
                $(".nav-bllocks").removeClass("non-active").addClass("active");
                document.getElementById("location").innerHTML="Portfolio";
                setTimeout(function(){
                    $("#project").removeClass("non-active").addClass("active current");
            $("#location").removeClass("non-active").addClass("active");
                },500);
        });

	});
	//This script is for contact us page
	// The latitude and longitude of your business / place[28.628009374885153, 77.22317253476263];

 
function showGoogleMaps() {


 	var position = [28.62799727, 77.22317665];
    var latLng = new google.maps.LatLng(position[0], position[1]);
 
    var mapOptions = {
        zoom: 17, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };
 
    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);
 
    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}
 