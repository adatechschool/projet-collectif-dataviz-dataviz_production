/* Gestion de l'animation de la navbar */

/* -- animation de l'hamburger -- */
const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open");
    // pour les lecteurs d'écran
    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)
    navLinksContainer.classList.toggle("open");
}

hamburgerToggler.addEventListener("click", toggleNav)

/* permet de gérer le slide de la barre latérale quand on resize la fenêtre du navigateur
si intégrer dans le CSS la slide bar s'affiche même si on ne clique pas sur le hamburger*/
new ResizeObserver(entries => {
    //console.log(entries)
    if(entries[0].contentRect.width <= 1300){
         /* slide progressif de la barre latérale*/
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    }else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)



 

















/*async function afficherPoky() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const poky = await response.json();
    console.log(poky.abilities[0].ability.url)
  }
  afficherPoky();*/

/* async function multiCitiesWeather() {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=RDLM9N3FLLQWX892VHLYS3P3G&locations=Osaka%2CJapan%7CYokohama%2CJapan%7CTokyo%2CJapan%7CKobe%2CJapan%7CKyoto%2CJapan&contentType=json&include=current%2Cdays%2Calerts&unitGroup=metric");
    const multiCities = await response.json();
    console.log(multiCities)
  }
  
  multiCitiesWeather();

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=RDLM9N3FLLQWX892VHLYS3P3G&locations=Osaka%2CJapan%7CYokohama%2CJapan%7CTokyo%2CJapan%7CKobe%2CJapan%7CKyoto%2CJapan&contentType=json&include=current%2Cdays%2Calerts&unitGroup=metric")
.then((response)=>response.json())
.then((data)=>{
    document.getElementById("cities").src = data.locations[0].resolvedAddress
}) */

