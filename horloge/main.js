class horloge {
    /**Créer et initialise les objets de la classe horloge.
     * @param {number} hours
     * @param {number} minute
     * @param {number} second
     */
    constructor(hours, minute, second) {
        this.hours = hours;
        this.minute = minute;
        this.second = second;
    }
    /**Méthode pour ajouter du temps au compteur.
     * @param {number} min
     * @param {number} scd
     */
    ajout(min, scd) {
        this.minute += min;
        this.second += scd;
    }
}
//On fait le lien avec les element html.
let buttonAdd = document.querySelector('button');
let display = document.querySelector('p');
//Permet de stocker l'id de l'interval.
let timer;
//Récupère le temps actuel.
let temps = new Date();
let scd = temps.getSeconds();
let min = temps.getMinutes();
let hrs = temps.getHours();
//Créer l'objet coucou de la classe horloge.
let coucou = new horloge(hrs, min, scd);

//Rajoute 1 seconde par itération déclanché par setinterval et gère les passage en minute/heure.
function updateTime() {
    coucou.second++;

    if (coucou.minute >= 60) {
        coucou.minute -= 60;
        coucou.hours++;
    }
    if (coucou.second >= 60) {
        coucou.second -= 60;
        coucou.minute++;
    }
    if (coucou.hours === 24) {
        coucou.hours = 0;
    }

    //Affiche dans l'html le résultat.
    display.innerText = "Il est " + coucou.hours + " H " + coucou.minute + " min " + coucou.second + ' seconds.';
}
timer = setInterval(updateTime, 1000);

//Déclenche la methode ajout de l'objet coucou sur un clic du buttonAdd.
buttonAdd.addEventListener("click", () => { coucou.ajout(21, 28) });