// JavaScript Document

$.ajaxSetup ({  
    cache: false  //change this later
});  

var ajax_load = "<img src='../img/ajax_loader_blue_48.gif' alt='loading...' />";  
      
//  load() functions  
    var loadUrl = "ajax/load.php";  
    $("#load_basic").click(function(){  
        $("#result").html(ajax_load).load(loadUrl);  
    });
