document.addEventListener("DOMContentLoaded",async ()=>{

const footerLayer =
document.getElementById("footer-layer");

const missioncomm001Layer =
document.getElementById("mission-com-m001-layer");

await loadComponent(
"../assets/components/footer.html",
footerLayer
);
  
await loadComponent(
"mission-com-m001.html",
missioncomm001Layer
);

  
});
