async function carregarMissao(id) {
  try {
    const resposta = await fetch("/assets/missoes/missoes.json");

    if (!resposta.ok) {
      throw new Error("Erro ao carregar missões");
    }

    const data = await resposta.json();

    const missao = data[id];

    if (!missao) {
      throw new Error("Missão não encontrada: " + id);
    }

    renderizarMissao(missao);

  } catch (e) {
    console.error("Erro ao carregar missão:", e);
  }
}

function renderizarMissao(missao) {
  const world = document.getElementById("world-layer");

  if (world && missao.background) {
    world.style.backgroundImage =
      `url('${missao.background}')`;
  }

  document.body.className = "";

  if (missao.tema) {
    document.body.classList.add(missao.tema);
  }

  console.log(`🎮 Missão: ${missao.nome}`);
}
