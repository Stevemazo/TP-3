function addLi(){
    const dynamicSelect=document.getElementById('dynamicSelect');
    const newLiValue=prompt("Veuillez entrer une tache à ajouter dans votre to do list");

    if(newLiValue!==null && newLiValue.trim()!=""){
        const newLiElement=document.createElement("li");
        newLiElement.value=newLiValue;
        newLiElement.textContent=newLiValue;

        dynamicSelect.appendChild(newLiElement);
    }
}