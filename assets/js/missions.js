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

  console.log("🎮 Missão carregada:", {
    id: missao.id,
    nome: missao.nome,
    tema: missao.tema,
    background: missao.background
  });

  // 🔥 BACKGROUND DA MISSÃO
  if (missao.background) {
    world.style.backgroundImage = `url('${missao.background}')`;
    world.style.backgroundSize = "cover";
    world.style.backgroundPosition = "center";
    world.style.backgroundRepeat = "no-repeat";
  }

  // 🎨 RESET DE TEMA (seguro)
  document.body.classList.forEach(cls => {
    if (cls.startsWith("theme-")) {
      document.body.classList.remove(cls);
    }
  });

  // 🎨 APLICA NOVO TEMA
  if (missao.tema) {
    document.body.classList.add(missao.tema);
  }
}
