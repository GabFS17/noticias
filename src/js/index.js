const botao = document.querySelectorAll('.botao')

botao.forEach((botao) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado()

        selecionarBotao(botao)
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado')
}