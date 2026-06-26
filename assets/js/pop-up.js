function openPopup(title, content){
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-body").innerHTML = content;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup(){
  document.getElementById("popup").classList.add("hidden");
}
