let botao = document.getElementById('modos');

botao.addEventListener('click', () => {
  document.body.classList.toggle('modoclaro');
});

let enviar =document.getElementById('enviar')

enviar.addEventListener('click',() => {
  enviar.style.backgroundColor = '#ffffff';
})