document.addEventListener("DOMContentLoaded",async ()=>{

const missioncomm001Layer =
document.getElementById("mission-com-m001-layer");

await loadComponent(
"mission-com-m001.html",
missioncomm001Layer
);

loadScene("mundo");

  
// Inicializa o sistema de missões  
  iniciarMissoes();


  
});
