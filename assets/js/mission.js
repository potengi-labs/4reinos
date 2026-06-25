async function carregarMissao(id){

const resposta =
await fetch(
`data/missoes/${id}.json`
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