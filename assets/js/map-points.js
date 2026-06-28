const mapPoints = [

{
id:"COM_M001",
nome:"Praça da Expressão",
icone:"💬",
x:"36%",
y:"70%",
acao:()=>{
window.location.href =
"missions/mission-com-m001.html";
}
},
  
{
id:"COM_M002",
nome:"Bosque dos Símbolos",
icone:"🌀",
x:"16%",
y:"64%",
acao:()=>{
window.location.href =
"missions/mission-com-m003.html";
}
},
  
{
id:"COM_M003",
nome:"Teatro das Histórias",
icone:"🎭",
x:"22%",
y:"80%",
acao:()=>{
window.location.href =
"missions/mission-com-m002.html";
}
},  
  
{
id:"TER_M001",
nome:"Torre da Antecipação",
icone:"👁️",
x:"12%",
y:"28%",
acao:()=>{
window.location.href =
"#";
}
},
    
{
id:"TER_M002",
nome:"Jardim das Memórias",
icone:"🌳",
x:"26%",
y:"48%",
acao:()=>{
window.location.href =
"#";
}
},  
  
{
id:"TER_M003",
nome:"Ponte do Equilíbrio",
icone:"⚖️",
x:"35%",
y:"40%",
acao:()=>{
window.location.href =
"#";
}
},
  
{
id:"TER_M004",
nome:"Castelo dos Sentimentos",
icone:"🏰",
x:"20%",
y:"23%",
acao:()=>{
window.location.href =
"#";
}
},
  
{
id:"TER_M005",
nome:"Mirante do Entendimento",
icone:"🤝",
x:"15%",
y:"45%",
acao:()=>{
window.location.href =
"#";
}
},

  {
id:"BIO_M001",
nome:"Fonte da Vida",
icone:"💧",
x:"64%",
y:"80%",
acao:()=>{
window.location.href =
"missions/mission-bio-m001.html";
}
},
  
{
id:"BIO_M002",
nome:"Templo do Paciência",
icone:"⏳",
x:"85%",
y:"72%",
acao:()=>{
window.location.href =
"missions/mission-bio-m002.html";
}
},
  
{
id:"BIO_M003",
nome:"Vale da Recuperação",
icone:"🌱",
x:"74%",
y:"60%",
acao:()=>{
window.location.href =
"missions/mission-bio-m003.html";
}
},  

  {
id:"AMB_M001",
nome:"Trilha das Rotinas",
icone:"🧭",
x:"70%",
y:"30%",
acao:()=>{
window.location.href =
"#";
}
},
  
{
id:"AMB_M002",
nome:"Mercado das Escolhas",
icone:"🥾",
x:"80%",
y:"28%",
acao:()=>{
window.location.href =
"#";
}
},
  
  
{
id:"AMB_M003",
nome:"Observatório da Vida",
icone:"🔭",
x:"70%",
y:"10%",
acao:()=>{
window.location.href =
"#";
}
},
  
{
id:"AMB_M004",
nome:"Casa Segura",
icone:"🏡",
x:"90%",
y:"24%",
acao:()=>{
window.location.href =
"#";
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
