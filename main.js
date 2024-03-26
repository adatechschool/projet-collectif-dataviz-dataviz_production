/* integretaatio Audio*/
//changer l'etat des boutons

function changeStates(x) {
  console.log("OKOKOKOKOKOK", x);
  let btns = document.querySelectorAll(".btn");
  console.log("BTN", btns);
  let audio = document.querySelector("#myAudio");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  btns[x].classList.add("active");

  if (x == 0) {
    audio.play();
  }
  if (x == 1) {
    audio.pause();
  }
  if (x == 2) {
    audio.pause();
    audio.currentTime = 0; //mets pause et remets la musique à 0
  }
}

/* intégration de la map*/
var map = L.map('map').setView([37.9237, 137.245], 5);
var bounds = [
  [47.840, 113.862], [32.598, 165.981]
]

/* limite l'affichage de la map aux villes sélectionné*/
map.setMaxBounds(bounds)

/* ajout du layer watercolor sur la map*/
var Stadia_StamenWatercolor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
  minZoom: 5,
  maxZoom: 7,
  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ext: 'jpg'
});

Stadia_StamenWatercolor.addTo(map);

/* Clé API */
// ----- DEFINITION KEY API ----- */
const apiKeys = {
  Naima: "EMMSPMZNCSEFKYYZ3GZ8LYVBR",
  Zoulfat: "RDLM9N3FLLQWX892VHLYS3P3G",
  Mathilde: "YPXYAT45SZAAZMPLTE96SZ99T",
  Oumar: "G66JCW4PXP3JP9UGTKQ58U3TW"
}; 

function getRandomKey() {
  const keys = Object.keys(apiKeys);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return apiKeys[keys[randomIndex]];
}
/* Object.keys --> Object.entries() renvoie un tableau dont les éléments sont des paires [clé=Oumar, valeur=G66JCW4PXP3JP9UGTKQ58U3TW]
Math.floor --> Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre
Math.random --> prend un chiffre aléatoire entre 0 et 0.9 * 4 (car on est 4)
keys.length --> 1=Naima; 2=Zoulfat; 3=Mathilde; 4=Oumar*/

const randomKey = getRandomKey();
//console.log(apiKeys);
//console.log(randomKey);


/* Fetch de l'API + paramètres */

function changeIcon(array) {
  if (array[8] == "rain") {
    return `<img src = "ressources/pluie (2).png">`
  } else if (array[8] == "snow") {
    return `<img src = "ressources/neige (2).png">`
  } else if (array == "clear-day" || array == "clear-night") {
    return `<img src = "ressources/soleil (2).png">`
  } else if (array == "fog" || array == "wind") {
    return `<img src = "ressources/couvert.png">`
  } else if (array == "cloudy" || array == "partly-cloudy-day" || array == "partly-cloudy-night") {
    return `<img src = "ressources/soleil et nuage.png">`
  } else
    return `<img src = "ressources/soleil (2).png">`
}

// TOKYO
var tokyoMarker = L.marker([35.689487, 139.691706]).addTo(map);

async function town_Tokyo() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tokyo?unitGroup=metric&key=${randomKey}&contentType=json`
  );

  const tokyo = await res.json();

  const townRaw = tokyo.address;
  const town = townRaw.charAt(0).toUpperCase() + townRaw.slice(1)
  const descriptif = tokyo.description;
  const the_Day = tokyo.days[0].datetime;
  const temperature = tokyo.days[0].temp;
  const lever_Soleil = tokyo.days[0].sunrise;
  const coucher_Soleil = tokyo.days[0].sunset;
  const neige = tokyo.days[0].snow;
  const rain = tokyo.days[0].precip;
  const icon = tokyo.days[0].icon;

  let tokyoWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
    icon
  ];
  return tokyoWeather
}

/*let t = await town_Tokyo();

tokyoMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${t[0]}</strong></p>
                       <p>${t[3]}°C</p>
                       </div>
                       ${changeIcon(t)}
                       </div>
                       <div class = "description"><p>${t[1]}</p></div>`, { className: 'cities' });*/

// OSAKA
var osakaMarker = L.marker([35.9237, 137.245]).addTo(map);

async function town_Osaka() {
  //res=response
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Osaka?unitGroup=metric&key=${randomKey}&contentType=json`
  );
  const osaka = await res.json();

  const townRaw = osaka.address;
  const town = townRaw.charAt(0).toUpperCase() + townRaw.slice(1)
  const descriptif = osaka.description;
  const the_Day = osaka.days[0].datetime;
  const temperature = osaka.days[0].temp;
  const lever_Soleil = osaka.days[0].sunrise;
  const coucher_Soleil = osaka.days[0].sunset;
  const neige = osaka.days[0].snow;
  const rain = osaka.days[0].precip;
  const icon = osaka.days[0].icon;

  let osakaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
    icon
  ];
  return osakaWeather;
}

/*let o = await town_Osaka();

osakaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${o[0]}</strong></p>
                       <p>${o[3]}°C</p>
                       </div>${changeIcon(o)}
                       </div>
                       <div class = "description"><p>${o[1]}</p></div>`, { className: 'cities' });*/

// YOKOHAMA
var yokohamaMarker = L.marker([41.0497, 141.253]).addTo(map);

async function town_Yokohama() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Yokohama?unitGroup=metric&key=${randomKey}&contentType=json`
  );
  const yokohama = await res.json();
  const townRaw = yokohama.address;
  const town = townRaw.charAt(0).toUpperCase() + townRaw.slice(1)
  const descriptif = yokohama.description;
  const the_Day = yokohama.days[0].datetime;
  const temperature = yokohama.days[0].temp;
  const lever_Soleil = yokohama.days[0].sunrise;
  const coucher_Soleil = yokohama.days[0].sunset;
  const neige = yokohama.days[0].snow;
  const rain = yokohama.days[0].precip;
  const icon = yokohama.days[0].icon;

  let yokohamaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
    icon
  ];
  return yokohamaWeather;
}

/*let y = await town_Yokohama();
yokohamaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${y[0]}</strong></p>
                          <p>${y[3]}°C</p>
                          </div>${changeIcon(y)}
                          </div>
                          <div class = "description"><p>${y[1]}</p></div>`, { className: 'cities' });*/

//NAGOYA
var nagoyaMarker = L.marker([35.1507, 136.919]).addTo(map);

async function town_Nagoya() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Nagoya?unitGroup=metric&key=${randomKey}&contentType=json`
  );
  const nagoya = await res.json();
  const townRaw = nagoya.address;
  const town = townRaw.charAt(0).toUpperCase() + townRaw.slice(1)
  const descriptif = nagoya.description;
  const the_Day = nagoya.days[0].datetime;
  const temperature = nagoya.days[0].temp;
  const lever_Soleil = nagoya.days[0].sunrise;
  const coucher_Soleil = nagoya.days[0].sunset;
  const neige = nagoya.days[0].snow;
  const rain = nagoya.days[0].precip;
  const icon = nagoya.days[0].icon;

  let nagoyaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
    icon
  ];
  return nagoyaWeather;
}
/*let n = await town_Nagoya();
nagoyaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${n[0]}</strong></p>
                        <p>${n[3]}°C</p>
                        </div>${changeIcon(n)}
                        </div>
<div class = "description"><p>${n[1]}</p></div>`, { className: 'cities' });*/

//SAPPORO
var sapporoMarker = L.marker([43.058, 141.35]).addTo(map);
async function town_Sapporo() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sapporo?unitGroup=metric&key=${randomKey}&contentType=json`
  );
  const sapporo = await res.json();
  const townRaw = sapporo.address;
  const town = townRaw.charAt(0).toUpperCase() + townRaw.slice(1)
  const descriptif = sapporo.description;
  const the_Day = sapporo.days[0].datetime;
  const temperature = sapporo.days[0].temp;
  const lever_Soleil = sapporo.days[0].sunrise;
  const coucher_Soleil = sapporo.days[0].sunset;
  const neige = sapporo.days[0].snow;
  const rain = sapporo.days[0].precip;
  const icon = sapporo.days[0].icon;
  console.log(icon)

  let sapporoWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
    icon
  ];
  return sapporoWeather;
}

/*let s = await town_Sapporo();
sapporoMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p>
                         <strong>${s[0]}</strong></p>
                         <p>${s[3]}°C</p>
                         </div>${changeIcon(s)}</div>
                         <div class = "description"><p>${s[1]}</p></div>`, { className: 'cities'});*/

//KYOTO

var kyotoMarker = L.marker([35.0155, 135.77]).addTo(map);

async function town_Kyoto() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kyoto?unitGroup=metric&key=${randomKey}&contentType=json`
  );
  const kyoto = await res.json();
  const townRaw = kyoto.address;
  const town = townRaw.charAt(0).toUpperCase() + townRaw.slice(1)
  const descriptif = kyoto.description;
  const the_Day = kyoto.days[0].datetime;
  const temperature = kyoto.days[0].temp;
  const lever_Soleil = kyoto.days[0].sunrise;
  const coucher_Soleil = kyoto.days[0].sunset;
  const neige = kyoto.days[0].snow;
  const rain = kyoto.days[0].precip;
  const icon = kyoto.days[0].icon;

  let kyotoWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
    icon
  ];
  return kyotoWeather;
}

/*let ky = await town_Kyoto();

kyotoMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${ky[0]}</strong></p>
<p>${ky[3]}°C</p></div>
${changeIcon(ky)}
</div>
<div class = "description"><p>${ky[1]}</p></div>`, { className: 'cities' });*/

//FUKUOKA

var fukuokaMarker = L.marker([33.5833, 130.384]).addTo(map);

async function town_Fukuoka() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/fukuoka?unitGroup=metric&key=${randomKey}&contentType=json`
  );
  const fukuoka = await res.json();
  const townRaw = fukuoka.address;
  const town = townRaw.charAt(0).toUpperCase() + townRaw.slice(1)
  const descriptif = fukuoka.description;
  const the_Day = fukuoka.days[0].datetime;
  const temperature = fukuoka.days[0].temp;
  const lever_Soleil = fukuoka.days[0].sunrise;
  const coucher_Soleil = fukuoka.days[0].sunset;
  const neige = fukuoka.days[0].snow;
  const rain = fukuoka.days[0].precip;
  const icon = fukuoka.days[0].icon;

  let fukuokaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
    icon
  ];
  return fukuokaWeather;
}

/*let f = await town_Fukuoka();
fukuokaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${f[0]}</strong></p>
<p>${f[3]}°C</p></div>
${changeIcon(f)}
</div>
<div class = "description"><p>${f[1]}</p></div>`, { className: 'cities' });*/


/* Gestion de l'animation de la navbar */

/* -- animation de l'hamburger -- */
const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open");
  // pour les lecteurs d'écran
  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
  navLinksContainer.classList.toggle("open");
};

hamburgerToggler.addEventListener("click", toggleNav);

/* permet de gérer le slide de la barre latérale quand on resize la fenêtre du navigateur
si intégrer dans le CSS la slide bar s'affiche même si on ne clique pas sur le hamburger*/
new ResizeObserver((entries) => {
  //console.log(entries)
  if (entries[0].contentRect.width <= 1500) {
    /* slide progressif de la barre latérale*/
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

const execute = async () => {
  let t = await town_Tokyo();
  tokyoMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${t[0]}</strong></p>
                       <p>${t[3]}°C</p>
                       </div>
                       ${changeIcon(t)}
                       </div>
                       <div class = "description"><p>${t[1]}</p></div>`, { className: 'cities' });
 let o = await town_Osaka();

osakaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${o[0]}</strong></p>
                       <p>${o[3]}°C</p>
                       </div>${changeIcon(o)}
                       </div>
                       <div class = "description"><p>${o[1]}</p></div>`, { className: 'cities' });

  let y = await town_Yokohama();
yokohamaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${y[0]}</strong></p>
                          <p>${y[3]}°C</p>
                          </div>${changeIcon(y)}
                          </div>
                          <div class = "description"><p>${y[1]}</p></div>`, { className: 'cities' });

  let n = await town_Nagoya();
nagoyaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${n[0]}</strong></p>
                        <p>${n[3]}°C</p>
                        </div>${changeIcon(n)}
                        </div>
<div class = "description"><p>${n[1]}</p></div>`, { className: 'cities' });

  let s = await town_Sapporo();
sapporoMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p>
                         <strong>${s[0]}</strong></p>
                         <p>${s[3]}°C</p>
                         </div>${changeIcon(s)}</div>
                         <div class = "description"><p>${s[1]}</p></div>`, { className: 'cities'});

  let ky = await town_Kyoto();

kyotoMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${ky[0]}</strong></p>
<p>${ky[3]}°C</p></div>
${changeIcon(ky)}
</div>
<div class = "description"><p>${ky[1]}</p></div>`, { className: 'cities' });

 let f = await town_Fukuoka();
fukuokaMarker.bindPopup(`<div class = "weatherbox"><div class = "ville"><p><strong>${f[0]}</strong></p>
<p>${f[3]}°C</p></div>
${changeIcon(f)}
</div>
<div class = "description"><p>${f[1]}</p></div>`, { className: 'cities' });

};
execute();

map.zoomControl.setPosition('bottomright')


