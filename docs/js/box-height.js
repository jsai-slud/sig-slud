$(function() {
	$(".box-frame").each(function(i, elem) {
		$(elem).children(".state").height($(elem).height());
		$(elem).children(".state").css("line-height", $(elem).height() + "px");
	})
	    })
