
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");

function MostrarRegistro(){
    var nuevoListado=Mostrar();
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    for(var i=0; i<nuevoListado.length; i++){
        let fila=tbody.insertRow(i);
        let titleNombre=fila.insertCell(0);
        let titleApellido=fila.insertCell(1);
        let titleCorreo=fila.insertCell(2);
        titleNombre.innerHTML=nuevoListado[i].nombre;
        titleApellido.innerHTML=nuevoListado[i].apellido;
        titleCorreo.innerHTML=nuevoListado[i].correo;
        tbody.appendChild(fila);
    }
}

function MensajeError(m){
    error.style.display="block";
    error.innerHTML+='<li>'+m+'</li>';
}

function Validar(){
    error.innerHTML=''
    if(txtNom.value==""||txtNom.value==null){
        MensajeError("Ingrese un nombre");
        MensajeError("Ingrese un apellido");
        MensajeError("Ingresa un correo válido");
        txtNom.focus();
    }else if(txtApe.value==""||txtApe.value==null){
        MensajeError("Ingrese un apellido");
        MensajeError("Ingresa un correo válido");   
        txtApe.focus();
    }else if(txtCor.value==""||txtCor.value==null){
        MensajeError("Ingresa un correo válido");
        txtCor.focus();
    }else{
        error.style.display='none';
    }
}

function RegistroDatos(){
    let nom=txtNom.value;
    let ape=txtApe.value;
    let cor=txtCor.value;
    Validar();
    Registrar(nom,ape,cor);
    MostrarRegistro();
}

btRegistro.addEventListener("click",RegistroDatos)