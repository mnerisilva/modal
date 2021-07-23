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



/************* DEMONSTRAÇÃO DE COMO CRIAR UM ELEMENTO DINAMICAMENTE
const body = document.querySelector('body');
const elementoDiv = document.createElement('div');

let texto = '<p><strong>JavaScript</strong> (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.</p>';
body.appendChild(elementoDiv);
elementoDiv.innerHTML = texto;

elementoDiv.classList.add('modal-2');
*/