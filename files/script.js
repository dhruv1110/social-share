$(document).ready(function(e) {
    var ul = $(".social-share");
	var type = ul.attr("data-type");
	var bgcolor = ul.attr("data-bgcolor");
	var size = ul.attr("data-size");
	var r;
	switch(type)
	{
		case 'square':
		{
			r=0;
			break;
		}
		case 'circle':
		{
			r=45;
			break;
		}
		case 'rounded':
		{
			r=10;
			break;
		}
		default:
		{
			break;
		}
	}
	ul.children().each(function() {
        var url = $(this).attr("data-url");
		var service = $(this).attr("data-rel");
		$(this).html('<div style="width: '+size+'px;height: '+size+'px; background:'+bgcolor+';border-radius:'+r+'px;"><a href="'+url+'"><img src="../img/ico-'+service+'.png"></a></div>');
    });
});