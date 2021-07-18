// CREAMOS UN VECTOR QUE CONTENGA LA INFORMACIÓN
var registro=[];
// CREAMOS UN PROCEDIMIENTO PARA REGISTRAR
function Registrar(nombreregistro, apellidoregistro, correoregistro){
    var NuevoRegistro={
        nombre:nombreregistro,
        apellido:apellidoregistro,
        correo:correoregistro
    };
    registro.push(NuevoRegistro);
}
// MOSTRAR LA INFORMACIÓN ALMACENADA EN REGISTRO
function Mostrar(){
    return(registro);
}