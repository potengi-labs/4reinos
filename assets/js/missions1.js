// =======================================================
// AVENTURA DOS 4 REINOS
// MISSÕES
// =======================================================

export const missions = {

    reinos: {

        comunicacao: {
            id: "comunicacao",
            nome: "Reino da Comunicação",
            tema: "theme-comunicacao",
            cristal: "azul",
            cor: "#49A9FF",
            musica: "../assets/audio/comunicacao.mp3",
            missoes: [

                {
                    id: "missao1",
                    ordem: 1,
                    nome: "Praça da Expressão",
                    background: "../assets/img/missoes/bg_caminho-praca1.png",
                    descricao: "Você chega ao ponto inicial do Reino da Comunicação. A praça está viva com sinais e mensagens.",
                    fog: 0.35,
                    particles: true
                },

                {
                    id: "missao2",
                    ordem: 2,
                    nome: "Teatro das Histórias",
                    background: "../assets/img/missoes/bg_caminho-teatro1.png",
                    descricao: "Uma torre antiga emite sinais que precisam ser decodificados.",
                    fog: 0.40,
                    particles: true
                },

                {
                    id: "missao3",
                    ordem: 3,
                    nome: "Mercado das Mensagens",
                    background: "/assets/img/missoes/bg_mercado.png",
                    descricao: "Mensagens circulam entre vendedores e viajantes. Nada é o que parece.",
                    fog: 0.30,
                    particles: true
                },

                {
                    id: "missao4",
                    ordem: 4,
                    nome: "Arquivo Perdido",
                    background: "/assets/img/missoes/bg_arquivo.png",
                    descricao: "Um arquivo esquecido guarda informações críticas do reino.",
                    fog: 0.45,
                    particles: false
                },

                {
                    id: "missao5",
                    ordem: 5,
                    nome: "Eco das Vozes",
                    background: "/assets/img/missoes/bg_ecos.png",
                    descricao: "As vozes do passado ainda ecoam entre as paredes da cidade.",
                    fog: 0.50,
                    particles: true
                },

                {
                    id: "missao6",
                    ordem: 6,
                    nome: "Núcleo da Informação",
                    background: "/assets/img/missoes/bg_nucleo.png",
                    descricao: "O centro de controle das comunicações do reino.",
                    fog: 0.20,
                    particles: true
                },

                {
                    id: "missao7",
                    ordem: 7,
                    nome: "Interferência",
                    background: "/assets/img/missoes/bg_interferencia.png",
                    descricao: "Algo está bloqueando os sinais. Você precisa descobrir a origem.",
                    fog: 0.60,
                    particles: false
                },

                {
                    id: "missao8",
                    ordem: 8,
                    nome: "Rede Invisível",
                    background: "/assets/img/missoes/bg_rede.png",
                    descricao: "Uma rede oculta conecta todos os pontos do reino.",
                    fog: 0.35,
                    particles: true
                },

                {
                    id: "missao9",
                    ordem: 9,
                    nome: "Guardião da Mensagem",
                    background: "/assets/img/missoes/bg_guardiao.png",
                    descricao: "O guardião testa sua capacidade de interpretar sinais.",
                    fog: 0.40,
                    particles: true
                },

                {
                    id: "missao10",
                    ordem: 10,
                    nome: "Conexão Final",
                    background: "/assets/img/missoes/bg_final.png",
                    descricao: "Você ativa a conexão central do Reino da Comunicação.",
                    fog: 0.70,
                    particles: true
                }

            ]

        },



        sensorial: {

            id: "sensorial",
            nome: "Reino Sensorial",
            tema: "theme-sensorial",
            cristal: "roxo",
            cor: "#A44BFF",
            musica: "/assets/audio/sensorial.mp3",

            missoes: []

        },



        emocional: {

            id: "emocional",
            nome: "Reino Emocional",
            tema: "theme-emocional",
            cristal: "verde",
            cor: "#42C96F",
            musica: "/assets/audio/emocional.mp3",

            missoes: []

        },



        autonomia: {

            id: "autonomia",
            nome: "Reino da Autonomia",
            tema: "theme-autonomia",
            cristal: "laranja",
            cor: "#F5A623",
            musica: "/assets/audio/autonomia.mp3",

            missoes: []

        }

    }

};



// =======================================================
// UTILITÁRIOS
// =======================================================

export function getReino(idReino) {

    return missions.reinos[idReino] || null;

}



export function getMissoesDoReino(idReino) {

    const reino = getReino(idReino);

    return reino ? reino.missoes : [];

}



export function buscarMissao(idMissao) {

    for (const reino of Object.values(missions.reinos)) {

        const missao = reino.missoes.find(m => m.id === idMissao);

        if (missao) {

            return {

                ...missao,

                reino: reino.id,

                reinoNome: reino.nome,

                tema: reino.tema,

                cristal: reino.cristal,

                cor: reino.cor,

                musica: reino.musica

            };

        }

    }

    return null;

}



// =======================================================
// CARREGAMENTO
// =======================================================

export function carregarMissao(idMissao) {

    const missao = buscarMissao(idMissao);

    if (!missao) {

        console.error(`Missão "${idMissao}" não encontrada.`);

        return;

    }

    renderizarMissao(missao);

}



// =======================================================
// RENDERIZAÇÃO
// =======================================================

export function renderizarMissao(missao) {

    const world = document.getElementById("world-layer");

    if (!world) {

        console.error("Elemento #world-layer não encontrado");

        return;

    }

    console.log("🎮 Missão carregada:", missao);

    // Background

    if (missao.background) {

        world.style.backgroundImage = `url('${missao.background}')`;
        world.style.backgroundSize = "cover";
        world.style.backgroundPosition = "center";
        world.style.backgroundRepeat = "no-repeat";

    }

    // Remove temas anteriores

    document.body.classList.forEach(cls => {

        if (cls.startsWith("theme-")) {

            document.body.classList.remove(cls);

        }

    });

    // Novo tema

    if (missao.tema) {

        document.body.classList.add(missao.tema);

    }

}
