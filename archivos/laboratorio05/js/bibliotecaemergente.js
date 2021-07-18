function Cargar(url, titulo,  ancho, alto){
    alert("Hola")
    // declaramos variables para capturar el ancho y el alto de las pantalla
    var anc=screen.width;
    var alt=screen.height;
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+", top="+y+"scrollbars=NO")
}

window.onload=Cargar("pagina4.html","Ventana Emergente",400,400)