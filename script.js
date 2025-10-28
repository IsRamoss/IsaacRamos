
function modoclaro() {
  document.body.classList.toggle('modoclaro');
}


function abrirLunarie() {
  let modalLun = document.getElementById("modalLunarie");
  modalLun.showModal();

}

function fecharLunarie(){
  let modalLun = document.getElementById("modalLunarie");
  modalLun.close();
}

function abrirTulen() {
  let modalTul = document.getElementById("modalTulen");
  modalTul.showModal();

}

function fecharTulen(){
  let modalTul = document.getElementById("modalTulen");
  modalTul.close();
}