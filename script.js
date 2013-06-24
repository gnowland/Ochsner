// JavaScript Document



//WINDOW RESIZE

var newsize = function(){
	var b = $('#content').offset().top;
	var y = $(window).height();
	var z = $('#content').outerHeight(true);
	var h = $('#content').height();
	var w = z - h;
	var a = y - b;
	
	$('#content').css({'height':(a-w) + 'px'});
};

$(document).ready(newsize);
//$(window).load(newsize);  <DOCUMENT READY HAPPENS SOONER
$(window).resize(newsize);



//ANIMATION

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
            top: $('#content').scrollTop(),
            left: $('#content').scrollLeft()
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
			parent.css({'overflow':'scroll'});
        });
		
    
});

});