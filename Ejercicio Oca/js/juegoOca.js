$(document).ready(function() {
	var numeroCasillas = 16;
	$("#botonComenzar").click(function(){ //prepara el tablero de juego
		$("#botonDado").removeAttr('disabled');
		$("#botonComenzar").attr('disabled',"true");
		for (var i = 1; i <= numeroCasillas; i++){ //crea las casillas
			var casilla = $("<div></div>")
										.addClass("casilla")
										.attr("id","casilla" + i)
										.text(i);
			$("#tablero").append(casilla);
			
		}
		$("div#casilla16").addClass("fin");
		
		var contadorOca = 0;	
		do{ //coloca las ocas sin que se coloquen unas encima de las otras
			var indice =  getRand(1, 15);
			console.log(indice);
			if(!($("div#casilla" + indice).hasClass("oca"))){
				$("div#casilla" + indice).addClass("oca");
				contadorOca++;
			}
		}while(contadorOca < 3);
		
		var contadorPozo = 0;	
		do{ //coloca los pozos sin que se coloquen unos encima de los otros
			var indice =  getRand(1, 15);
			console.log(indice);
			if(!($("div#casilla" + indice).hasClass("oca") || $("div#casilla" + indice).hasClass("pozo"))){
				$("div#casilla" + indice).addClass("pozo");
				contadorPozo++;
			}
		}while(contadorPozo < 3);
	
	});

	
	$("#botonDado").click(function(){
	});
	
	function getRand(min, max) { 
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});