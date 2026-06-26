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

  if (!world) {
    console.error("Elemento #world-layer não encontrado");
    return;
  }

  if (missao.background) {
    world.style.backgroundImage =
      `url('${missao.background}')`;
  } else {
    console.warn("Missão sem background:", missao.id);
  }

  // remove apenas temas antigos (não destrói outras classes)
  document.body.classList.forEach(cls => {
    if (cls.startsWith("theme-")) {
      document.body.classList.remove(cls);
    }
  });

  if (missao.tema) {
    document.body.classList.add(missao.tema);
  }

  console.log("🎮 Missão carregada:", {
    id: missao.id,
    nome: missao.nome,
    tema: missao.tema,
    background: missao.background
  });
}
