var txtPro=document.getElementById("txtNom"), 
txtPre=document.getElementById("txtPre"), 
cboCat=document.getElementById("cboCategoria"),
txtCan=document.getElementById("txtCan");

function MostrarRegistro(){
    var nuevoListado=Mostrar();
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    for(var i=0; i<nuevoListado.length; i++){
        var fila=tbody.insertRow(i);
        var titleProducto=fila.insertCell(0);
        var titlePrecio=fila.insertCell(1);
        var titleCategoria=fila.insertCell(2);
        var titleCantidad=fila.insertCell(3);
        titleProducto.innerHTML=nuevoListado[i].producto;
        titlePrecio.innerHTML=nuevoListado[i].precio;
        titleCategoria.innerHTML=nuevoListado[i].categoria;
        titleCantidad.innerHTML=nuevoListado[i].cantidad;
        tbody.appendChild(fila);
    }
}

function MensajeError(m){
    error.style.display="block";
    error.innerHTML+='<li>'+m+'</li>';
}

var index=cboCat.selectedIndex;
switch(index){
    case 1:
        cat="Seleccione una categoría";
        break;
    case 2:
        cat="Entretenimiento";
        break;
    case 3:
        cat="Tecnología";
        break;
    case 4:
        cat="Linea Blanca";
        break;
}

function Validar(){
    error.innerHTML=''
    if(txtPro.value==""||txtPro.value==null){
        MensajeError("Ingresa el nombre del producto");
        txtPro.focus();
    }else if(txtPre.value==""||txtPre.value==null){
        MensajeError("Ingresa el precio del producto");
        txtPre.focus();
    }else if(cboCat.selectedIndex==0){
        MensajeError("Selecciona una categoría");
        cboCat.focus();
    }else if(txtCan.value==""||txtCan.value==null){
        MensajeError("Ingresa una cantidad");
        txtCan.focus();
    }else{
        error.style.display=='none'
    }
}

function RegistroDatos(){
    var pro=txtPro.value;
    var pre=txtPre.value;
    var cat=cboCat.selectedIndex; 
    var can=txtCan.value;
    Validar();
    Registrar(pro,pre,cat,can);
    MostrarRegistro();
}

btnRegistrar.addEventListener("click",RegistroDatos)