// JavaScript Document

//ANIMATION
$(window).load(function(){
$("body").delegate('.box','click', function(){

    if ($('.box.active').length <= 0){ 
        
        $(this).addClass('cloned');
        
        var parent = $(this).parent();
        var pos = $(this).position();
        var clone = $(this).clone().addClass('active');
        $(this).css({left: pos.left + 'px', top: pos.top + 'px'});
        
		$('#content').css({'overflow':'hidden'})
		
        parent.append(clone);

        clone.css({left: pos.left + 'px', top: pos.top + 'px'}).animate({
            width: '100%', 
            height : '100%',
			padding : '0',
			margin : '0',
            top: $("#content").scrollTop(),
            left: 0
        },300);
        
    }                   

});

$("body").delegate('.box.active','click', function(){

        var cloned = $('.box.cloned');
        var clone = $('this');
		var h = cloned.outerHeight();
        var w = cloned.outerWidth();
		var cp = $('#content').outerWidth(true) - $('#content').width();
		var margin = (cloned.outerWidth(true) - cloned.width())/2;
		var pos = cloned.position();

        $(this).animate({
            width: w + 'px', 
            height : h + 'px',
            top: (pos.top + margin) + 'px',
            left: (pos.left + margin) + 'px'
        },300, function(){
            $('.box.active').remove();
            cloned.removeClass('cloned');
			$('#content').css({'overflow':'scroll'});
        });
		
    
});

});

//WINDOW RESIZE

var newsize = function(){
	var b = $('#content').offset().top;
	var y = $(window).height();
	var z = $('#content').outerHeight();
	var h = $('#content').height();
	var w = z - h;
	var a = y - b;
	
	$('#content').css({'height':(a-w) + 'px'});
};

$(document).ready(newsize);
//$(window).load(newsize);  <DOCUMENT READY IS SOONER
$(window).resize(newsize);
