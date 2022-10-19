function digitar(tecla) {
    let digito = document.getElementById('tela').innerHTML;
    if (parseInt(digito) === 0){
        document.getElementById('tela').innerHTML = tecla;
    }
    else {
        document.getElementById('tela').innerHTML = digito + tecla;
    }
};

function limpar(){
    document.getElementById('tela').innerHTML = '0';
};

function deletar(){
    let string = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = string.slice(0, -1);
};

function calcular(){
    let conta = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = eval(conta);
};