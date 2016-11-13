$(document).ready(function() {
	var numeroCasillas = 16;
	var indiceOca = [];
	var indicePozo = []; 	
	$("#botonComenzar").click(function(){ //Crea el tablero con las ocas y pozos 
		$("div").remove(".casilla");
		$("div#rojo").removeAttr("id");
		$("div#verde").removeAttr("id");
		$("div#tablero div:first").attr("id", "rojo");
		$("div#tablero div:last-child").attr("id", "verde");
		$("#botonDado").removeAttr('disabled');
		$("#botonComenzar").attr('disabled',"true");
		for (var i = 1; i <= numeroCasillas; i++){
			var casilla = $("<div></div>") //Cra las csillas
										.addClass("casilla")
										.attr("id","casilla" + i)
										.text(i);
			$("#tablero").append(casilla);
			
		}
		$("div#casilla16").addClass("fin"); //Coloca la casilla fin
		
		var contadorOca = 0;	
		do{ //Coloca la oca sin que se ponga una encima de la otra (Sin que falte ninguna)
			var indice =  getRand(1, 15);
			if(!($("div#casilla" + indice).hasClass("oca"))){
				$("div#casilla" + indice).addClass("oca");
				contadorOca++;
				indiceOca[contadorOca]=indice; //guarda la posición de la oca
			}

		}while(contadorOca < 3);
		var contadorPozo = 0;	//Coloca los pozos, sin que se ponga uno encima del otro (Sin que falte ninguno)
		do{
			var indice =  getRand(1, 15);
			if(!($("div#casilla" + indice).hasClass("oca") || $("div#casilla" + indice).hasClass("pozo"))){
				$("div#casilla" + indice).addClass("pozo");
				contadorPozo++;
				indicePozo[contadorPozo]=indice; //guarda la posición del pozo
				console.log(indicePozo[contadorPozo]);
			}
		}while(contadorPozo < 3);
		$("#texto").text("Turno del jugador 1");
  });
	
		var posicionActual = 0;
		var posicionActual2 = 0;
		var turno = "jugador1";
	$("#botonDado").click(function(){
		indiceOca.sort(deMenorAMayor);  
		indicePozo.sort(deMenorAMayor);//Ordena el array de menor a mayor
		var posicionFinal = $("div#casilla" + numeroCasillas).position(); //Posición de la casilla final. 
		var indiceArrayOca = 0;
		var indiceArrayPozo = 0;
		var ocaEnOca = true;
		var ocaEnOca2 = true;
		if (turno == "jugador1"){ //Turno jugador 1
			var posicionRojo = getRand(1, 2);  //Tirada de dado aleatoria Jugador 1
			$("#dado").text("Tirada: " + posicionRojo);
			posicionActual += posicionRojo; //Va actualizando la posición exacta del jugador 1
			
			if (posicionActual <= numeroCasillas){ //Movimiento si no ha ganado
				var posicion = $("div#casilla" + posicionActual).position();
				$("#rojo").animate({left: + (posicion.left)+10 + 'px'},2000);
				turno = "jugador2";
				$("#texto").text("Turno del jugador 2"); //Texto turno del juagdor 
				
				if(posicionActual == numeroCasillas){ //comprueba ganador
					$("#texto").text("Gana el  jugador 1");
				}
				
				if($(("div#casilla") + posicionActual).hasClass("oca")){ //Movimiento de oca en oca
					//la nueva posición es donde está la oca
					if(posicionActual == indiceOca[0]){
						indiceArrayOca = 1;
						posicionActual = indiceOca[indiceArrayOca]; //La nueva posición es la de la oca
						var posicion = $("div#casilla" + indiceOca[indiceArrayOca]).position(); //Posición de la casilla de la oca.
						$("#rojo").animate({left: + (posicion.left)+10 + 'px'},2000);
						$("#texto").text("De oca en oca tiro por que me toca. Sigue jugando el jugador rojo");
						turno = "jugador1";
						$("#texto").text("Turno del jugador 1"); //Texto turno del juagdor 
						ocaEnOca = false;
					} 
					
					if(posicionActual == indiceOca[1] && ocaEnOca){
						indiceArrayOca = 2;
						posicionActual = indiceOca[indiceArrayOca];  //La nueva posición es la de la oca
						var posicion = $("div#casilla" + indiceOca[indiceArrayOca]).position(); //Posición de la casilla de la oca.
						$("#rojo").animate({left: + (posicion.left)+10 + 'px'},2000);
						$("#texto").text("De oca en oca tiro por que me toca. Sigue jugando el jugador rojo");
						turno = "jugador1";
					}	
				}
			
				
			if($(("div#casilla") + posicionActual).hasClass("pozo")){
				if(posicionActual == indicePozo[0]){
					alert("pozo");
					posicionActual == 1;
					 $("#rojo").animate({left: "-60px"});
				}
				
				if(posicionActual == indicePozo[1]){
					alert("pozo");
					posicionActual == 1;
					 $("#rojo").animate({left: "-60px"});
				}
				
				if(posicionActual == indicePozo[2]){
					alert("pozo");
					posicionActual == 1;
					 $("#rojo").animate({left: "-60px"});
				}
				
			alert("testMov2");
			}
			}else{ //Movimiendo cuando ha ganado
				posicionActual = numeroCasillas; //Si se pasa de 16 llegará aquí (Else). La posición actual pasará a ser la casilla final. 
				$("#rojo").animate({left: + (posicionFinal.left)+10 + 'px'},2000); //Coloca la oca en la última casilla.
				turno = "jugador2";
				$("#texto").text("Gana el  jugador 1");
				$("#botonDado").attr("disabled", "true");
				$("#botonComenzar").removeAttr("disabled");
			}
		}else{ //Turno jugador 2
			var posicionVerde = getRand(1,6); //Tirada de dado aleatoria Jugador 2
			$("#dado").text("Tirada: " + posicionVerde);
			posicionActual2 += posicionVerde; //Va actualizando la posición exacta del jugador 2
			
			if (posicionActual2 <= numeroCasillas){//Movimiento si no ha ganado
				var posicion2 = $("div#casilla" + posicionActual2).position();
				$("#verde").animate({left: + (posicion2.left)+10 + 'px'},2000);
				turno = "jugador1";
				$("#texto").text("Turno del jugador 1"); //Texto turno del jugador 
				
				if(posicionActual2 == numeroCasillas){ //Comprueba ganador
					$("#texto").text("Gana el  jugador 2");
				}
				
				if($(("div#casilla") + posicionActual2).hasClass("oca")){ //Movimiento de oca en oca
					//la nueva posición es donde está la oca
					if(posicionActual2 == indiceOca[0]){
						indiceArrayOca = 1;
						posicionActual2 = indiceOca[indiceArrayOca];  //La nueva posición es la de la oca
						var posicion = $("div#casilla" + indiceOca[indiceArrayOca]).position(); //Posición de la casilla de la oca.
						$("#verde").animate({left: + (posicion.left)+10 + 'px'},2000);
						$("#texto").text("De oca en oca tiro por que me toca. Sigue jugando el jugador verde");
						turno = "jugador2";
						$("#texto").text("Turno del jugador 2"); //Texto turno del juagdor 
						ocaEnOca2 = false;
					}
					
					if(posicionActual2 == indiceOca[1] && ocaEnOca2){
						indiceArrayOca = 2;
						posicionActual2 = indiceOca[indiceArrayOca];  //La nueva posición es la de la oca
						var posicion = $("div#casilla" + indiceOca[indiceArrayOca]).position(); //Posición de la casilla de la oca.
						$("#verde").animate({left: + (posicion.left)+10 + 'px'},2000);
						$("#texto").text("De oca en oca tiro por que me toca. Sigue jugando el jugador verde");
						turno = "jugador2";
					}
				}
				if($(("div#casilla") + posicionActual2).hasClass("pozo")){
				if(posicionActual2 == indicePozo[0]){
					alert("pozo");
					posicionActua2 == 1;
					 $("#verde").animate({left: "-60px"});
				}
				
				if(posicionActual2 == indicePozo[1]){
					alert("pozo");
					posicionActual2 == 1;
					 $("#verde").animate({left: "-60px"});
				}
				
				if(posicionActual2 == indicePozo[2]){
					alert("pozo");
					posicionActual2 == 1;
					 $("#verde").animate({left: "-60px"});
				}
				
			alert("testMov2");
			}
			}else{//Movimiendo cuando ha ganado
				posicionActual2 = numeroCasillas; //Si se pasa de 16 llegará aquí (Else). La posición actual pasará a ser la casilla final. 
				$("#verde").animate({left: + (posicionFinal.left)+10 + 'px'},2000); //Coloca el pozo en la última casilla.
				turno = "jugador1";
				$("#texto").text("Gana el  jugador 2");
				$("#botonDado").attr("disabled", "true");
				$("#botonComenzar").removeAttr("disabled");
			}
		}
		/*var posicion = $("div#casilla" + ( posicionRojo + 1)).position();
		alert( "left: " + posicion.left);
		var test= +$("#div#casilla" + 4).not("img").text();
		alert("casilla:" + (test + 1));*/
	/*if(posicion.left == ($("div#casila") + (posicionRojo+6)).position()){
			$("#rojo").animate({left:'+=' + posicion.left + 'px'},2000);pero a ver como scamos eso jajajjajaa
		}*/
  });

	function deMenorAMayor(elem1, elem2) {return elem1-elem2;} //Función para ordenar de menor a mayor números de un array.
	
	function getRand(min, max) { 
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});