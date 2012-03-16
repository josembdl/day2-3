
$(document).ready(function() {
	alert("Listo!");
});

$("#botonAnim").click(function(){   
    $.mobile.showPageLoadingMsg();
});

$(document).keyup(function(e){
        var KEYCODE_ESC = 27;
        if(e.keyCode == KEYCODE_ESC){
            $.mobile.hidePageLoadingMsg();
            // $.mobile.changePage("#principal");
        }
    });

$("#buttonday1").click(function(event) {
	
        event.preventDefault(); 
        
        var param = $("#alias").val();
        url = "http://localhost/day1/api/dispatcher.php";
        
	// Para probar el punto 7 poner mal la url
        // url = "http://localhost/day/api/dispatcher.php";
        
        $.post(url, {service: 'welcome.hello', params: {name: param}},
		function(data){
                    //alert(data);
                    // $("#response").css("background","red");
                    $("#response").html(data);
                    
		});
});

$("#msg").ajaxError(function(event, request, settings){
  $("#response").hide();  
  $(this).append("Error requesting page " + settings.url);
  $("#msg").css("background","red");
});