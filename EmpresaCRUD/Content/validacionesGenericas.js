///document on ready del view que incluya el script
$(function () {
    estableceMensajesJqueryValidate();
    //Se agrega validación de fecha
    jQuery.validator.addMethod("validDate", function (value, element) {
        return this.optional(element) || /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(value);
    }, "Fecha incorrecta");
});

///establece los mensajes de jquery validate 
// a español
function estableceMensajesJqueryValidate() {
    $.extend($.validator.messages, {
        maxlength: $.validator.format("Favor ingrese {0} o menos caracteres"),
        minlength: $.validator.format("Favor ingrese al menos {0} caracteres"),
        required: $.validator.format("Valor Requerido"),
        url: "Debe ingresar una dirección web válida",
        rangelength: $.validator.format("Favor ingrese un valor entre {0} y {1} caracteres de longitud"),
        range: $.validator.format("Favor ingrese un valor entre {0} y {1}"),
        max: $.validator.format("Favor ingrese un valor menor o igual a: {0}"),
        min: $.validator.format("Favor ingrese un valor mayor o igual a: {0}"),
        number: "Favor ingrese un número válido",
        digits: "Favor ingrese solo números",
        email: "Favor ingrese una dirección de correo electrónico válida",
        accept: $.validator.format("Favor seleccione un formato válido {0}"),
        extension: $.validator.format("Favor seleccione un formato válido {0}"),
        require_from_group: $.validator.format("Ingrese al menos uno de estos valores")
    });
}