async function loadComponent(url,target){

try{

const response =
await fetch(url);


if(!response.ok){

throw new Error(
`Erro carregando componente: ${url}`
);

}


const html =
await response.text();


target.innerHTML = html;


}catch(error){

console.error(error);

}

}


document.addEventListener(
"DOMContentLoaded",
()=>{

const footer =
document.querySelector(".footer-layer");


if(footer){

loadComponent(
"assets/components/footer.html",
footer
);

}

});
