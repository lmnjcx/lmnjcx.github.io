registro=[];

function Registrar(regNombre,regApellido,regCorreo){
    var nuevoRegistro={
        nombre:regNombre,
        apellido:regApellido,
        correo:regCorreo,
    }
    registro.push(nuevoRegistro);
}

function Mostrar(){
    return(registro);
}
