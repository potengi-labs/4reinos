document.querySelectorAll(".footer-item").forEach(item => {
  item.addEventListener("click", () => {
    const type = item.dataset.popup;

    const contentMap = {
      diario: ["Diário", "Registros da jornada do jogador."],
      mochila: ["Mochila", "Itens coletados durante a aventura."],
      mapa: ["Mapa", "Exploração do mundo aberto."],
      cristais: ["Cristais", "Sistema de energia e progressão."]
    };

    const [title, content] = contentMap[type];

    openPopup(title, content);
  });
});
