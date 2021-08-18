//declarando variables
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");

//creamos un procedimiento para ingresar
function Ingresar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña")
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
    auth.signInWithEmailAndPassword(cor,con)
    .then((userCredential) =>{
        alert("Bienvenido al Sistema");

        window.location="mensajecontacto.html";
    })
    .catch((error) => {
        alert("Usuario o clave no valida");

    })
    }
}

//llamamos al procedimiento para ingresar 
btnIngresar.addEventListener("click",Ingresar);