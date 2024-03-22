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
const api_Keys = "EMMSPMZNCSEFKYYZ3GZ8LYVBR"; /*Naima*/
//const api_Keys = "RDLM9N3FLLQWX892VHLYS3P3G"; /*Zoulfat*/
//const api_Keys = "YPXYAT45SZAAZMPLTE96SZ99T"; /*Mathilde*/
//const api_Keys = "G66JCW4PXP3JP9UGTKQ58U3TW"; /*Oumar*/

/* Fetch de l'API + paramètres */
// TOKYO
var tokyoMarker = L.marker([35.689487, 139.691706]).addTo(map);

async function town_Tokyo() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tokyo?unitGroup=metric&key=${api_Keys}&contentType=json`
  );

  const tokyo = await res.json();
  //console.log("tokyo", tokyo )
  const town = tokyo.address;
  const descriptif = tokyo.description;
  const the_Day = tokyo.days[0].datetime;
  const temperature = tokyo.days[0].temp;
  const lever_Soleil = tokyo.days[0].sunrise;
  const coucher_Soleil = tokyo.days[0].sunset;
  const neige = tokyo.days[0].snow;
  const rain = tokyo.days[0].precip;
  
  let tokyoWeather = [town, descriptif, the_Day, temperature, lever_Soleil, coucher_Soleil, neige, rain]
  return tokyoWeather
}

let t = await town_Tokyo();
tokyoMarker.bindPopup(`<p>
                        <p class = "ville">Tokyo ${t[2]} </p>
                        <p class = "température">${t[3]} °C</p>
                        <p class = "météo">Météo du jour : ${t[1]}</p>
                      </p>`);

// OSAKA
var osakaMarker = L.marker([35.9237, 137.245]).addTo(map);

async function town_Osaka() {
  //res=response
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Osaka?unitGroup=metric&key=${api_Keys}&contentType=json`
  );
  const osaka = await res.json();
  console.log(osaka);
  const town = osaka.address;
  const descriptif = osaka.description;
  const the_Day = osaka.days[0].datetime;
  const temperature = osaka.days[0].temp;
  const lever_Soleil = osaka.days[0].sunrise;
  const coucher_Soleil = osaka.days[0].sunset;
  const neige = osaka.days[0].snow;
  const rain = osaka.days[0].precip;
  
  let osakaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
  ];
  return osakaWeather;
}let o = await town_Osaka();
osakaMarker.bindPopup(`<p>
<p class = "ville">Osaka ${o[2]} </p>
<p class = "température">${o[3]} °C</p>
<p class = "météo">Météo du jour : ${o[1]}</p>
</p>`)

// YOKOHAMA
var yokohamaMarker = L.marker([41.0497, 141.253]).addTo(map);
async function town_Yokohama() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Yokohama?unitGroup=metric&key=${api_Keys}&contentType=json`
  );
  const yokohama = await res.json();
  //console.log(yokohama)
  const town = yokohama.address;
  const descriptif = yokohama.description;
  const the_Day = yokohama.days[0].datetime;
  const temperature = yokohama.days[0].temp;
  const lever_Soleil = yokohama.days[0].sunrise;
  const coucher_Soleil = yokohama.days[0].sunset;
  const neige = yokohama.days[0].snow;
  const rain = yokohama.days[0].precip;
  let yokohamaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
  ];
  return yokohamaWeather;
}

let y = await town_Yokohama();
yokohamaMarker.bindPopup(`<p>
<p class = "ville">Yokohama ${y[2]} </p>
<p class = "température">${y[3]} °C</p>
<p class = "météo">Météo du jour : ${y[1]}</p>
</p>`)


//NAGOYA
var nagoyaMarker = L.marker([35.1507, 136.919]).addTo(map);

async function town_Nagoya() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Nagoya?unitGroup=metric&key=${api_Keys}&contentType=json`
  );
  const nagoya = await res.json();
  //console.log(nagoya);
  const town = nagoya.address;
  const descriptif = nagoya.description;
  const the_Day = nagoya.days[0].datetime;
  const temperature = nagoya.days[0].temp;
  const lever_Soleil = nagoya.days[0].sunrise;
  const coucher_Soleil = nagoya.days[0].sunset;
  const neige = nagoya.days[0].snow;
  const rain = nagoya.days[0].precip;
  let nagoyaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
  ];
  return nagoyaWeather;
}
let n = await town_Nagoya();
nagoyaMarker.bindPopup(`<p>
<p class = "ville">Nagoya ${n[2]} </p>
<p class = "température">${n[3]} °C</p>
<p class = "météo">Météo du jour : ${n[1]}</p>
</p>`);

//SAPPORO
var sapporoMarker = L.marker([43.058, 141.35]).addTo(map);
async function town_Sapporo() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sapporo?unitGroup=metric&key=${api_Keys}&contentType=json`
  );
  const sapporo = await res.json();
  //console.log(sapporo);
  const town = sapporo.address;
  const descriptif = sapporo.description;
  const the_Day = sapporo.days[0].datetime;
  const temperature = sapporo.days[0].temp;
  const lever_Soleil = sapporo.days[0].sunrise;
  const coucher_Soleil = sapporo.days[0].sunset;
  const neige = sapporo.days[0].snow;
  const rain = sapporo.days[0].precip;
  let sapporoWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
  ];
  return sapporoWeather;
}

let s = await town_Sapporo();
sapporoMarker.bindPopup(`<p>
<p class = "ville">Sapporo ${s[2]} </p>
<p class = "température">${s[3]} °C</p>
<p class = "météo">Météo du jour : ${s[1]}</p>
</p>`)

//KYOTO

var kyotoMarker = L.marker([35.0155, 135.77]).addTo(map);
async function town_Kyoto() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kyoto?unitGroup=metric&key=${api_Keys}&contentType=json`
  );
  const kyoto = await res.json();
  //console.log(kyoto);
  const town = kyoto.address;
  const descriptif = kyoto.description;
  const the_Day = kyoto.days[0].datetime;
  const temperature = kyoto.days[0].temp;
  const lever_Soleil = kyoto.days[0].sunrise;
  const coucher_Soleil = kyoto.days[0].sunset;
  const neige = kyoto.days[0].snow;
  const rain = kyoto.days[0].precip;
  let kyotoWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
  ];
  return kyotoWeather;
}

let ky = await town_Kyoto();
kyotoMarker.bindPopup(`<p>
<p class = "ville">Kyoto ${ky[2]} </p>
<p class = "température">${ky[3]} °C</p>
<p class = "météo">Météo du jour : ${ky[1]}</p>
</p>`)

//FUKUOKA

var fukuokaMarker = L.marker([33.5833, 130.384]).addTo(map);

async function town_Fukuoka() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/fukuoka?unitGroup=metric&key=${api_Keys}&contentType=json`
  );
  const fukuoka = await res.json();
  //console.log(fukuoka);
  const town = fukuoka.address;
  const descriptif = fukuoka.description;
  const the_Day = fukuoka.days[0].datetime;
  const temperature = fukuoka.days[0].temp;
  const lever_Soleil = fukuoka.days[0].sunrise;
  const coucher_Soleil = fukuoka.days[0].sunset;
  const neige = fukuoka.days[0].snow;
  const rain = fukuoka.days[0].precip;
  let fukuokaWeather = [
    town,
    descriptif,
    the_Day,
    temperature,
    lever_Soleil,
    coucher_Soleil,
    neige,
    rain,
  ];
  return fukuokaWeather;
}

let f = await town_Fukuoka();
fukuokaMarker.bindPopup(`<p>
<p class = "ville">Tokyo ${f[2]} </p>
<p class = "température">${f[3]} °C</p>
<p class = "météo">Météo du jour : ${f[1]}</p>
</p>`)



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
  if (entries[0].contentRect.width <= 1300) {
    /* slide progressif de la barre latérale*/
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);



