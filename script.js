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
	    
        $('.box.onloadfadein').children('img').css({'display': 'none', 'visibility': 'hidden'});
		$(this).removeClass('uncloned');
		$(this).addClass('cloned');
		
		var biwh = $('.box').width();
		var biwinwh = $(window).width()-biwh;
		var pctheightl = (($(window).width() - biwinwh) / $(window).width()) * 100; 
		var pctheightr = 100 - pctheightl;
		var cellwidth = ($('#rightcol').width()/$(window).width())*100;
		var pb = pctheightr + pctheightl;
		
		$(this).find('#leftcol').css({width: pctheightl + '%' }); //remove the absolute link someday
		$('.boximage').css({width: biwh + 'px', height: 0 + 'px', 'padding-bottom': pb +'%'});
		$(this).find('#rightcol').css({width: pctheightr + '%' });
		$('.ribbon').css({width: (100+(pctheightl/2)) + '%' });
		//$('.cell').css({width: cellwidth + '%'});
	
		
        var parent = $(this).parent();
        var pos = $(this).position();
		var st = parent.scrollTop()
        var clone = $(this).clone().addClass('active');
			
		$(this).css({left: pos.left + 'px', top: (pos.top + st) + 'px', visibility: 'hidden' }).addClass('inactive');
		
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
	 
		$('.fade').hide().delay(250).fadeIn(200);  //remove the absolute link someday
	
	
		$('.boximage').delay(700).animate({
			width: '70%',
			'margin-left': '15%',
			'margin-top': '5%',
			'margin-bottom': '-90%'
 			 }, 600, function() { 
    		// Animation complete.
			}); 
			
			//SHADOWBOX FIXING
			$('.box.inactive .gallery a').attr('rel', 'noshadowbox')			
			Shadowbox.clearCache();
			Shadowbox.setup();
			
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

        $('.box.active').delay(800).animate({
            width: w + 'px', 
            height : h + 'px',
            top: (pos.top + mar + st) + 'px',
            left: (pos.left + mar) + 'px',
        },300, function(){
            $('.box.active').remove();
            cloned.removeClass('cloned').removeClass('inactive');
			cloned.addClass('uncloned');
			cloned.css({'visibility': 'visible'});
			parent.css({'overflow':'auto'});
			$('.box.onloadfadein').children('img').css({'display': 'inherit', 'visibility': 'visible'});
        });
//	Shadowbox.clearCache();
});

});