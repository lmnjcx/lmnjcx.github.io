v  ar txtCor=document.getElementById("txtCor"),
txtCon=document.getElementById("txtCon"),
btnIngresar=document.getElementById("btnIngresar");

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

function Ingresar(){
    if(txtCor==""||txtCor==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if(txtCon==""||txtCon==null){
        alert("Ingrese su contraseña");
        txtCon.focus();
    }else{
        cor=txtCor.value
        con=txtCon.value
        // llamando a FIREBASE para registrar
        firebase.auth().createUserWithEmailAndPassword(cor, con)
        .then((userCredential) => {
        alert("Bienvenidos al Sistema");
        window.location="pagina11.html";
        })
        .catch((error) => {
        alert("Usuario o clave no valida");
        Limpiar();
        });
    }
}

btnIngresar.addEventListener("click",Ingresar)