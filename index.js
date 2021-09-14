



//------------------- Horaires d'ouvertures ------------
const date = new Date();
const jour = date.getDay();
const heure = date.getHours();


if((jour != 1) && (jour !=2) && (heure > 17) && (heure < 22)){
    const jourOuverture = document.getElementById(jour);
    jourOuverture.style.color = 'green';
    jourOuverture.firstChild.style.color = 'green';
}

//------------------ liste des sauces -----------
const sauces = document.getElementById('sauces');
const listeSauces = document.getElementById('listeSauces');
listeSauces.style.display = 'none';

sauces.addEventListener('click', ()=>{
    if(listeSauces.style.display == 'none'){
        listeSauces.style.display = 'block';
    }else{
        listeSauces.style.display = 'none';
    }
});