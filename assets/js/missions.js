async function carregarMissao(id) {
  try {
    const resposta = await fetch(`assets/missoes/data/json/${id}.json`);

    if (!resposta.ok) throw new Error("Missão não encontrada");

    const missao = await resposta.json();

    renderizarMissao(missao);

  } catch (e) {
    console.error(e);
  }
}

function renderizarMissao(missao) {
  const world = document.getElementById("world-layer");

  world.style.backgroundImage =
    `url('${missao.background}')`;

  document.body.className = "";
  document.body.classList.add(missao.tema);

  console.log("Missão carregada:", missao.nome);
}
