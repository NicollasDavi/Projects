function insert(valor) {
    document.querySelector('.resultado').innerHTML += valor;
}

function cleam() {
    document.querySelector('.resultado').innerHTML = ' ';
}

function backspace() {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}

function confirm() {
    const resultado = document.querySelector('.resultado').innerHTML;
    if (resultado != 'Erro') {
        document.querySelector('.resultado').innerHTML = eval(resultado);
    }
}


function theme1() {
    document.querySelector('#tela').style.backgroundColor = 'hsl(224, 36%, 15%)'
    document.querySelector('body').style.backgroundColor = 'hsl(222, 26%, 31%)';
    document.querySelector('#cabecalho').style.color = 'aliceblue';
    document.querySelector('#tela').style.backgroundColor = 'hsl(224, 36%, 15%)';
    document.querySelector('#bottons-container').style.backgroundColor = 'hsl(223, 31%, 20%)';

    const buttons = document.querySelectorAll('.botton');
    buttons.forEach(button => {
        button.style.backgroundColor = 'hsl(45, 7%, 89%)';
        button.style.color = 'hsl(221, 14%, 31%)';
        button.style.boxShadow = 'inset 0 -6px 0 hsl(35, 11%, 61%)';
    });

    document.querySelector('#key-reset').style.backgroundColor = 'hsl(225, 21%, 49%)';
    document.querySelector('#key-reset').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-reset').style.boxShadow = 'inset 0 -6px 0 hsl(224, 28%, 35%)';
    document.querySelector('#key-equal').style.boxShadow = 'inset 0 -6px 0 hsl(6, 70%, 34%)';
    document.querySelector('#key-equal').style.backgroundColor = 'hsl(6, 63%, 50%)';
    document.querySelector('#key-equal').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-del').style.backgroundColor = 'hsl(225, 21%, 49%)';
    document.querySelector('#key-del').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-del').style.boxShadow = 'inset 0 -6px 0  hsl(224, 28%, 35%)';

    document.querySelector('#text-theme').style.color = 'aliceblue';

    document.querySelector('.resultado').style.color = 'white';
}

function theme2() {
    document.querySelector('#tela').style.backgroundColor = ' hsl(0, 0%, 93%)'
    document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 90%)';
    document.querySelector('#cabecalho').style.color = 'hsl(60, 10%, 19%)';

    const buttons = document.querySelectorAll('.botton');
    buttons.forEach(button => {
        button.style.backgroundColor = 'hsl(45, 15%, 89%)';
        button.style.color = 'hsl(221, 14%, 31%)';
        button.style.boxShadow = 'inset 0 -6px 0 hsl(35, 11%, 61%)';
    });

    document.querySelector('#bottons-container').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.querySelector('#key-reset').style.backgroundColor = 'hsl(185, 42%, 37%)';
    document.querySelector('#key-reset').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-reset').style.boxShadow = 'inset 0 -6px 0 hsl(185, 58%, 25%)';
    document.querySelector('#key-equal').style.backgroundColor = 'hsl(25, 98%, 40%)';
    document.querySelector('#key-equal').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-equal').style.boxShadow = 'inset 0 -6px 0 hsl(25, 99%, 27%)';
    document.querySelector('#key-del').style.backgroundColor = 'hsl(185, 42%, 37%)';
    document.querySelector('#key-del').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-del').style.boxShadow = 'inset 0 -6px 0 hsl(185, 58%, 25%)';

    document.querySelector('#text-theme').style.color = 'hsl(60, 10%, 19%)';

    document.querySelector('.resultado').style.color = 'hsl(60, 10%, 19%)';
}

function theme3() {
    document.querySelector('#tela').style.backgroundColor = 'hsl(268, 71%, 12%)'
    document.querySelector('body').style.backgroundColor = 'hsl(268, 75%, 9%)';
    document.querySelector('#cabecalho').style.color = 'hsl(52, 100%, 62%)';

    const buttons = document.querySelectorAll('.botton');
    buttons.forEach(button => {
        button.style.backgroundColor = 'hsl(268, 47%, 21%)';
        button.style.color = 'hsl(52, 100%, 62%)';
        button.style.boxShadow = 'inset 0 -6px 0 hsl(290, 70%, 36%)';
    });

    document.querySelector('#bottons-container').style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.querySelector('#key-reset').style.backgroundColor = 'hsl(281, 89%, 26%)';
    document.querySelector('#key-reset').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-reset').style.boxShadow = 'inset 0 -6px 0 hsl(285, 91%, 52%)';
    document.querySelector('#key-equal').style.backgroundColor = 'hsl(176, 100%, 44%)';
    document.querySelector('#key-equal').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#key-equal').style.boxShadow = 'inset 0 -6px 0 hsl(177, 92%, 70%)';
    document.querySelector('#key-del').style.boxShadow = 'inset 0 -6px 0 hsl(285, 91%, 52%)';
    document.querySelector('#key-del').style.backgroundColor = 'hsl(281, 89%, 26%)';
    document.querySelector('#key-del').style.color = 'hsl(0, 0%, 100%)';

    document.querySelector('#text-theme').style.color = 'hsl(52, 100%, 62%)';

    document.querySelector('.resultado').style.color = 'hsl(52, 100%, 62%)';
}
