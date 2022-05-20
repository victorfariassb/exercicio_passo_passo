// O código abaixo não é muito diferente do ensinado pela professora

function checkScroll(event) {
    // faz-se uma função para checar a rolagem
    let gatilhos = document.querySelectorAll('.gatilhos > div');
    // selecionamos os gatilhos dentro do html
    gatilhos.forEach((gatilho) => {
        // para cada gatilho, vamos selecionar a altura dele
        let posicao = gatilho.getBoundingClientRect();
        
        let alvo = gatilho.dataset.alvo;
        // aqui a gente seleciona a info que está contida no data em cada gatilho
        let passo = document.querySelector('.' + alvo);
        // a ideia de pegar o alvo é para que possamos identificar qual gatilho estamos mexendo no momento
        if (posicao.top <= 0 && posicao.top > -posicao.height) {
            // caso o scroll esteja entre o top e o bottom do gatilho, a imagem aparece. No momento que ultrassa um desses limites, a outra imagem aparece
            passo.classList.add('passo-ativo');
            // aqui é o mecanismo que "desliga" e "liga" a imagem que deve aparecer
        } else { 
            passo.classList.remove('passo-ativo');
        }
    }
    )
}

window.addEventListener('scroll', checkScroll);
