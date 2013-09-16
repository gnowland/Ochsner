// JavaScript Document

//WINDOW RESIZE


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


var newsize = function(){
	var b = $('#contentwindow').offset().top;
	var y = $(window).height();
	var z = $('#contentwindow').outerHeight(true);
	var h = $('#contentwindow').height();
	var w = z - h;
	var a = y - b;
	var e = a - w;
	var width = $(window).width();
	
	$('#contentwindow').css({'height': e + 'px'});
	$('header').css({'width': width - 15 + 'px'});
	$('#name').fitText(1.8, { minFontSize: '23px', maxFontSize: '80px' });
};

// usage:
$(window).smartresize(newsize);
$(document).ready(newsize);
