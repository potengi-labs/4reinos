const scenes = {


mundo:{

background:
"assets/img/mundos/bg_4reinos0.png",

titulo:
"Aventura dos 4 Reinos"

},



COM_M001_E01:{

background:
"assets/img/missoes/com_m001/bg_caminho-praca1.png",

titulo:
"Praça da Expressão"

},



COM_M001_E02:{

background:
"assets/img/missoes/com_m001/bg_caminho-teatro1.png",

titulo:
"Teatro das Histórias"

}


};





function loadScene(sceneID){


const world =
document.querySelector(".world");



const scene =
scenes[sceneID];



if(!scene){

console.error(
"Cena não encontrada:",
sceneID
);

return;

}



world.style.backgroundImage =
`url(${scene.background})`;



console.log(
"Entrando na cena:",
scene.titulo
);


}
