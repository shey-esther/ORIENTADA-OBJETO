
// primera clase de bus de pasajeros

function BusPasajero(asientoNr,nombre,apellido,dni){

	this.asientoNr=asientoNr,
  	this.nombre=nombre,
  	this.apellido=apellido,
  	this.dni=dni,
  	
}

//segunda clase de los asisentos del bus 

function Asientos(){

	var asiento =[];
	var asientos = document.getElementsByTagName('td');

	for (var i = 0; i < asientos.length; i++) {
    	asientos[i].addEventListener('click',redirect,false);
	}

	this.resdirect = function(event){
		limpiar();
	    document.getElementById("mostrar").innerHTML=(event.target.textContent);
	   	var celdita=event.target;
	  	var n_asiento=parseInt(event.target.textContent);

	  	console.log(n_asiento);//me muestra el numero de asiento reservado

	   	for (var i = 0; i < asiento.length; i++) {
	   		var ps = (asiento[i].asientoNr);

	   		console.log(ps);//muestra el numero de asientos ya reservados los compara y al hacer el clic muestra los datos

			if(n_asiento==ps){
			  document.getElementById("nombre").value=asiento[i].nombre;
			  document.getElementById("apellidos").value=asiento[i].apellido;
			  document.getElementById("dni").value=asiento[i].dni;

			}
	   	}
	}

	this.reservar=function (){

  	var asientoNr=document.getElementById("mostrar").textContent;
  	var nombre=document.getElementById("nombre").value;
  	var apellido=document.getElementById("apellidos").value;
  	var dni=document.getElementById("dni").value;

  	var pasajero=new DatosPasajero(asientoNr,nombre,apellido,dni);
  	asiento.push(pasajero);
  	var celdita.style.backgroundColor="red";
  	
  	}

	this.mostrar=function(){

		var cuadro = "<table>"

	  	for (var i = 0; i < asiento.length; i++) {
	    	cuadro +="<tr><td>N°ASIENTO:"+asiento[i].asientoNr+"</td>"+
	    	"<td>NOMBRE:"+asiento[i].nombre+"</td>"+
	    	"<td>APELLIDO:"+asiento[i].apellido+"</td>"+
	   		"<td>DNI:"+asiento[i].dni+"</td></tr>";
  		}

  	cuadro+="</table>"

  	document.getElementById("resultado").innerHTML=cuadro;

	}

	this.buscar=function(){

		var dni =document.getElementById("dni1").value;

		for (var i = 0; i < asiento.length; i++) {

			var ps =asiento[i].dni;

			if(dni==ps){
				document.getElementById("nombre").value=asiento[i].nombre;
	  			document.getElementById("apellidos").value=asiento[i].apellido;
	 			document.getElementById("dni").value=asiento[i].dni;
	 		}
	 	}
	}

	this.cancelar=function(){

		limpiar();
		var celdita;

		var n_asiento = document.getElementById("mostrar").textContent;
		console.log(n_asiento);
	
	 	for (var i = 0; i < asiento.length; i++) {
	    	
			if(asiento[i].asientoNr == n_asiento){

				 asiento.splice(i,1);
				 console.log(asiento);

				celdita.style.backgroundColor="transparent";
	 		}
		}
	}

	this.limpiar=function(){

		document.getElementById("mostrar").textContent=" ";
		document.getElementById("nombre").value="";
		document.getElementById("apellidos").value=" ";
		document.getElementById("dni").value=" ";

	}
}

	var buscar = document.getElementById("buscar");
	buscar.onclick = function(){
		asiento.buscar();

	}

	var reservar = document.getElementById("reservar");
	reservar.onclick = function(){
		asiento.reservar();
		
	}

	var mostrar = document.getElementById("mostrar");
	mostrar.onclick = function(){
		asiento.mostrar();
		
	}

	var cancelar = document.getElementById("cancelar");
	cancelar.onclick = function(){
		asiento.cancelar();
		
	}