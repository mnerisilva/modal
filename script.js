const modal = document.querySelector('.modal');
const mask = document.querySelector('.mask');
const botao = document.querySelector('#botao');

botao.addEventListener('click', function(e){
    //alert('clicou no botao');
    setTimeout(() => {        
        mask.classList.add('show');
        modal.style.transform = 'translate(17px, 10px)';
    }, 100);
    mask.classList.add('down');
});

mask.addEventListener('click', function(e){
    setTimeout(() => { 
        mask.classList.remove('down');
    }, 500);       
    mask.classList.remove('show');
});