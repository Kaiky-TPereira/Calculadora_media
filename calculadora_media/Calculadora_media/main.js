const form = document.getElementById('form-atividade');
const imgAprovado ='<img src"emojeaprovado.jpeg" alt="Emoji Aprovado" />';
const imgReprovado ='<img src"emojereprovado.jpeg" alt="Emoji Reprovado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanRerovado = '<span class="resultado rerovado">Reprovado</span>';
constnotaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade-')

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade));

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }else {
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? spanAprovadoAprovado : spanReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linha;
}

function atualizaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    const media = somaDasNotas / notas.length;

    console.log(media);
}