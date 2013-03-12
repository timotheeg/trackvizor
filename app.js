(function($)
{


window.main = function()
{
	
	$.getJSON('points.json', function(points)
	{
		console.log(points.length);
	});

}


})(jQuery);