var txtNom=document.getElementById("txtNom")
var txtApe=document.getElementById("txtApe")
var rbM=document.getElementById("rbM")
var rbF=document.getElementById("rbF")
var rbO=document.getElementById("rbO")
var txtNum=document.getElementById("txtNum")
var txtCor=document.getElementById("txtCor")
var txtCon=document.getElementById("txtCon")
var chkTer=document.getElementById("chkTer")
var chkEst=document.getElementById("chkEst")
var btnRegistro=document.getElementById("btnRegistro")
var btnLimpiar=document.getElementById("btnLimpiar")

function Limpiar(){
    txtApe.value=""
    txtNom.value=""
    // sex.value="" 
    txtNum.value=""
    txtCor.value=""
    txtCon.value=""
    // ter.value="" 
    // est.value=""
}

function Registro(){

    if(txtNom.value==""||txtNom.value==null){
        alert("Ingrese nombre")
    }else if(txtApe.value==""||txtApe.value==null){
        alert("Ingrese apellidos")
    }else if(rbM.checked==false&&rbF.checked==false&&rbO.checked==false){
        alert("Seleccione un sexo")
    }else if(txtNum.value==""||txtNum.value==null){
        alert("Ingrese su número")
    }else if(txtCor.value==""||txtCor.value==null){
        alert("Ingrese un correo electrónico")
    }else if(txtCon.value==""||txtCon.value==null){
        alert("Ingrese una contraseña")
    }else if(chkTer.checked==false){
        alert("Debes estar de acuerdo de acuerdo con los términos y condiciones")
    }else{
        if(rbM.checked==true){
            sex="Masculino"
        }else if(rbF.checked==true){
            sex="Femenino"
        }else if(rbO.checked==true){
            sex="Otros"
        }
        if(chkTer.checked==true){
            ter="De acuerdo"
        }
        if(chkEst.checked==true){
            est="Quiero recibir notificaciones"
        }else{
            est="No quiero recibir notificaciones"
        }
    
        nom=txtNom.value
        ape=txtApe.value
        num=txtNum.value
        cor=txtCor.value
        con=txtCon.value
        firebase.auth().createUserWithEmailAndPassword(cor, con)
        .then((userCredential) => {
        alert("Se registró el usuario");
        Limpiar();
        })
        .catch((error) => {
        alert("No se registró el usuario");
        Limpiar();
        });
    
        db=database.ref('registroClientes');
        registros=db.push();
        registros.set({
            'nombre':nom,
            'apellido':ape,
            'sexo':sex,
            'numero':txtNum,
            'correo':txtCor,
            'contraseña':txtCon,
            'estado':est
        })
        alert("Se registraron los datos")
    }
}


btnRegistro.addEventListener("click",Registro)