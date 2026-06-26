async function carregarMissao(id){

const resposta =
await fetch(
`../missoes/data/json/${id}.json`
);


const missao =
await resposta.json();


mostrarMissao(missao);

}


function mostrarMissao(missao){

console.log(
missao.nome
);

}
