document.addEventListener("DOMContentLoaded",()=>{


const worldLayer =
document.getElementById("world-layer");


const uiLayer =
document.getElementById("ui-layer");



/*
=================================
CARREGAMENTO DE COMPONENTES
=================================
*/


async function loadComponent(url,target){


const response =
await fetch(url);


const html =
await response.text();


target.innerHTML += html;


}



/*
=================================
MUNDO PRINCIPAL
=================================
*/


loadComponent(
"assets/components/world.html",
worldLayer
);



/*
=================================
INTERFACE
=================================
*/


loadComponent(
"assets/components/ui.html",
uiLayer
);



/*
=================================
FUTUROS MÓDULOS
=================================

loadComponent(
"assets/components/player.html",
uiLayer
);


loadComponent(
"assets/components/crystals.html",
uiLayer
);


*/


});
