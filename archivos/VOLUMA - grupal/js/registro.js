//variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
function writeUserData(nm,ap,cr,con){
    firebase.database().ref('registro2/').set({
        nombre: nm,
        apellido: ap,
        correo: cr,
        consulta:con
    })
}


function Buscar(codigo) {
//seleccionamos la tabla
    var db = database.ref().child("registro2");
    db.once("value").then(function(snapshot){
        snapshot.forEach(function(data){
//declaramos una varialbe para el codigo de la tabla
            var key=data.key;
//evaluamos que el key de la tabla sea igual al codigo buscado
            if(key==codigo){
                var cod=key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;
                var con=data.val().conulta;
            //enviamos los datos a los controles
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
                txtCon.value = con;
            }
        });
    });
}





//crear un procedimiento para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtCon.value ="";
    txtNom.focus();
}




//creamos un procedimiento para registrar
function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese el nombre");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingrese el apellido");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su consulta");
        txtCor.focus();
    }else{
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        var con=txtCon.value;

        var db = database.ref('registro2');
        var registros = db.push();
        registros.set({
            'nombre':nom,
            'apellido':ape,
            'correo':cor,
            'consulta':con

        });
        alert("Se registro los datos");
        Limpiar();
        Mostrar();
        
    }
}





btnRegistrar.addEventListener("click",Registrar);