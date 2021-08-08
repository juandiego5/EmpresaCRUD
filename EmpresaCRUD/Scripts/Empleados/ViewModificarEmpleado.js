$(function () {
	cargarDropdownPuestos();
	crearDatePicker();
	establecerDatosAnteriores();
	validarFormulario();
	eventos();
})

//Función para llamar al método y cargar el dropdown list
function cargarDropdownPuestos() {
	let url = '/Empleados/ListaPuestos';
	//Parámetros del método
	let parametros = {
	};
	let funcion = llenarDropDownList;
	ejecutaAjaxSincronico(url, parametros, funcion);
}

//Función para crear un datepicker
function crearDatePicker() {
	$("#fechaContratacionEmpleado").datepicker({
		changeYear: true,
		changeMonth: true,
		dateFormat: "dd/mm/yy",
		dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
		monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	});
}

//Función que recibe la lista y llena el dropdown list
function llenarDropDownList(data) {
	let nombrePuesto = $("#nombrePuesto");

	let nuevaOpcion = "<option disabled selected hidden value=''>Seleccione el puesto</option>";

	nombrePuesto.empty();
	nombrePuesto.append(nuevaOpcion);

	$(data.lista).each(function () {

		let objetoActual = this;

		nuevaOpcion = "<option value='" + objetoActual.idPuesto + "'>" + objetoActual.nombrePuesto + "</option>";

		nombrePuesto.append(nuevaOpcion);
	})
}

function establecerDatosAnteriores() {
	let generoPredeterminado = $("#generoPredeterminado").val();
	let fechaPredeterminado = $("#fechaPredeterminado").val();
	let estadoPredeterminado = $("#estadoPredeterminado").val();
	let puestoPredeterminado = $("#puestoPredeterminado").val();

	$("#generoEmpleado").val(generoPredeterminado);
	$("#nombrePuesto").val(puestoPredeterminado);
	let formFecha = fechaPredeterminado.substr(0, 9);
	$("#fechaContratacionEmpleado").val(formFecha)

	if (estadoPredeterminado) {
		$("#estadoEmpleado1").prop('checked', true);
	}
	else {
		$("#estadoEmpleado2").prop('checked', true);
	}
}

//Validación del formulario
function validarFormulario() {
	$("#formModificarEmpleado").validate({
		errorClass: 'error',
		rules: {
			nombreEmpleado: {
				required: true,
				maxlength: 30,
				minlength: 3
			},
			apellidosEmpleado: {
				required: true,
				maxlength: 80,
				minlength: 3
			},
			cedulaEmpleado: {
				required: true,
				number: true,
				maxlength: 20
			},
			generoEmpleado: {
				required: true,
				maxlength: 20
			},
			fechaContratacionEmpleado: {
				required: true,
				validDate: true
			},
			direccionEmpleado: {
				required: true,
				maxlength: 100
			},
			nombrePuesto: {
				required: true
			},
		}
	});
}

//Se crean los eventos de la vista
function eventos() {
	$("#btnModificar").on("click", function () {
		let formulario = $("#formModificarEmpleado");

		formulario.validate();

		if (formulario.valid()) {
			let idEmpleado = $("#idEmpleado").val();
			let nombreEmpleado = $("#nombreEmpleado").val();
			let apellidosEmpleado = $("#apellidosEmpleado").val();
			let cedulaEmpleado = $("#cedulaEmpleado").val();
			let generoEmpleado = $("#generoEmpleado").val();
			let fechaContratacionEmpleado = $("#fechaContratacionEmpleado").val();
			let direccionEmpleado = $("#direccionEmpleado").val();
			let estadoEmpleado = $('input:radio[name=estadoEmpleado]:checked').val();
			let idPuesto = $("#nombrePuesto").val();

			enviarDatosEmpleado(idEmpleado, nombreEmpleado, apellidosEmpleado, cedulaEmpleado, generoEmpleado, fechaContratacionEmpleado,
				direccionEmpleado, estadoEmpleado, idPuesto);
		}
	});
}

//Envia los datos al controlador
function enviarDatosEmpleado(idEmpleado, nombreEmpleado, apellidosEmpleado, cedulaEmpleado, generoEmpleado, fechaContratacionEmpleado,
	direccionEmpleado, estadoEmpleado, idPuesto) {
	//Dirección a donde se enviarán los datos
	let url = '/Empleados/ModificarEmpleado';
	//Parámetros del método
	let parametros = {
		idEmpleado: idEmpleado,
		nombreEmpleado: nombreEmpleado,
		apellidosEmpleado: apellidosEmpleado,
		cedulaEmpleado: cedulaEmpleado,
		generoEmpleado: generoEmpleado,
		fechaContratacionEmpleado: fechaContratacionEmpleado,
		direccionEmpleado: direccionEmpleado,
		estadoEmpleado: estadoEmpleado,
		idPuesto: idPuesto
	};
	let funcion = resultadoSolicitud;
	ejecutaAjax(url, parametros, funcion);
}

//Función final con el resultado de la solictud
function resultadoSolicitud(data) {
	//El resultado es enviado para mostrarse
	alert(data.mensaje);
}