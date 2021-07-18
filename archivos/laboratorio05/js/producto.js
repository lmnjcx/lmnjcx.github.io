registro=[];
function Registrar(regProducto, regPrecio, regCategoria, regCantidad){
    var nuevoRegistro={
        producto:regProducto,
        precio:regPrecio,
        categoria:regCategoria,
        cantidad:regCantidad
    }
    registro.push(nuevoRegistro);
}

function Mostrar(){
    return(registro)
}