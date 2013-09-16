// JavaScript Document

//BOX ANIMATION
$(window).load(function(){
$('#contentwindow').delegate('.box','click', function(){

    if ($('.box.active').length <= 0){ 
		
		$(this).reveal;
	    
        $(this).children('img').addClass('jshiddenimage');
		$(this).removeClass('uncloned');
		$(this).addClass('cloned');
		
	//Variables
		var biwh = $('.box').width();
		var biwinwh = $(window).width()-biwh;
		var pctheightl = (($(window).width() - biwinwh) / $(window).width()) * 100; 
		var pctheightr = (100 - pctheightl)-1;
		var cellwidth = ($('#rightcol').width()/$(window).width())*100;
		var pb = pctheightr + pctheightl;
	//Content Height
		var mastheight = $('header').outerHeight(true);
		var contentheight = (($(window).height() - mastheight) / $(window).height()) * 100;
		
	//setting widths and heights and such
		$('.boximage').css({width: biwh + 'px', height: biwh + 'px'});
		
		$(this).find('#leftcol').css({width: pctheightl + 0.5 + '%' }); //remove the absolute link someday
		$(this).find('#rightcol').css({'width':pctheightr - 0.5 + '%'});
		if (pctheightr<45) {$(this).find('#rightcol').css({'width':100+'%','float':'none'})};
		
//		$('.ribbon').css({width: (100+(pctheightl/2)) + '%' });
		//$('.cell').css({width: cellwidth + '%'});
	
		
        var parent = $(this).parent();
        var pos = $(this).position();
		var st = parent.scrollTop()
        var clone = $(this).clone().addClass('active');
			
		$(this).css({left: pos.left + 'px', top: (pos.top + st) + 'px', visibility: 'hidden' }).addClass('inactive');
		
        parent.append(clone);

        clone.css({left: pos.left + 'px', top: (pos.top + st) + 'px'}).animate({
            width: '100%', 
            height : contentheight + '%',
			padding : mastheight + 'px 0 0 0',
			margin : '0',
            top: $('#contentwindow').scrollTop(), //remove the absolute link someday
            left: $('#contentwindow').scrollLeft() //remove the absolute link someday
        },300, function(){
			parent.css({'overflow':'hidden'});
			$(this).css({'overflow-x':'auto','overflow-y':'scroll'});
			});
     	
		
		
			//SHADOWBOX FIXING
			$('.box.inactive .gallery a').attr('rel', 'noshadowbox')			
			Shadowbox.clearCache();
			Shadowbox.setup();
	 
		$('.fade').hide().delay(250).fadeIn(200);  //remove the absolute link someday
	
	//Second Animation (image) 
		var bnewh = biwh*0.7;
		$('.boximage').delay(700).animate({
			width: '70%',
			height: bnewh + 'px',
			'margin-left': '15%',
			'margin-top': '5%',
			'margin-bottom': '-45%'
 			 }, 600, function() {
    		// Animation complete.
			}); 
			
		$(this).children('img').removeClass('jshiddenimage');
			
    } //CLOSE ifboxactive
}); //CLOSE window load

$('#contentwindow').delegate('.box.active .boximage','click', function(){
			
		$('.boximage').animate({
			width : $('.box').width() + 'px',
			height: $('.box').width() + 'px',
			padding : '0',
			margin : '0',
 			 }, 500, function(){
				 cloned.css({'overflow':'hidden'});
				 parent.css({'overflow-y':'scroll', 'overflow-x':'hidden'});
				 });
		
		$('.fade').delay(600).fadeOut(400);  //remove the absolute link someday 
		
        var parent = $('.box.active').parent();
		var cloned = $('.box.cloned');
        var clone = $('.box.active');
		var h = cloned.outerHeight(true);
        var w = cloned.outerWidth(true);
		var st = parent.scrollTop() - $('header').outerHeight(true); //remove the absolute link someday 
		var mar = (w - cloned.width())/2;
		var pos = cloned.position();
		
		$('.box.active').delay(800).animate({
            width: w + 'px', 
            height : h + 'px',
            top: (pos.top + mar + st) + 'px',
            left: (pos.left + mar) + 'px',
        },400, function(){
            $('.box.active').remove();
            cloned.removeClass('cloned').removeClass('inactive');
			cloned.addClass('uncloned');
			cloned.css({'visibility': 'visible'});
        });
//	Shadowbox.clearCache();
});

});
