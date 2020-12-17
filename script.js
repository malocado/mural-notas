// -------------- Definição dos elementos ------------------- //

const assuntoElement = document.querySelector('#assunto');
const conteudoElement = document.querySelector('#conteudo');
const btnElement = document.querySelector('#botao');
const muralElement = document.querySelector('#container-mural');

// ------------- Definição dos eventos --------------------- //

btnElement.onclick = salvarNota;

// ------- Recuperando notas existentes no localstorage e renderizando-as ---------- //

let notas = JSON.parse(localStorage.getItem('list_notas')) || [];
renderizar();

// ------------  Funções -----------------------------------------------------------//

function renderizar() {

    // Limpando o mural antes de renderizar as notas existentes
    muralElement.innerHTML = '';

    notas.forEach(nota => {

        // Criação dos elementos que serão inseridos na tela
        const div = document.createElement('div');
        const spanAssunto = document.createElement('span');
        const spanConteudo = document.createElement('span');
        const assuntoText = document.createTextNode(nota.assunto);
        const conteudoText = document.createTextNode(nota.conteudo);
        const excluirText = document.createTextNode('x');
        const btnExcluir = document.createElement('a');
        btnExcluir.setAttribute('href', '#');

        // Função do botão excluir
        const posicao = notas.indexOf(nota);
        btnExcluir.setAttribute('onclick', `removerNota(${posicao})`)
        

        // Preenchendo as spans e estilização do texto
        btnExcluir.appendChild(excluirText);
        spanAssunto.appendChild(assuntoText);
        spanConteudo.appendChild(conteudoText);

        spanAssunto.style.fontSize = '1.2em';
        spanAssunto.style.textAlign = 'center';

        // Preenchendo a div, identificando e postando no mural
        div.appendChild(btnExcluir);
        div.appendChild(spanAssunto);
        div.appendChild(spanConteudo);
        muralElement.appendChild(div);
    });

}

function salvarNota() {
    // Validação se os campos não estão vazios
    if (assuntoElement.value === '' || conteudoElement.value === '')
        return alert('Digite o assunto e o conteúdo');


    // Leitura do assunto e do conteúdo e limpeza dos campos
    const assunto = assuntoElement.value;
    const conteudo = conteudoElement.value;
    assuntoElement.value = '';
    conteudoElement.value = '';

    // Adicionando a nova nota na lista
    const nota = { assunto: assunto, conteudo: conteudo };
    notas.push(nota);

    renderizar();
    salvarNoStorage();
}

function removerNota(posicao){
    notas.splice(posicao, 1);
    renderizar();
    salvarNoStorage();
}

// ----------- Salvando no localstorage --------------

function salvarNoStorage() {
    localStorage.setItem('list_notas', JSON.stringify(notas));
}