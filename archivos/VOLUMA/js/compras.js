var txtUni=document.getElementById("txtUni");
var txtPrc=document.getElementById("txtPrc");
var chkRap=document.getElementById("chkRap");
var cboCan=document.getElementById("cboCan");
var btnPrc=document.getElementById("btnPrc")
var btnComprar=document.getElementById("btnComprar");

function calcFinal(uni, can, env){
    return (uni*can)+env;
}

function precioFinal(){

    var unidad=0, rapido=0, cantidad=0, pf=0;

    unidad=txtUni.value;
    cantidad=cboCan.value;

    if (chkRap.checked==true){
        rapido=10;
    }else{
        rapido=0;
    }
    pf = calcFinal(unidad, cantidad, rapido);
    txtPrc.value=pf;
}

btnPrc.addEventListener("click", precioFinal)


function pagoCompra(){
    if(txtPrc.value<1){
        alert("Evalúa")
    }else{
        window.onload=cargar("venta.html","Ventana Emergente", 400,600)
    }
}

function cargar(url,titulo,ancho,alto){
    var anc=screen.width;
    var alt=screen.height;
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+", top="+y+"scrollbars=NO")
}

btnComprar.addEventListener("click",pagoCompra)