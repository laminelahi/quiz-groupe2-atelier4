const form = document.getElementById("formulaire");
form.addEventListener("submit", function(event){
  event.preventDefault();//empeche le rechargement de la page après la soumission du formulaire

  //recuperer les elements du formulaire
  const temp = form.elements.temp.value;
  const fièvre = form.elements.fièvre.value;
  const fatigue = form.elements.fatigue.value;
  const mdt = form.elements.mdt.value;
  const resp = form.elements.resp.value;
  const contact = form.elements.contact.value;
  let result = "";
  if (temp === "oui" && fièvre === "oui" && fatigue === "oui" && mdt === "oui" && resp === "oui" && contact === "oui"){
    result = "vous avez le covid";
  }
  else{
    result = "vous n'avez pas le covid";
  }
  const resultDiv = document.getElementById("result");
  alert("regardez le résultat en bas");
  resultDiv.textContent = result ;
  

});