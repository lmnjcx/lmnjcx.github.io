const abrirModal=document.querySelectorAll("[data-open]");
const cerrarModal=document.querySelectorAll("[data-close]");
const ventanaModal=document.getElementById("modal");
const parrafoCabecera=document.getElementById("parrafoCabecera");
const imagenModal=document.getElementById("imagenModal");
const parrafoPie=document.getElementById("parrafoPie");
var i=1;
const isVisible="is-visible";

for(i=0; i<abrirModal.length;i++){
    abrirModal[i].addEventListener("click", function(){
        var modalId=this.dataset.open;
        switch(modalId){
        case "modal1":
            ventanaModal.classList.add(isVisible);
            parrafoCabecera.innerHTML="Imagen 1";
            imagenModal.setAttribute("src","img/JapaneseHouse_GoodAtFalling.jpg");
            imagenModal.setAttribute("alt","tjp");
            parrafoPie.innerHTML="Imagen 1"
            break;
        case "modal2":
            ventanaModal.classList.add(isVisible);
            parrafoCabecera.innerHTML="Imagen 2";
            imagenModal.setAttribute("src","img/nirvana.jpg");
            imagenModal.setAttribute("alt","tjp");
            parrafoPie.innerHTML="Imagen 2"
            break;
        case "modal3":
            ventanaModal.classList.add(isVisible);
            parrafoCabecera.innerHTML="Imagen 3";
            imagenModal.setAttribute("src","img/bring-me-the-horizon-post-human.jpg");
            imagenModal.setAttribute("alt","tjp");
            parrafoPie.innerHTML="Imagen 3"
            break;
        case "modal4":
            ventanaModal.classList.add(isVisible);
            parrafoCabecera.innerHTML="Imagen 4";
            imagenModal.setAttribute("src","img/the weekend.jpg");
            imagenModal.setAttribute("alt","tjp");
            parrafoPie.innerHTML="Imagen 4"
            break;
            default:
            break;
        }
    })
}

for(const modal of cerrarModal){
    modal.addEventListener("click",function(){
        this.parentElement.parentElement.parentElement.classList.remove(isVisible)
    })
}

document.addEventListener("click",(e)=>{
    if(e.target==document.querySelector(".modal .is-visible")){
        document.querySelector(".modal is-visible").classList.remove(isVisible)
    }
})