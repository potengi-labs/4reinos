document.addEventListener("DOMContentLoaded",async ()=>{

const worldLayer =
document.getElementById("world-layer");

const uiLayer =
document.getElementById("ui-layer");

await loadComponent(
"assets/components/world.html",
worldLayer
);

await loadComponent(
"assets/components/ui.html",
uiLayer
);

loadScene("mundo");

createMapPoints();

});
