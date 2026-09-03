const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'Aqui vai aparecer a senha.'
// OPEN IN WEBVIEW 
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
    geraSenha()
}

// BOTAO DE AUMENTAR


// fUNÇÃO DE CRIAR A SENHA ALEATÓRIA
geraSenha()

function geraSenha(){
    let senha = ''
    // LOOP - Repetições
    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * 26;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.value = senha;
}