
function modoclaro(){
  document.body.classList.toggle('modoclaro');
}

let enviar = document.getElementById('enviar');

enviar.addEventListener('click', (event) => {

  enviar.style.backgroundColor = '#ffffff';
});

function abrirLunarie(){
  let modalLun = document.getElementById("modalLunarie");
  modalLun.showModal();
}