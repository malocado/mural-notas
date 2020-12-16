// -------------- Definição dos elementos ------------------- //

const assuntoElement = document.querySelector('#assunto');
const conteudoElement = document.querySelector('#conteudo');
const btnElement = document.querySelector('#botao');
const muralElement = document.querySelector('#container-mural');

// ------------- Definição dos eventos --------------------- //

btnElement.onclick = salvarNota;

// Funções para adicionar a nova nota

function salvarNota() {
    
    // Validação se os campos não estão vazios
    if (assuntoElement.value === '' || conteudoElement.value === '')
        return alert('Digite o assunto e o conteúdo');

    // Leitura do assunto e do conteúdo e limpeza dos campos
    const assunto = assuntoElement.value;
    const conteudo = conteudoElement.value;

    assuntoElement.value = '';
    conteudoElement.value = '';

    // Criação dos elementos que serão inseridos na tela
    const div = document.createElement('div');
    const spanAssunto = document.createElement('span');
    const spanConteudo = document.createElement('span');
    const assuntoText = document.createTextNode(assunto);
    const conteudoText = document.createTextNode(conteudo);

    // Preenchendo as spans e a div e estilização do texto
    spanAssunto.appendChild(assuntoText);
    spanConteudo.appendChild(conteudoText);
    
    spanAssunto.style.fontSize = '1.2em';
    spanAssunto.style.textAlign = 'center';

    div.appendChild(spanAssunto);
    div.appendChild(spanConteudo);
    muralElement.appendChild(div);
}