jQuery(function($){
	
	$(document).ready(function() {
$("#showarrow").mouseenter(function(){  
   $(".cbp-spmenu").addClass("hover");
});

$("#showarrow").mouseleave(function(){  
 $(".cbp-spmenu").removeClass("hover"); 
});
 

$(".cbp-spmenu").mouseenter(function(){     
 $(".cbp-spmenu").addClass("hover");
});

$(".cbp-spmenu").mouseleave(function(){ 
  $(".cbp-spmenu").removeClass("hover");
});

	
});

});
