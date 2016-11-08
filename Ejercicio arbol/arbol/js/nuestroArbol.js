$(document).ready(function() {
	//Crea y coloca las bolitas
	$("#adornar").click(function(){
		$('#mover').attr('disabled','true');
		var bolita = $("<div></div>"); 
		$(bolita).addClass("bolita");
		var backColor =  "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
		posLeft = getRand(100,300);
		$(bolita).css({'background-color':backColor , 'left':posLeft});
		$("#juego").append(bolita);
		
		var bolasCreadas = 1;
		if (posLeft>=100 && posLeft<150)
			posTop=getRand(200,300);
		else if (posLeft>=180 && posLeft<220)
			posTop=getRand(30,300)
		else if (posLeft>=150 && posLeft<250)	
			posTop=getRand(100,300);
		else if (posLeft>=250 && posLeft<=300)
			posTop=getRand(200,300);
		bolita.animate({top:posTop},300, function(){
			$('#mover').removeAttr('disabled');
			bolasCreadas += +$('#creadas').text(); //El "+" es para que se convierta a tipo número el texto, si no se pone hace concatenacion en vez de sumar
			$('#creadas').text(bolasCreadas);
		});
		


  });
  	//Mueve el arbol
  	$("#mover").click(function(){
		$('#adornar').attr('disabled','true');
		$('#mover').attr('disabled','true');
		
		$("#arbol").animate({left:'+=20px'},20);
		$("#arbol").animate({left:'-=20px'},20);
		$("#arbol").animate({left:'+=20px'},20);
		$("#arbol").animate({left:'-=20px'},20);
		$("#arbol").animate({left:'+=20px'},20);
		$("#arbol").animate({left:'-=20px'},20);
		$("#arbol").animate({left:'+=20px'},20);
		$("#arbol").animate({left:'-=20px'},20,function(){
			$('#adornar').removeAttr('disabled');
			$('#mover').removeAttr('disabled');
			caerbolas();
		});
	});	
	
	function caerbolas(){	
		$('#mover').attr('disabled','true');
		$('#adornar').attr('disabled','true');
		var cuantos = $('.bolita').length;
		var cuentaEliminadas = 0;
		$( ".bolita" ).each(function( index ) {
			$(this).delay(index*100).animate({top:"357px"}, 300, function(){
				$(this).fadeOut(function(){ 
					$(this).remove('.bolita');
					cuentaEliminadas++;
					if(cuantos == cuentaEliminadas){
							$('#adornar').removeAttr('disabled');
					}
					var bolasCaidas= +$("#eliminadas").text();
						bolasCaidas++;				
						$("#eliminadas").text(bolasCaidas);
						
				});
				
			});
			
		});	
		
	}
	function getRand(min, max) { 
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});