// DECLARANDO VARIABLES PARA LOS CONTROLES
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");

// CREAMOS UN PROCEDIMIENTO PARA MOSTRAR REGISTRO
function MostrarRegistro(){
    // DECLARAMOS UNA VARIABLE PARA GUARADAR DATOS
    var listaregistro=Mostrar();
    // SELECCIONE EL TBODY DE LA TABLA DONDE VOY A TRABAJAR
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // AGREGAMOS LAS COLUMNAS QUE SE REGISTREN
    for (var i=0; i<listaregistro.length;i++){
        // DECLARAMOS UNA VARIABLE QPARA LA FILA
        var fila=tbody.insertRow(i);
        // DECLARAMOS VARIABLES APRA LOS TITULOS
        var tituloNombre=fila.insertCell(0);
        var tituloApellido=fila.insertCell(1);
        var tituloCorreo=fila.insertCell(2);
        // AGREGAMOS LOS VALORES
        tituloNombre.innerHTML=listaregistro[i].nombre;
        tituloApellido.innerHTML=listaregistro[i].apellido;
        tituloCorreo.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);    
    }
}

// CREAMOS UN PROCEDIMIENTO PARA REGISTRAR LOS DATOS 
function RegistrarDatos(){
    // capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    // LLAMAMOS AL PROCEDIMIENTO REGISTRAR
    Registrar(nom,ape,cor);
    MostrarRegistro();
}

// AGREGAMOS UN EVENTO AL BOTON
// btRegistro.addEventListener("click",function(){
    // alert("Hola");
// })

// function mensaje(){
//     alert("Hola");
// }
// btRegistro.addEventListener("click",mensaje)

btRegistro.addEventListener("click",RegistrarDatos);