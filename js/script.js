function colorAleatorio() 
		{
			var rgb= new Array();
			var r = Math.round(Math.random()*255);
			var g = Math.round(Math.random()*255);
			var b = Math.round(Math.random()*255);
			return rgb = [r, g, b];

		}
/*function buscar (vecTriangulo, num) 
{ var encontro=0;
for (var i = 0; i < 6; i++) {
	if (vecTriangulo[i] == num) {
		encontro=1;
		
	}
}
return encontro;
}*/

function triangulosAleatorios(op) 
		{
			var rgb= new Array();
			rgb= colorAleatorio();
			var cont= 0;
			var vecTriangulo= new Array(7);
			//var numCuadros = 0;
			var numVueltas = 0;

			//var vueltas = new Array(7);

			/*for (var i = 0; i < vueltas.length; i++) {
				vueltas[i]=0;
			}*/
			
			
			
			
			switch(op)
			{
			
				case 1:
				numVueltas=3;
				
				break;


				case 2:
				numVueltas=7;
				
				break;
			}

		for (var i = 0; i < numVueltas; i++) {
				//vueltas[i]=0;
				rgb= colorAleatorio();
				document.getElementById("triangulo"+(i+1)).style.borderBottomColor = 'rgb(' +rgb[0]+ ',' + rgb[1] + ',' + rgb[2] + ')';
				}	

			
		}



var colorGanador = new Array();
var vueltas = new Array();
var ganador = 100;
var fallos= 0;
var op = 100;

//op = parseInt(prompt("Ingresar 1 para jugar o 0 para salir"));

colorGanador= colorAleatorio();
document.getElementById("rgbTitulo").innerHTML=(colorGanador[0]+" , "+colorGanador[1]+" , "+colorGanador[2]);


op=parseInt(prompt("Ingresar 1 para Nivel facil o 2 para Nivel Dificil:"));

switch(op)
{
case 1:ganador=Math.floor(Math.random()*3)+1;
break;
case 2:ganador=Math.floor(Math.random()*7)+1;
break;
default:alert("Opcion No valida!");
location.reload();
break;
}
triangulosAleatorios(op);
console.log(ganador+"  ganador es!!!   ");
for (var i = 0; i < 7; i++) 
			{
				vueltas[i]=document.getElementById("triangulo"+(i+1)).onclick=function()
					{
						
						fallos++;
						document.getElementById("fallos").innerHTML=("FALLASTE! <br> Cantidad de Fallos:  " + fallos);
					}
 			 
			} 


document.getElementById("triangulo"+ganador).style.borderBottomColor = 'rgb(' +colorGanador[0]+ ',' + colorGanador[1] + ',' + colorGanador[2] + ')';
document.getElementById("triangulo"+ganador).onclick=function()
{	
						alert("Ganaste! " + "Cantidad de fallos: "+ fallos);
						
						fallos=0;

						op=parseInt(prompt("Ingresar 0 para salir o 1 para voler a jugar:"));
						switch (op)
						{
							case 1:

							location.reload();
							break;

							case 0:
							document.write("GRACIAS POR JUGAR");
							window.location="https://www.youtube.com/watch?v=K9u8zFVjX1g";
							break;
						}	
}





