// ======================================================
// MISSÕES
// ======================================================

const Missoes = {

    atual: null,

    elementos: {},

    iniciar(id) {

        this.cache();

        const missao = MISSOES[id];

        if (!missao) {
            console.error("Missão não encontrada:", id);
            return;
        }

        this.atual = missao;

        this.renderizar();

    },

    cache() {

        this.elementos = {

            titulo: document.getElementById("mission-title"),

            descricao: document.getElementById("mission-description"),

            background: document.querySelector(".mission-background"),

            overlay: document.querySelector(".mission-overlay")

        };

    },

    renderizar() {

        this.elementos.titulo.textContent =
            this.atual.titulo;

        this.elementos.descricao.textContent =
            this.atual.descricao;

        this.elementos.background.style.backgroundImage =
            `url(${this.atual.background})`;

        this.elementos.overlay.style.background =
            this.atual.overlay;

    },

    finalizar() {

        console.log("Missão finalizada");

    }

};
