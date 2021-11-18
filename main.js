let boton = document.getElementById('btnNivel2');
let modal = document.getElementById('modalInfo');
let cierre = document.getElementById('cierreModal');


boton.onclick = function(){
    modal.style.display = 'block';
};

cierre.onclick = function(){
    modal.style.display ='none';
};
