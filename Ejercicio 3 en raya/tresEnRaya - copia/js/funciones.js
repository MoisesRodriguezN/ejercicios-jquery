$(document).ready(function(){
	var combinacionGanadora =[['#casilla1','#casilla2','#casilla3'],
                        ['#casilla1','#casilla4','#casilla7'],
                        ['#casilla1','#casilla5','#casilla9'],
                        ['#casilla2','#casilla5','#casilla8'],
                        ['#casilla3','#casilla5','#casilla7'],
                        ['#casilla3','#casilla6','#casilla9'],
                        ['#casilla4','#casilla5','#casilla6'],
                        ['#casilla7','#casilla8','#casilla9']];
	var pintado = "circulo";
	
	$("#botonComenzar").click(function(){ //crea el tablero
		
		for (var i = 1; i < 10; i++){
			$("#casilla" + i).remove();
		}
		pintado = "circulo";
		
	    $(this).attr('disabled','true');
		for (var i = 1; i < 10; i++){
			var casilla = $("<div></div>").addClass("casilla").addClass("vacia").attr("id","casilla"+i);
			$("#tablero").append(casilla);
		}

	});
	
	$("#tablero").on("click",".vacia",function(){ //Pone cruz o circulo
		
		if(pintado == "circulo"){
			pintado = "cruz";
			$("#texto").text("jugador1");
		}else{	
			pintado = "circulo";
			$("#texto").text("jugador2");
		}
		
		$(this).addClass(pintado);	
		$(this).removeClass("vacia");
		comprobarGanador($(this).attr("id"));
		
	});
	
	function comprobarGanador(idCasilla){
		var jugador = (pintado == "cruz") ? 1 : 2;
		var candidatas=[];
		console.log(idCasilla);
		for($i = 0; $i < combinacionGanadora.length; $i++){
			console.log(combinacionGanadora[$i]);
			if(jQuery.inArray("#"+idCasilla,combinacionGanadora[$i]) != -1){
				candidatas.push(combinacionGanadora[$i]);
			}

		}
		console.log("----------");
		console.log(candidatas);
		
		for ($i = 0; $i < candidatas.length;$i++){
			if($(candidatas[$i][0]).hasClass(pintado)
				&& $(candidatas[$i][1]).hasClass(pintado)
				&& $(candidatas[$i][2]).hasClass(pintado)) {
				
				$("#texto").text("Gana Jugador " + jugador);
				$(".casilla").slideUp(3000,function(){
					$("texto").text("pulse Comenzar para empezar una partida");	
				});
				$("#botonComenzar").removeAttr("disabled");
			}
			   
		}
	}
	
});
				
/*
	var combinacionGanadora[[1,2,3];
							[1,4,7];
							[1,5,9];
							[2,5,8];
							[3,5,7];
							[3,6,9];
							[4,5,6];
							[7,8,9]];
							
	for (i=0; i<=7;i++){
		if($("#capa"+comb[i][0]).hasClass(jugador)
		&&($("#capa"+comb[i][1]).hasClass(jugador)
		&&($("#capa"+comb[i][2]).hasClass(jugador))))
		

	}
 */