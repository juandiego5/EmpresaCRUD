$(function () {
	cargarListaEmpleados();
})

//Función para llamar al método y traer la lista de empleados de la BD
function cargarListaEmpleados() {
	let url = '/Empleados/ListaEmpleados';
	//Parámetros del método
	let parametros = {
	};
	let funcion = llenarKendoEmpleados;
	ejecutaAjax(url, parametros, funcion);
}

//Función que crea el grid de kendo y muestra los datos obtenidos 
function llenarKendoEmpleados(data) {
	$("#divKendoGrid").empty();
	$("#divKendoGrid").kendoGrid({
		//Asigna la fuente de datos al objeto kendo grid
		dataSource: {
			data: data.lista,
			pageSize: 5
		},
		pageable: true,
		columns: [
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'nombreEmpleado',
				//texto del encabezado
				title: 'Nombre'
			},
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'apellidosEmpleado',
				//texto del encabezado
				title: 'Apellidos'
			},
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'cedulaEmpleado',
				//texto del encabezado
				title: 'Cédula'
			},
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'generoEmpleado',
				//texto del encabezado
				title: 'Género'
			},
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'direccionEmpleado',
				//texto del encabezado
				title: 'Dirección'
			},
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'fechaContratacionEmpleado',
				//texto del encabezado
				title: 'Fecha contratación',
				type: "date",
				format: "{0:dd/MM/yyyy}"
			},
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'estadoEmpleado',
				//texto del encabezado
				title: 'Estado'
			},
			{
				//Propiedad de la fuente de datos a mostrar
				field: 'nombrePuesto',
				//texto del encabezado
				title: 'Puesto'
			},
			{
				title: "Acciones",
				template: function (dataItem) {
					return "<a href='/Empleados/ViewModificarEmpleado?idEmpleado=" +
						dataItem.idEmpleado + "'>Modificar</a>" +
						"<br /> <a href='/Empleados/ViewEliminarEmpleado?idEmpleado=" +
						dataItem.idEmpleado + "'>Eliminar</a>"
				}
			}
		],
		filterable: true,
		columnMenu: true,
		sortable: true,
		resizable: true,
		toolbar: ["search", "pdf"],
		pdf: {
			fileName: "Lista.pdf",
			author: "Juan Diego Calderón Bonilla",
			creator: "Juan Diego Calderón Bonilla",
		}
	});
}