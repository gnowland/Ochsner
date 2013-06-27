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
$("body").delegate('.box','click', function(){

    if ($('.box.active').length <= 0){ 
        
        $(this).removeClass('uncloned');
		$(this).addClass('cloned');
		
		
		
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
	 
		$('.content').hide().delay(200).fadeIn(200);  //remove the absolute link someday
		var biwh = $('.box').width()
		$('.boximage').css({width: biwh + 'px', height: biwh + 'px', }); //remove the absolute link someday

    } 
});

$("body").delegate('.box.active','click', function(){

		$('.content').fadeOut(100);  //remove the absolute link someday

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
            left: (pos.left + mar) + 'px',
        },300, function(){
            $('.box.active').remove();
            cloned.removeClass('cloned');
			cloned.addClass('uncloned');
			cloned.css({visibility: 'visible'});
			parent.css({overflow:'auto'});
        });
});

});