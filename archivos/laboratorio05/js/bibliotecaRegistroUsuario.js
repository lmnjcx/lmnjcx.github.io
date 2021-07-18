var txtCor=document.getElementById("txtCor"),
txtCon=document.getElementById("txtCon"),
btnRegistrar=document.getElementById("btnRegistrar");

// CREAMOS UN PROCEDIMIENTO PARA LIMPIAR
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

// CREAMOS UN PROCEDIMIENTO PARA REGISTRAR
function Registrar(){
    if(txtCor.value==""||txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value==""||txtCon.value==null){
        alert("Ingresa la contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value, con=txtCon.value;
        // llamando a FIREBASE para registrar
        firebase.auth().createUserWithEmailAndPassword(cor, con)
    .then((userCredential) => {
    alert("Se registró el usuario");
    Limpiar();
    })
    .catch((error) => {
    alert("No se registró el usuario");
    Limpiar();
    });
    }
}

// ASIGNAMOS EL PROCEDIMIENTO DEL BOTON
btnRegistrar.addEventListener("click",Registrar);