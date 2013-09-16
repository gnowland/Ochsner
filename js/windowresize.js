// JavaScript Document

//WINDOW RESIZE

//DEBOUNCING RESIZE
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null; 
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100); 
      };
  }
    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


//RESIZE VARIABLES
var newsize = function(){
	//MEASURING HEIGHT
	var b = $('#contentwindow').offset().top;
	var y = $(window).height();
	var z = $('#contentwindow').outerHeight(true);
	var h = $('#contentwindow').height();
	var w = z - h;
	var a = y - b;
	var e = a - w;
	
	//MEASURING WIDTH
	var width = $(window).width();
	
	//MEASURING SCROLLBAR WIDTH (for header subtraction)
		// Create the measurement node
		var scrollDiv = document.createElement("div");
		scrollDiv.className = "scrollbar-measure";
		document.body.appendChild(scrollDiv);
		// Get the scrollbar width
		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
		console.warn(scrollbarWidth); // Mac:  15
		// Delete the DIV 
		document.body.removeChild(scrollDiv);
	
	$('#contentwindow').css({'height': e + 'px'});
	$('header').css({'width': width - scrollbarWidth + 'px'});
	$('.gradient-border').css({'width':width - scrollbarWidth+'px'});
	$('#name').fitText(1.8, { minFontSize: '23px', maxFontSize: '80px' });
			//HEADER HEIGHT
		var nameheight = $('#name').outerHeight(true);
		$('header').css({'height':nameheight+'px'});
		var headerheight = $('header').outerHeight(true);
		
	$('#contentwindow').css({'padding-top':headerheight +5+'px'});
};

// usage:
$(window).smartresize(newsize);
$(document).ready(newsize);
