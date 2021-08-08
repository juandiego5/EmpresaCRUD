$(function () {
	establecerDatosAnteriores();
	eventos();
})

function establecerDatosAnteriores() {
	let fechaPredeterminado = $("#fechaPredeterminado").val();
	let estadoPredeterminado = $("#estadoPredeterminado").val();

	var formFecha = fechaPredeterminado.substr(0, 9);
	$("#fechaContratacionEmpleado").val(formFecha)

	if (estadoPredeterminado) {
		$("#estadoEmpleado1").prop('checked', true);
	}
	else {
		$("#estadoEmpleado2").prop('checked', true);
	}

	$("#estadoEmpleado1").attr('disabled', true);
	$("#estadoEmpleado2").attr('disabled', true);
}

//Se crean los eventos de la vista
function eventos() {
	$("#btnEliminar").on("click", function () {
		let idEmpleado = $("#idEmpleado").val();
		enviarIdEliminar(idEmpleado);
	});
}

//Envia los datos al controlador
function enviarIdEliminar(idEmpleado) {
	//Dirección a donde se enviarán los datos
	let url = '/Empleados/EliminarEmpleado';
	//Parámetros del método
	let parametros = {
		idEmpleado: idEmpleado
	};
	let funcion = resultadoSolicitud;
	ejecutaAjax(url, parametros, funcion);
}

//Función final con el resultado de la solictud
function resultadoSolicitud(data) {
	//El resultado es enviado para mostrarse
	alert(data.mensaje);
}