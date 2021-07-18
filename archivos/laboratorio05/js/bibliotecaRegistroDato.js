var txtNom=document.getElementById("txtNom"),
txtApe=document.getElementById("txtApe"),
txtCor=document.getElementById("txtCor"),
btnRegistrar=document.getElementById("btnRegistrar");
btnActualizar=document.getElementById("btnActualizar");
var cod=document.getElementById("txtCod")


function Buscar(codigo){
  // seleccionamos la tabla
  var db=database.ref().child("registro");
  db.once("value").then(function(snapshot){
    snapshot.forEach(function(data){
      // declaramos una variable para el codigo de la tabla
      var key=data.key;
      // evaluamos que el key de la tabla sea igual al cogdigo buscado
      if(key==codigo){
        var cod=key;
        var nom=data.val().nombre;
        var ape=data.val().apellido;
        var cor=data.val().correo;
        // enviamos los datos a los controles
        txtCod.value=cod;
        txtNom.value=nom;
        txtApe.value=ape;
        txtCor.value=cor;
      }
    })
  })
}

function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

//creamos un procedimiento para mostrar
function Mostrar() {
  //declaramos una variable para el numero de filas
  var i = 0;
  //selecciono el tbody de la tabla donde voy a guardar
  tbody = document.querySelector("#tbRegistro tbody");
  tbody.innerHTML = "";
  //se selecciona la tabla
  var db = database.ref().child("registro");
  db.once("value", function (snapshot) {
    if (snapshot.exists()) {
      // Loop para recorrer los datos de Firebase Realtime Database
      snapshot.forEach(function (data) {
        var cod = data.key;
        var nom = data.val().nombre;
        var ape = data.val().apellido;
        var cor = data.val().correo;
        //declaramos una variable para la fila
        var fila = tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre = fila.insertCell(0);
        var tituloapellido = fila.insertCell(1);
        var titulocorreo = fila.insertCell(2);
        var tituloact = fila.insertCell(3);
        var titulocor = fila.insertCell(4);
        //agregamos los valores
        titulonombre.innerHTML = nom;
        tituloapellido.innerHTML = ape;
        titulocorreo.innerHTML = cor;
        tituloact.innerHTML="<a href='#' onclick=Buscar('"+ cod+"')>Seleccionar</a>";
        titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
      
        tbody.appendChild(fila);
        i++;
      });
    }
  });
}

// llamamos a la funcion mostrar cuando cargue la pagina
window.onload=Mostrar;

function Registrar(){
    if(txtNom.value==""||txtNom.value==null){
        alert("Ingrese el nombre");
        txtNom.focus();
    }else if(txtApe.value==""||txtApe.value==null){
        alert("Ingrese el apellido");
        txtApe.focus();
    }else if(txtCor.value==""||txtCor.value==null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else{
        var nom=txtNom.value,
        ape=txtApe.value,
        cor=txtCor.value,
        // llamamos a la funcion del firebase
        // SI LA TABLA NO EXISTE AUTOMATICAMENTE FIREBASE CREA UNA
        db=database.ref('registro');
        // asignamos los valores a la tabla que ha sido creada
        registros=db.push();
        // los valores se pasan a la estructura JSON
        registros.set({
            'nombre':nom,
            'apellido':ape,
            'correo':cor,
        })
        alert("Se registraron los datos");
        Limpiar();
        Mostrar();
    }
}

function Actualizar(){
  var cod=txtCod.value;
  var nom=txtNom.value;
  var ape=txtApe.value;
  var cor=txtCor.value;
  // seleccionamos la tabla que vamos a actualizar con su codigo correspondiente
  var db=database.ref("registro/"+cod);
  // le pasamos los datos que vamos a actualizar
  db.update({
    nombre:nom,
    apellido:ape,
    correo:cor,
  })
  alert("Se actualizó la información");
  Limpiar()
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
    var db=database.ref("registro/"+cod).remove();
    alert("Se eliminó el dato");
    Limpiar();
    Mostrar();
  }
}

btnRegistrar.addEventListener("click",Registrar)
btnActualizar.addEventListener("click",Actualizar)
