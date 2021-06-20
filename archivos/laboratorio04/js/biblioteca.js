// DECLARAMOS VARIABLES PARA LOS CONTROLES
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtApe");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");

function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+m+'</li>';
}

// CREAMOS PROCEDIMIENTO PARA VALIDAR
// function ValidarNombre(){
//     if(txtNom.value==""||txtNom.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor, ingrese sus nombres</li>';
//         txtNom.focus();
//     }else{
//         error.style.display='none';
//     }
// }

// function ValidarApellido(){
//     if(txtApe.value==""||txtApe.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor, ingrese sus apellidos</li>';
//         txtApe.focus();
//     }else{
//         error.style.display='none';
//     }
// }

// function ValidarCorreo(){
//     if(txtCor.value==""||txtCor.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor, ingrese su correo electrónico</li>';
//         txtCor.focus();
//     }else{
//         error.style.display='none';
//     }
// }

// function ValidarSexo(){
//     if(sexo.value==""||sexo.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor, seleccione su sexo</li>'
//         sexo.focus();
//     }else{
//         error.style.display='none'
//     }
// }

// function ValidarEstado(){
//     if(chkEst.checked==false){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor, seleccione el estado</li>';
//     }else{
//         error.style.display='none';
//     }
// }
//  PROCEDIMIENTO PARA VALIDAR
function Validar(){
    // reiniciamos el valor para que cargue sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value==""||txtNom.value==null){
        LlamarClase("Por favor, ingrese sus nombres");
        LlamarClase("Por favor, ingrese sus apellidos");
        LlamarClase("Por favor, ingrese correctamente su correo electrónico");
        LlamarClase("Por favor, seleccione su sexo");
        LlamarClase("Por favor, seleccione su estado");
        txtNom.focus();
    }else if(txtApe.value==""||txtApe.value==null){
        LlamarClase("Por favor, ingrese sus apellidos");
        LlamarClase("Por favor, ingrese correctamente su correo electrónico");
        LlamarClase("Por favor, seleccione su sexo");
        LlamarClase("Por favor, seleccione su estado");
        txtApe.focus();
    }else if(txtCor.value==""||txtCor.value==null){
        LlamarClase("Por favor, ingrese correctamente su correo electrónico");
        LlamarClase("Por favor, seleccione su sexo");
        LlamarClase("Por favor, seleccione su estado");
        txtCor.focus();
    }else if(rbMas.checked==false&&rbFem.checked==false&&rbOtr.checked==false){
        LlamarClase("Por favor, seleccione su sexo");
        LlamarClase("Por favor, seleccione su estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor, seleccione su estado");
        chkEst.focus();
    }else{
        error.style.display='none'
    }
    // llamando a las validaciones
    ValidarNombre();
    ValidarApellido();
    ValidarCorreo();
    ValidarSexo(); 
    ValidarEstado();
}