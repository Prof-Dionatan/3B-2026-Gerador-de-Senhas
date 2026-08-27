const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'Aqui vai aparecer a senha.'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// minusculas, numeros e simbolos

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')


// pega o 1º botão = -
botoes[0].onclick = diminuir;

// função diminuir
function diminuir(){
    // diminui de 1 em 1 e costra na tela
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
}

// BOTAO DE AUMENTAR