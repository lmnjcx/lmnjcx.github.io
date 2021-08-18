function Eliminar(codigo){
    //preguntamos si se quiere eliminar
    var result=confirm("¿Estas seguro que quieres eliminar el registro?");
    //evaluamos la respuesta
    if(result){
        //pasamos el codigo al registro que se va eliminar
        var cod = codigo;
        //seleccionamos la tabla con el codigo correspondiente para eliminarla
        var db=database.ref("registro2/"+cod).remove();
        alert("Se elemino el dato");
    //llamamos a la funcion limpiar
    Limpiar();
    //llamamos a la funcion mostrar
    Mostrar();    
    }
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
                    var con=data.val().correo;
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

//creamos un procedimiento para mostrar
function Mostrar() {
    //declaramos una variable para el numero de filas
    var i = 0;
    //selecciono el tbody de la tabla donde voy a guardar
    tbody = document.querySelector("#tbregistro2 tbody");
    tbody.innerHTML = "";
    //se selecciona la tabla
    var db = database.ref().child("registro2");
    db.once("value", function (snapshot) {
        if (snapshot.exists()) {
        // Loop para recorrer los datos de Firebase Realtime Database
        snapshot.forEach(function (data) {
        var cod = data.key;
        var nom = data.val().nombre;
        var ape = data.val().apellido;
        var cor = data.val().correo;
        var con = data.val().consulta;
        //declaramos una variable para la fila
        var fila = tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre = fila.insertCell(0);
        var tituloapellido = fila.insertCell(1);
        var titulocorreo = fila.insertCell(2);
        var tituloconsulta = fila.insertCell(3);
        var titulocor = fila.insertCell(4);
    

          //agregamos los valores
        titulonombre.innerHTML = nom;
        tituloapellido.innerHTML = ape;
        titulocorreo.innerHTML = cor;
        tituloconsulta.innerHTML = con;
        titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
    

        tbody.appendChild(fila);
        i++;
        });
}
    });
}
//llamamos a la funcion mostrar cuando cargue la pagina
window.onload = Mostrar;