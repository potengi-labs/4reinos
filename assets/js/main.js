document.addEventListener("DOMContentLoaded",async ()=>{

const worldLayer =
document.getElementById("world-layer");

const footerLayer =
document.getElementById("footer-layer");

const missioncomm001Layer =
document.getElementById("mission-com-m001-layer");

await loadComponent(
"../assets/components/world.html",
worldLayer
);

await loadComponent(
"../assets/components/footer.html",
footerLayer
);
  
await loadComponent(
"../assets/missions/mission-com-m001.html",
missioncomm001Layer
);

loadScene("mundo");

createMapPoints();

  
// Inicializa o sistema de missões  
  iniciarMissoes();


  
});

