using EmpresaCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmpresaCRUD.Controllers
{
    public class EmpleadosController : Controller
    {

		EmpresaCRUDEntities modeloDB = new EmpresaCRUDEntities();
		// GET: Empleados
		#region CRUD Empleado
		public ActionResult ViewListaEmpleados()
		{
			return View();
		}

		//Método para consultar la lista de los registros en la base de datos
		public ActionResult ListaEmpleados()
		{
			List<listaEmpleados_Result> listaEmpleados =
			   this.modeloDB.listaEmpleados().ToList();
			return Json(new
			{
				lista = listaEmpleados
			});
		}

		public ActionResult ViewAgregarEmpleado()
		{
			return View();
		}

		//Método para agregar el registro en la base de datos y obtener el resultado
		[HttpPost]
		public ActionResult AgregarEmpleado(consultarEmpleado_Result modelo)
		{
			int cantRegistrosAfectados = 0;
			string resultado = "";
			try
			{
				cantRegistrosAfectados = this.modeloDB.agregarEmpleado(modelo.nombreEmpleado, modelo.apellidosEmpleado,
					modelo.cedulaEmpleado, modelo.generoEmpleado, modelo.fechaContratacionEmpleado,
					modelo.direccionEmpleado, modelo.estadoEmpleado, modelo.idPuesto);
			}
			catch (Exception error)
			{
				resultado = "Ocurrio un error: " + error.Message;
			}
			finally
			{
				if (cantRegistrosAfectados > 0)
				{
					resultado = "Empleado agregado";
				}
				else
				{
					resultado += "No se pudo agregar el empleado";
				}
			}

			return Json(new
			{
				mensaje = resultado,
				registrosAfectados = cantRegistrosAfectados
			});
		}

		public ActionResult ViewModificarEmpleado(int idEmpleado)
		{
			consultarEmpleado_Result modelo = this.modeloDB.consultarEmpleado(idEmpleado).FirstOrDefault();
			return View(modelo);
		}

		//Método para modificar el registro en la base de datos y obtener el resultado
		[HttpPost]
		public ActionResult ModificarEmpleado(consultarEmpleado_Result modelo)
		{
			int cantRegistrosAfectados = 0;
			string resultado = "";
			try
			{
				cantRegistrosAfectados = this.modeloDB.modificarEmpleado(modelo.idEmpleado, modelo.nombreEmpleado,
					modelo.apellidosEmpleado, modelo.cedulaEmpleado, modelo.generoEmpleado,
					modelo.fechaContratacionEmpleado, modelo.direccionEmpleado, modelo.estadoEmpleado, modelo.idPuesto);
			}
			catch (Exception error)
			{
				resultado = "Ocurrio un error: " + error.Message;
			}
			finally
			{
				if (cantRegistrosAfectados > 0)
				{
					resultado = "Empleado modificado";
				}
				else
				{
					resultado += "No se pudo modificar el empleado";
				}
			}

			return Json(new
			{
				mensaje = resultado,
				registrosAfectados = cantRegistrosAfectados
			});
		}

		public ActionResult ViewEliminarEmpleado(int idEmpleado)
		{
			consultarEmpleado_Result modelo = this.modeloDB.consultarEmpleado(idEmpleado).FirstOrDefault();
			return View(modelo);
		}

		//Método para eliminar el registro en la base de datos y obtener el resultado
		[HttpPost]
		public ActionResult EliminarEmpleado(int idEmpleado)
		{
			int cantRegistrosAfectados = 0;
			string resultado = "";
			try
			{
				cantRegistrosAfectados = this.modeloDB.eliminarEmpleado(idEmpleado);
			}
			catch (Exception error)
			{
				resultado = "Ocurrio un error: " + error.Message;
			}
			finally
			{
				if (cantRegistrosAfectados > 0)
				{
					resultado = "Empleado eliminado";
				}
				else
				{
					resultado += "No se pudo eliminar el empleado";
				}
			}

			return Json(new
			{
				mensaje = resultado,
				registrosAfectados = cantRegistrosAfectados
			});
		}

		//Método para consultar la lista de los registros en la base de datos
		public ActionResult ListaPuestos()
		{
			List<listaPuestos_Result> listaPuestos =
			   this.modeloDB.listaPuestos().ToList();
			return Json(new
			{
				lista = listaPuestos
			});
		}

		#endregion
	}
}
