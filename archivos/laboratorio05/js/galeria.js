const abrirModal=document.querySelectorAll("[data-open]");
const cerrarModal=document.querySelectorAll("[data-close]");
const isVisible="is-visible";

for(const modal of abrirModal){
    modal.addEventListener("click",function(){
        var modalId=this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible)
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