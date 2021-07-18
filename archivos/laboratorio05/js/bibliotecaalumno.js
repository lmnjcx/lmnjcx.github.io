var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDNI");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");
var rbTurno="";
var chkSt=""

function MostrarRegistro(){
    var nuevoListado=Mostrar();
    tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    for(var i=0;i<nuevoListado.length;i++){
        var fila=tbody.insertRow(i);
        var tituloNombre=fila.insertCell(0);
        var tituloApellido=fila.insertCell(1);
        var tituloDni=fila.insertCell(2);
        var tituloCurso=fila.insertCell(3);
        var tituloTurno=fila.insertCell(4);
        var tituloEstado=fila.insertCell(5);
        tituloNombre.innerHTML=nuevoListado[i].nombre;
        tituloApellido.innerHTML=nuevoListado[i].apellido;
        tituloDni.innerHTML=nuevoListado[i].dni;
        tituloCurso.innerHTML=nuevoListado[i].curso;
        tituloTurno.innerHTML=nuevoListado[i].turno;
        tituloEstado.innerHTML=nuevoListado[i].estado;
        tbody.appendChild(fila);
    }
}

function MensajeError(m){
    error.style.display='block';
    error.innerHTML="<li>"+m+"</li>";
}

function Limpiar(){
    txtNom="";
    txtxApe=""
}

function Validar(){
    error.innerHTML="";
    if(txtNom.value==""||txtNom.value==null){
        MensajeError("Ingrese un nombre")
    }else if(txtApe.value==""||txtApe.value==null){
        MensajeError("Ingrese un apellido")
    }else if(txtDni.value==""||txtDni.value==null){
        MensajeError("Ingrese un número de DNI")
    }else if(cboCurso.value==0){
        MensajeError("Seleccione un curso")
    }else if(rbM.checked==false&&rbT.checked==false&&rbN.checked==false){
        MensajeError("Seleccione un turno")
    }else{
        error.style.display='none';
        if(rbM.checked==true){
            rbTurno="Mañana"
        }else if (rbT.checked==true){
            rbTurno="Tarde"
        }else if(rbN.checked==true){
            rbTurno="Noche"
        }
        if(chkEst.checked==false){
            chkSt="Deshabilitado"
        }else{
            chkSt="Habilitado"
        }
    }
}

function RegistrarDatos(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur=cboCurso.value;
    // var tur=rbTurno.value;
    // var est=chkSt.value;
    
    Validar();
    Registrar(nom,ape,dni,cur,rbTurno,chkEst);
    MostrarRegistro()
}

btnRegistrar.addEventListener("click",RegistrarDatos, Limpiar);