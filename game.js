console.log('game working');
var currentColor = "black"
$(document).ready(function(){

    $(".color").click(function(){
    	currentColor = $(this).css("background-color");
    });

    $(".hitMe").click(function(){
    	currentColor = $(".jscolor").val();
    });

	$( ".pixel" ).click(function() {
 		color(this);
	});

	$(".reset").click(function(){
		$(".pixel").each(function(){
			$(".pixel").css('background-color', 'white');
		})
	});

});

function color(cell){
	$(cell).css('background-color', currentColor);
}




