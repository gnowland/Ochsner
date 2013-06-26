// JavaScript Document



//WINDOW RESIZE

var newsize = function(){
	var b = $('#contentwindow').offset().top;
	var y = $(window).height();
	var z = $('#contentwindow').outerHeight(true);
	var h = $('#contentwindow').height();
	var w = z - h;
	var a = y - b;
	
	$('#contentwindow').css({'height':(a-w) + 'px'});
};

$(document).ready(newsize);
//$(window).load(newsize);  DOCUMENT READY HAPPENS SOONER
$(window).resize(newsize);



//BOX ANIMATION

$(window).load(function(){
$("body").delegate('.box','click', function(){

    if ($('.box.active').length <= 0){ 
        
        $(this).addClass('cloned');
        
        var parent = $(this).parent();
        var pos = $(this).position();
		var st = parent.scrollTop()
        var clone = $(this).clone().addClass('active');
		
		$(this).css({left: pos.left + 'px', top: (pos.top + st) + 'px'});
		
        parent.append(clone);

        clone.css({left: pos.left + 'px', top: (pos.top + st) + 'px'}).animate({
            width: '100%', 
            height : '100%',
			padding : '0',
			margin : '0',
            top: $('#contentwindow').scrollTop(),
            left: $('#contentwindow').scrollLeft()
        },300);
     parent.css({'overflow':'hidden'});    
    }      

});

$("body").delegate('.box.active','click', function(){

        var parent = $(this).parent();
		var cloned = $('.box.cloned');
        var clone = $('this');
		var h = cloned.outerHeight(true);
        var w = cloned.outerWidth(true);
		var st = parent.scrollTop();
		var mar = (cloned.outerWidth(true) - cloned.width())/2;
		var pos = cloned.position();

        $(this).animate({
            width: w + 'px', 
            height : h + 'px',
            top: (pos.top + mar + st) + 'px',
            left: (pos.left + mar) + 'px'
        },300, function(){
            $('.box.active').remove();
            cloned.removeClass('cloned');
			parent.css({'overflow':'auto'});
        });
		
    
});

});



//FASTBLUR
 
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
     colors = ["#b0e0e0","#309090","#130f30"],
     savedData = new Image(),
    fadein = 0;
 
 canvas.style.opacity = 0;
 for (var i = 0; i < 60; i++) {
     ctx.beginPath();
     var col = colors[i%(colors.length+1)],
         x = Math.floor(Math.random() * 10 * i),
         y = Math.floor(Math.random() * 10 * i),
         r = Math.floor(Math.random() * 100);
     ctx.shadowColor = col;
     ctx.shadowBlur = r; 
     ctx.arc(x,y,r, 0, 2 * Math.PI, false);
     ctx.closePath();
     ctx.fillStyle = col;
     ctx.fill();
 }
 
 savedData.src = canvas.toDataURL("image/png");
 ctx.drawImage(savedData,0,0)
boxBlurCanvasRGBA("canvas", 0, 0, canvas.width, canvas.height, 20, 30);                                                                                                                                                                                   

// fade in canvas
 (function(){
     // webkit didn't play nice with canvas.style & math
     fadein += 0.05;
     canvas.style.opacity = fadein;
     //filter for IE, not sure if an IE with canvas
     //has opacity working...
     canvas.style.filter = 'alpha(opacity=' + fadein*100 + ')';
     console.log(canvas.style.opacity, fadein*100);  
     if(canvas.style.opacity>=1){
         canvas.style.opacity=1;   
         canvas.style.filter = 'alpha(opacity=100)';
         return false;                                                                                                                                                                                                                            
     }     
     setTimeout(arguments.callee,30);     
 })();