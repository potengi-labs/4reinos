const p=document.getElementById('particles');
for(let i=0;i<80;i++){
 const s=document.createElement('span');
 s.style.left=Math.random()*100+'%';
 s.style.top=Math.random()*100+'%';
 s.style.animationDelay=Math.random()*12+'s';
 p.appendChild(s);
}
