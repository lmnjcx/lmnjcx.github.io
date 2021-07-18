registro=[];

function Registrar(regNombre,regApellido,regDNI,regCurso,regTurno,regEstado){
    var nuevoRegistro={
        nombre:regNombre,
        apellido:regApellido,
        dni:regDNI,
        curso:regCurso,
        turno:regTurno,
        estado:regEstado,
    }
    registro.push(nuevoRegistro);
}

function Mostrar(){
    return(registro);
}