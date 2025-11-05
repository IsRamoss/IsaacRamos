let bot = document.getElementById("check")

function TrocaModo(){
  if(bot.checked){
    document.body.classList.add("modoclaro")
    localStorage.setItem("modo", "claro")
  }
  else { 
    document.body.classList.remove("modoclaro")
    localStorage.setItem("modo", "escuro")
  }
}


addEventListener("DOMContentLoaded", ()=>{
  let Modo = localStorage.getItem("modo")
  if(Modo==="claro"){
    bot.checked = true
  }
  else {
    bot.checked = false
  }
  TrocaModo()
})


function abrirLunarie() {
  let modalLun = document.getElementById("modalLunarie");
  modalLun.showModal();

}

function fecharLunarie() {
  let modalLun = document.getElementById("modalLunarie");
  modalLun.close();
}

function abrirTulen() {
  let modalTul = document.getElementById("modalTulen");
  modalTul.showModal();

}


function fecharTulen() {
  let modalTul = document.getElementById("modalTulen");
  modalTul.close();
}

function abrirBitmap() {
  let modalTul = document.getElementById("modalBitmap");
  modalTul.showModal();

}

function fecharBitmap() {
  let modalTul = document.getElementById("modalBitmap");
  modalTul.close();
}
function abrirBelara() {
  let modalTul = document.getElementById("modalBelara");
  modalTul.showModal();

}

function fecharBelara() {
  let modalTul = document.getElementById("modalBelara");
  modalTul.close();
}
function abrirMenu(){
  document.getElementById("menu").style.left = '0px';
  document.getElementById("modos").style.left = '50%';
}
function FecharMenu(){
  document.getElementById("menu").style.left = '999px';
  document.getElementById("modos").style.left = '999px';
}

let form = document.getElementById("formulario");
const modal = document.getElementById("modalForms");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.showModal();
});
function fecharModalForms(){
  modal.close();
  form.reset();
}
modal.addEventListener("close", () => {
  form.reset();
});