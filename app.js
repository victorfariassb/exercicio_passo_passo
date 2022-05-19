function checkScroll(event) {
    let gatilhos = document.querySelectorAll('.gatilhos > div');

    gatilhos.forEach((gatilho) => {
        let posicao = gatilho.getBoundingClientRect();

        let alvo = gatilho.dataset.alvo;

        let passo = document.querySelector('.' + alvo);
        
        if (posicao.top <= 0 && posicao.top > -posicao.height) {
            passo.classList.add('passo-ativo');
        } else { 
            passo.classList.remove('passo-ativo');
        }
    }
    )
}

window.addEventListener('scroll', checkScroll);