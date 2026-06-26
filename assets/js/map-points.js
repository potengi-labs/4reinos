const mapPoints = [

{
id:"COM_M001",

nome:"Praça da Expressão",

icone:"💬",

x:"22%",

y:"86%",


acao:()=>{

window.location.href =
"assets/missoes/com_m001.html";

}

}

];



function createMapPoints(){


const layer =
document.createElement("div");


layer.id="poi-layer";


document
.querySelector(".world")
.appendChild(layer);



mapPoints.forEach(point=>{


const link =
document.createElement("button");



link.className="map-point";



link.style.left =
point.x;


link.style.top =
point.y;



link.innerHTML =
`
<span>${point.icone}</span>
<label>${point.nome}</label>
`;



link.onclick =
point.acao;



layer.appendChild(link);



});


}
