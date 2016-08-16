$(document).ready(function() {
    $(".tab_panel a").click( function(e){
		e.preventDefault();
		$(".tab_panel a").removeClass("active");
		$(this).addClass("active");
		var tab = $(this).attr('href');
		$(".tab_container .tab").hide()
		$(".tab_container .tab." + tab).fadeIn(500);
		});
		
		
	$(".form_block label").hover(function(){
		$(this).find(".tooltip").fadeIn(500);
		},
			function(){
		$(this).find(".tooltip").hide();
		}
	)
	
	$(".form_block input").focus(function(){
		$(this).parent().find(".tooltip").hide();
		})
});
