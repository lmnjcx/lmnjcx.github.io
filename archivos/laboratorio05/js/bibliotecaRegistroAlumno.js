var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var txtFec=document.getElementById("txtFec");
var txtDir=document.getElementById("txtDir");
var cboDistrito=document.getElementById("cboDistrito");
var txtTel=document.getElementById("txtTel");
var txtCel=document.getElementById("txtCel");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnActualizar=document.getElementById("btnActualizar");

function Buscar(codigo){
  // seleccionamos la tabla
  var db=database.ref().child("alumno");
  db.once("value").then(function(snapshot){
    snapshot.forEach(function(data){
      // declaramos una variable para el codigo de la tabla
      var key=data.key;
      // evaluamos que el key de la tabla sea igual al cogdigo buscado
      if(key==codigo){
        var cod = data.key;
        var nom = data.val().nombre;
        var ape = data.val().apellido;
        var dni = data.val().dni;
        var fec = data.val().fecha;
        var dir = data.val().direccion;
        var dis = data.val().distrito;
        var tel = data.val().telefono;
        var cel = data.val().celular;
        var cor = data.val().correo;
        var sex = data.val().sexo;
        var est = data.val().estado;
        // enviamos los datos a los controles
        txtCod.value=cod;
        txtNom.value=nom;
        txtApe.value=ape;
        txtDni.value=dni;
        txtFec.value=fec;
        txtDir.value=dir;
        txtDis.value=dis,
        txtTel.value=tel,
        txtCel.value=cel,
        txtCor.value=cor;
        for(var i=0;i<cboDistrito.options.length;i++){
          if(cboDistrito.options[i].text==dis){
            cboDistrito.options[i].selected=true;
            break;
          }
        }
        txtTel.value=tel;
        txtCel.value=cel;
        txtCor.value=cor;
        if(sex=="Masculino"){
          rbMas.checked=true
        }else if(sex=="Femenino"){
          rbFem.checked=true
        }else if(sex=="Otros"){
          rbOtr.checked=true
        }else{
          rbMas, rbFem, rbOtr=false
        }
        if(est=="Habilitado"){
          chkEst.checked=true
        }else if(est=="Deshabilitado"){
          chkEst.checked=false
        }
      }
    })
  })
}

function Mostrar() {
  //declaramos una variable para el numero de filas
  var i = 0;
  //selecciono el tbody de la tabla donde voy a guardar
  tbody = document.querySelector("#tbAlumno tbody");
  tbody.innerHTML ="";
  //se selecciona la tabla
  var db = database.ref().child("alumno");
  db.once("value", function (snapshot) {
    if (snapshot.exists()) {
      // Loop para recorrer los datos de Firebase Realtime Database
      snapshot.forEach(function (data) {
        var cod = data.key;
        var nom = data.val().nombre;
        var ape = data.val().apellido;
        var dni = data.val().dni;
        var fec = data.val().fecha;
        var dir = data.val().direccion;
        var dis = data.val().distrito;
        var tel = data.val().telefono;
        var cel = data.val().celular;
        var cor = data.val().correo;
        var sex = data.val().sexo;
        var est = data.val().estado;
        //declaramos una variable para la fila
        var fila = tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre = fila.insertCell(0);
        var tituloapellido = fila.insertCell(1);
        var titulodni = fila.insertCell(2);
        var titulofecha = fila.insertCell(3);
        var titulodireccion = fila.insertCell(4)
        var titulodistrito = fila.insertCell(5);
        var titulotelefono = fila.insertCell(6);
        var titulocelular = fila.insertCell(7);
        var titulocorreo = fila.insertCell(8);
        var titulosexo = fila.insertCell(9);
        var tituloestado = fila.insertCell(10);
        var tituloact = fila.insertCell(11);
        var titulocor = fila.insertCell(12);
        //agregamos los valores
        titulonombre.innerHTML = nom;
        tituloapellido.innerHTML = ape;
        titulodni.innerHTML = dni;
        titulofecha.innerHTML = fec;
        titulodireccion.innerHTML = dir;
        titulodistrito.innerHTML = dis;
        titulotelefono.innerHTML = tel;
        titulocelular.innerHTML = cel;
        titulocorreo.innerHTML = cor;
        titulosexo.innerHTML = sex;
        tituloestado.innerHTML = est;
        tituloact.innerHTML="<a href='#' onclick=Buscar('"+ cod+"')>Seleccionar</a>";
        titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
      
        tbody.appendChild(fila);
        i++;
      });
    }
  });
}

function MensajeError(m){
  error.style.display="block";
  error.innerHTML="<li>"+m+"</li>"
}

function Registrar(){
  // VALIDAMOS LOS CONTROLES
  error.innerHTML="";
  if(txtNom.value==""||txtNom.value==null){
    MensajeError("Ingrese nombres")
    txtNom.focus()
  }else if(txtApe.value==""||txtApe==null){
    MensajeError("Ingrese apellidos")
    txtApe.focus()
  }else if(txtDni.value==""||txtDni==null){
    MensajeError("Ingrese DNI")
    txtDni.focus()
  }else if(txtFec.value==""||txtFec.value==null){
    MensajeError("Ingrese fecha")
    txtDni.focus()
  }else if(txtDir.value==""||txtDir.value==null){
    MensajeError("Ingrese dirección")
    txtDir.focus()
  }else if(cboDistrito.value==0){
    alert("Seleccione distrito")
  }else if(txtTel.value==""||txtTel==null){
    MensajeError("Ingrese telefono")
  }else if(txtCel.value==""||txtCel.value==null){
    MensajeError("Ingrese celular")
  }else if(txtCor.value==""||txtCor.value==null){
    MensajeError("Ingrese correo electrónico")
  }else if(sex.value!="Masculino"&&sex.value!="Femenino"&&sex.value!="Otros"){
    MensajeError("Seleccione su sexo")
  }else{
    error.style.display='none'
  }
  var nom=txtNom.value;
  var ape=txtApe.value;
  var dni=txtDni.value;
  var fec=txtFec.value;
  var dir=txtDir.value;
  var dis=cboDistrito.options[cboDistrito.selectedIndex].text;
  var tel=txtTel.value;
  var cel=txtCel.value;
  var cor=txtCor.value;
  var sex="";
    if(rbMas.checked==true){
      sex="Masculino"
    }else if(rbFem==true){
      sex="Femenino"
    }else if(rbOtr==true){
      sex="Otros"
    }else{
      sex=""
    }
    var est="";
    if(chkEst.checked==true){
      est=="Habilitado"
    }else{
      est="Deshabilitado"
    }
    // llamamos a la funcion del firebase
    // SI LA TABLA NO EXISTE AUTOMATICAMENTE FIREBASE CREA UNA
    db=database.ref('registro');
    // asignamos los valores a la tabla que ha sido creada
    registros=db.push();
    // los valores se pasan a la estructura JSON
    registros.set({
        'nombre':nom,
        'apellido':ape,
        'dni':dni,
        'fecha':fec,
        'direccion':dir,
        'distrito':dis,
        'telefono':tel,
        'celular':cel,
        'correo':cor,
        'sexo':sex,
        'estado':est
    })
    alert("Se registraron los datos");
}

function CargarDistrito(){
      //declaramos una variable para el numero de filas
  var i = 0;
  //se selecciona la tabla
  var db = database.ref().child("distrito");
  db.once("value", function (snapshot) {
    if (snapshot.exists()) {
      // Loop para recorrer los datos de Firebase Realtime Database
      snapshot.forEach(function (data) {
        // capturo la información de la tabla
        var cod=data.key;
        var nom = data.val().nombre;
        //Creamos un elemento del tipo option
        var options=document.createElement("option");
        //Agregar el nombre y el codigo al option
        options.text=nom;
        options.value=cod;
        // agregamos los options al combo
        cboDistrito.add(options);
        i++;
      });
    }
  });
}

function Actualizar(){
  var nom=txtNom.value;
  var ape=txtApe.value;
  var dni=txtDni.value;
  var fec=txtFec.value;
  var dir=txtDir.value;
  var dis=cboDistrito.options[cboDistrito.selectedIndex].text;
  var tel=txtTel.value;
  var cel=txtCel.value;
  var cor=txtCor.value;
  var sex="";
  if(rbMas.checked==true){
    sex="Masculino"
  }else if(rbFem==true){
    sex="Femenino"
  }else if(rbOtr==true){
    sex="Otros"
  }else{
    sex=""
  }
  var est="";
  if(chkEst.checked==true){
    est=="Habilitado"
  }else{
    est="Deshabilitado"
  }
  // seleccionamos la tabla que vamos a actualizar con su codigo correspondiente
  var db=database.ref("alumno/"+cod);
  // le pasamos los datos que vamos a actualizar
  db.update({
    'nombre':nom,
    'apellido':ape,
    'dni':dni,
    'fecha':fec,
    'direccion':dir,
    'distrito':dis,
    'telefono':tel,
    'celular':cel,
    'correo':cor,
    'sexo':sex,
    'estado':est
  })
  alert("Se actualizó la información");
  Mostrar()
}

function Eliminar(codigo){
  // preguntamos si se quiere eliminar
  var result=confirm("¿Estás seguro que quieres eliminar el registro?");
  // evaluamos la respuesta
  if(result){
    // pasamos el codigo al registro que se va a eliminar
    var cod=codigo;
    // seleccionamos la tabla con el codigo correspondiente para eliminarlo
    var db=database.ref("alumno/"+cod).remove();
    alert("Se eliminó el dato");
    Mostrar();
  }
}

function Inicio(){
  Mostrar();
  CargarDistrito()
}


window.onload=Inicio();

btnRegistrar.addEventListener("click", Registrar)