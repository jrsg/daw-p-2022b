/*Aguascalientes
Baja California
Baja California Sur
Campeche
Chiapas
Chihuahua
Ciudad de México
Coahuila
Colima
Durango
Estado de México
Guanajuato
Guerrero
Hidalgo
Jalisco
Michoacán
Morelos
Nayarit
Nuevo León
Oaxaca
Puebla
Querétaro
Quintana Roo
San Luis Potosí
Sinaloa
Sonora
Tabasco
Tamaulipas
Tlaxcala
Veracruz
Yucatán
Zacatecas*/
			
			
$(document).ready(function(){
	$("#confirmacion").dialog({
	  width: 950,
	  height:600,
	  autoOpen:false,
	  modal:true
	});
	
	$("#errores").dialog({
	  width: 580,
	  height:225,
	  autoOpen:false,
	  modal:true
	});
	
	
	/*//// COLOCA AQUÍ LA LÓGICA PARA LLENAR LA LISTA DE ESTADOS*/
	/////////////////////////////////////////////////////////////
	
	
});

function mostrarResumen(){
	$("#confirmacion").dialog("open");
}

function mostrarErrores(){
	$("#errores").dialog("open");
}
