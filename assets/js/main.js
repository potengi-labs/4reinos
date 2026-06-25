document.addEventListener(
"DOMContentLoaded",
()=>{


const worldLayer =
document.getElementById(
"world-layer"
);



const uiLayer =
document.getElementById(
"ui-layer"
);



/*
===========================
CARREGAR COMPONENTES
===========================
*/


loadComponent(
"assets/components/world.html",
worldLayer
);



loadComponent(
"assets/components/ui.html",
uiLayer
);



/*
===========================
CENA INICIAL
===========================
*/


loadScene("mundo");



});
