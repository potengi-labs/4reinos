// =======================================================
// AVENTURA DOS 4 REINOS
// MISSÕES v2
// =======================================================

export const missions = {

    reinos: {

        comunicacao: {

            config: {

                id: "comunicacao",

                nome: "Reino da Comunicação",

                tema: "theme-comunicacao",

                cristal: "azul",

                cor: "#49A9FF",

                musica: "/assets/audio/comunicacao.mp3",

                mapa: "/assets/img/mapas/comunicacao.png",

                dificuldade: 1

            },

            missoes: {

                missao1: {

                    slug: "praca-da-expressao",

                    ordem: 1,

                    nome: "Praça da Expressão",

                    descricao:
                        "Você chega ao ponto inicial do Reino da Comunicação. A praça está viva com sinais e mensagens.",

                    visual: {
                        background: "/assets/img/missoes/bg_caminho-praca1.png",
                        fog: 0.35,
                        particles: true
                    },

                    audio: {

                        musica: null,

                        efeitos: []

                    },

                    gameplay: {

                        xp: 100,

                        checkpoint: true,

                        puzzle: null,

                        boss: false

                    },

                    npcs: [],

                    dialogos: [],

                    recompensas: [],

                    desbloqueia: ["missao2"]

                },

                missao2: {

                    slug: "teatro-das-historias",

                    ordem: 2,

                    nome: "Teatro das Histórias",

                    descricao:
                        "Uma torre antiga emite sinais que precisam ser decodificados.",

                    visual: {

                        background: "/assets/img/missoes/bg_caminho-teatro1.png",

                        fog: 0.40,

                        particles: true

                    },

                    audio: {

                        musica: null,

                        efeitos: []

                    },

                    gameplay: {

                        xp: 120,

                        checkpoint: false,

                        puzzle: "sequencia-simbolos",

                        boss: false

                    },

                    npcs: [],

                    dialogos: [],

                    recompensas: [],

                    desbloqueia: ["missao3"]

                }

                // ...
                // Demais missões seguem exatamente a mesma estrutura
                // ...

            }

        },

        sensorial: {

            config: {

                id: "sensorial",

                nome: "Reino Sensorial",

                tema: "theme-sensorial",

                cristal: "roxo",

                cor: "#A44BFF",

                musica: "/assets/audio/sensorial.mp3"

            },

            missoes: {}

        },

        emocional: {

            config: {

                id: "emocional",

                nome: "Reino Emocional",

                tema: "theme-emocional",

                cristal: "verde",

                cor: "#42C96F",

                musica: "/assets/audio/emocional.mp3"

            },

            missoes: {}

        },

        autonomia: {

            config: {

                id: "autonomia",

                nome: "Reino da Autonomia",

                tema: "theme-autonomia",

                cristal: "laranja",

                cor: "#F5A623",

                musica: "/assets/audio/autonomia.mp3"

            },

            missoes: {}

        }

    }

};

// =======================================================
// ÍNDICE AUTOMÁTICO
// =======================================================

const indiceMissoes = new Map();

for (const reino of Object.values(missions.reinos)) {

    for (const [id, missao] of Object.entries(reino.missoes)) {

        indiceMissoes.set(id, {

            ...missao,

            id,

            reino: reino.config.id,

            reinoNome: reino.config.nome,

            tema: reino.config.tema,

            cristal: reino.config.cristal,

            cor: reino.config.cor,

            musicaReino: reino.config.musica

        });

    }

}

// =======================================================
// API PÚBLICA
// =======================================================

export function getReino(id) {

    return missions.reinos[id] ?? null;

}

export function getMissoesDoReino(id) {

    return getReino(id)?.missoes ?? {};

}

export function getMissao(id) {

    return indiceMissoes.get(id) ?? null;

}

export function existeMissao(id) {

    return indiceMissoes.has(id);

}

export function getProximaMissao(id) {

    const atual = getMissao(id);

    if (!atual) return null;

    return atual.desbloqueia.length
        ? getMissao(atual.desbloqueia[0])
        : null;

}

export function carregarMissao(id) {

    const missao = getMissao(id);

    if (!missao) {

        console.error(`Missão "${id}" não encontrada.`);

        return;

    }

    renderizarMissao(missao);

}

// =======================================================
// RENDERIZAÇÃO
// =======================================================

export function renderizarMissao(missao) {

    const world = document.getElementById("world-layer");

    if (!world) return;

    world.style.backgroundImage =
        `url('${missao.visual.background}')`;

    world.style.backgroundSize = "cover";
    world.style.backgroundPosition = "center";
    world.style.backgroundRepeat = "no-repeat";

    document.body.classList.forEach(cls => {

        if (cls.startsWith("theme-")) {

            document.body.classList.remove(cls);

        }

    });

    document.body.classList.add(missao.tema);

    console.log("🎮", missao);

}
