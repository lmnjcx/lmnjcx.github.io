//declarando variabls para los controles

var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");


//creamos una funcion par validar nombre
function LlamarClase(m){
    error.style.display='block';
    error.innerHMTL+='<li>'+m+'</li>';

}
function ValidarNombre(){
if(txtNom.value=="" || txtNom.value==null){
    error.style.display='block';
    error.innerHTML+='<li>Por favor ingrese su Nombres</li>';
}else{
    error.style.display='none';
}
}

function ValidarApellido(){
if(txtApe.value=="" || txtApe.value==null){
    error.style.display='block';
    error.innerHTML+='<li>Por favor ingrese sus Apellidos</li>';
}else{
    error.style.display='none';
}
}

function ValidarCorreo(){
if(txtCor.value=="" || txtCor.value==null){
    error.style.display='block';
    error.innerHTML+='<li>Por favor ingrese sus Correo</li>';
}else{
    error.style.display='none';
}
}

function ValidarConsulta(){
    if(txtCon.value=="" || txtCon.value==null){
        error.style.display='block';
        error.innerHTML+='<li>Escriba su consulta</li>';
    }else{
        error.style.display='none';
    }
    }




//creamos un procedimiento para validar
function Validar(){
error.innerHTML='';
//declarando variables para los controles
//llamamos a la validaciones
ValidarNombre();
ValidarApellido();
ValidarCorreo();
ValidarConsulta();

}
