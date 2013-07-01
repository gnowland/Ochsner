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
//$('#btn').click(function(e){ 


$(window).load(function(){
$('#contentwindow').delegate('.box','click', function(){

    if ($('.box.active').length <= 0){ 
	        
        $('.onloadfadein img:last-child').css({'display': 'none', 'visibility': 'hidden'});
		$(this).removeClass('uncloned');
		$(this).addClass('cloned');
		
		var biwh = $('.box').width()
		var biwinwh = ($(window).width())-($('.box').width());
		var pctheightl = (biwinwh / $(window).width())*100; 
		//width, but whatever
		var cellwidth = ($('#rightcol').width()/$(window).width())*100;
		
		$('#leftcol').css({width: biwh + 'px' }); //remove the absolute link someday
		$('.boximage').css({height: biwh + 'px', width: biwh + 'px' });
		$('#rightcol').css({width: (biwinwh - 20) + 'px', 'margin-left': (biwh + 10) + 'px' });
		$('.ribbon').css({width: (pctheightl + 5.7) + '%' });
		//$('.cell').css({width: cellwidth + '%'});
		
		
		
        var parent = $(this).parent();
        var pos = $(this).position();
		var st = parent.scrollTop()
        var clone = $(this).clone().addClass('active');
			
		$(this).css({left: pos.left + 'px', top: (pos.top + st) + 'px', visibility: 'hidden' });
		
        parent.append(clone);

        clone.css({left: pos.left + 'px', top: (pos.top + st) + 'px'}).animate({
            width: '100%', 
            height : '100%',
			padding : '0',
			margin : '0',
            top: $('#contentwindow').scrollTop(), //remove the absolute link someday
            left: $('#contentwindow').scrollLeft() //remove the absolute link someday
        },300);
     	
		parent.css({'overflow':'hidden'});
	 
		$('.fade').hide().delay(200).fadeIn(200);  //remove the absolute link someday
	
	
		$('.boximage').delay(600).animate({
			height: 'auto',
			width: '70%',
			'margin-left': '15%',
			'margin-top': '5%',
			'margin-bottom': '-90%'
 			 }, 600, function() { 
    		// Animation complete.
			}); 
			
		//	Shadowbox.clearCache();
		//	Shadowbox.setup();
	    Shadowbox.setup("img.shadowbox", {
    		});
			
    } //CLOSE ifboxactive
}); //CLOSE window load

$('#contentwindow').delegate('.box.active .boximage','click', function(){
		
				
		$('.boximage').animate({
			width : $('.box').width() + 'px',
			height: $('.box').width() + 'px',
			padding:0,
			margin:0
 			 }, 500);
			 
		$('.fade').delay(600).fadeOut(400);  //remove the absolute link someday 

        var parent = $('.box.active').parent();
		var cloned = $('.box.cloned');
        var clone = $('.box.active');
		var h = cloned.outerHeight(true);
        var w = cloned.outerWidth(true);
		var st = parent.scrollTop();
		var mar = (cloned.outerWidth(true) - cloned.width())/2;
		var pos = cloned.position();

        $('.box.active').delay(600).animate({
            width: w + 'px', 
            height : h + 'px',
            top: (pos.top + mar + st) + 'px',
            left: (pos.left + mar) + 'px',
        },300, function(){
            $('.box.active').remove();
            cloned.removeClass('cloned');
			cloned.addClass('uncloned');
			cloned.css({'visibility': 'visible'});
			parent.css({'overflow':'auto'});
			$('.onloadfadein img:last-child').css({'display': 'inherit', 'visibility': 'visible'});
        });
	
});

});