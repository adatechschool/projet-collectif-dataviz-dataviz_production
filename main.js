/* Audio Controls */
// --- INITIAL STATE ---
const music = document.getElementById("myAudio");
let count = 1;
// --- CONTROL FUNCTION ---
function playPause() {
  if (count == 0) {
    count = 1;
    music.play();
    document.getElementById("audio_control").innerHTML = "Pause";
  } else if (count == 1) {
    count = 0;
    music.pause();
    document.getElementById("audio_control").innerHTML = "Play";
  }
}

/* Navbar Animation Management */

// --- HAMBURGER ANIMATION ---
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

// --- SLIDE BAR ANIMATION ---
/* permet de gérer le slide de la barre latérale quand on clique sur le hamburger*/
new ResizeObserver((entries) => {
  //console.log(entries)
  if (entries[0].contentRect.width <= 1500) {
    /* slide progressif de la barre latérale*/
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

/* Map Integration */
// --- MAP DEFINITION ---
var map = L.map('map').setView([37.9237, 137.245], 5);
var bounds = [
  [47.840, 113.862], [32.598, 165.981]
];
// --- MAP LIMITS ---
map.setMaxBounds(bounds)
// --- WATER COLOR LAYER ONTO THE MAP ---
var Stadia_StamenWatercolor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}',
  {
    minZoom: 5,
    maxZoom: 7,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'jpg'
  });
Stadia_StamenWatercolor.addTo(map);
// --- MAP ZOOM CONTROL POSITION ---
map.zoomControl.setPosition('bottomright')
// --- CITIES MARKERS ---
var tokyoMarker = L.marker([35.689487, 139.691706]).addTo(map);
var osakaMarker = L.marker([35.9237, 137.245]).addTo(map);
var yokohamaMarker = L.marker([41.0497, 141.253]).addTo(map);
var nagoyaMarker = L.marker([35.1507, 136.919]).addTo(map);
var sapporoMarker = L.marker([43.058, 141.35]).addTo(map);
var kyotoMarker = L.marker([35.0155, 135.77]).addTo(map);
var fukuokaMarker = L.marker([33.5833, 130.384]).addTo(map);
let kobeMarker = L.marker([35.6841, 139.809]).addTo(map);

/* API Keys */
// --- DEFINITION KEY API ---
const apiKeys = {
  //Naima: "EMMSPMZNCSEFKYYZ3GZ8LYVBR",
  //Zoulfat: "RDLM9N3FLLQWX892VHLYS3P3G",
  // Bis: "JNW3KLZHP2PP2YARHKYQ6LC28",
  ter: "CRWMSSTYVAVHKZFE56763N2SG" 
  //Mathilde: "YPXYAT45SZAAZMPLTE96SZ99T",
  //Oumar: "G66JCW4PXP3JP9UGTKQ58U3TW"
};
// --- RANDOM KEY FUNCTION ---
function getRandomKey() {
  const keys = Object.keys(apiKeys);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return apiKeys[keys[randomIndex]];
}
const randomKey = getRandomKey();
/* Object.keys --> Object.entries() renvoie un tableau dont les éléments sont des paires [clé=Oumar, valeur=G66JCW4PXP3JP9UGTKQ58U3TW]
Math.floor --> Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre
Math.random --> prend un chiffre aléatoire entre 0 et 0.9 * 4 (car on est 4)
keys.length --> 1=Naima; 2=Zoulfat; 3=Mathilde; 4=Oumar*/

/* API Fetch + parameters */
// --- TOKYO ---
async function town_Tokyo() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tokyo,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );

  const tokyo = await res.json();
  console.log(tokyo);
  const resolvedAddressKey = tokyo.resolvedAddress;
  const townKey = tokyo.address.charAt(0).toUpperCase() + tokyo.address.slice(1);
  const timeKey = tokyo.days[0].datetime;
  const descriptifKey = tokyo.description;
  const temperatureKey = tokyo.days[0].temp;
  const uvIndexKey = tokyo.days[0].uvindex;
  const rainKey = tokyo.days[0].precip;
  const snowKey = tokyo.days[0].snow;
  const sunriseKey = tokyo.days[0].sunrise;
  const sunsetKey = tokyo.days[0].sunset;
  const moonriseKey = tokyo.days[0].moonrise;
  const moonsetKey = tokyo.days[0].moonset;
  const iconKey = tokyo.days[0].icon;

  let tokyoWeather = [
    resolvedAddressKey,
    townKey,
    timeKey,
    descriptifKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return tokyoWeather
}
// --- OSAKA ---
async function town_Osaka() {
  //res=response
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Osaka,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );
  const osaka = await res.json();
  const resolvedAddressKey = osaka.resolvedAddress;
  const townKey = osaka.address.charAt(0).toUpperCase() + osaka.address.slice(1)
  const timeKey = osaka.days[0].datetime;
  const descriptifKey = osaka.description;
  const temperatureKey = osaka.days[0].temp;
  const uvIndexKey = osaka.days[0].uvindex;
  const rainKey = osaka.days[0].precip;
  const snowKey = osaka.days[0].snow;
  const sunriseKey = osaka.days[0].sunrise;
  const sunsetKey = osaka.days[0].sunset;
  const moonriseKey = osaka.days[0].moonrise;
  const moonsetKey = osaka.days[0].moonset;
  const iconKey = osaka.days[0].icon;

  let osakaWeather = [
    resolvedAddressKey,
    townKey,
    descriptifKey,
    timeKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return osakaWeather;
}
// --- YOKOHAMA ---
async function town_Yokohama() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Yokohama,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );
  const yokohama = await res.json();
  const resolvedAddressKey = yokohama.resolvedAddress;
  const townKey = yokohama.address.charAt(0).toUpperCase() + yokohama.address.slice(1)
  const timeKey = yokohama.days[0].datetime;
  const descriptifKey = yokohama.description;
  const temperatureKey = yokohama.days[0].temp;
  const uvIndexKey = yokohama.days[0].uvindex;
  const rainKey = yokohama.days[0].precip;
  const snowKey = yokohama.days[0].snow;
  const sunriseKey = yokohama.days[0].sunrise;
  const sunsetKey = yokohama.days[0].sunset;
  const moonriseKey = yokohama.days[0].moonrise;
  const moonsetKey = yokohama.days[0].moonset;
  const iconKey = yokohama.days[0].icon;

  let yokohamaWeather = [
    resolvedAddressKey,
    townKey,
    descriptifKey,
    timeKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return yokohamaWeather;
}
// --- NAGOYA ---
async function town_Nagoya() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Nagoya,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );
  const nagoya = await res.json();
  const resolvedAddressKey = nagoya.resolvedAddress;
  const townKey = nagoya.address.charAt(0).toUpperCase() + nagoya.address.slice(1)
  const timeKey = nagoya.days[0].datetime;
  const descriptifKey = nagoya.description;
  const temperatureKey = nagoya.days[0].temp;
  const uvIndexKey = nagoya.days[0].uvindex;
  const rainKey = nagoya.days[0].precip;
  const snowKey = nagoya.days[0].snow;
  const sunriseKey = nagoya.days[0].sunrise;
  const sunsetKey = nagoya.days[0].sunset;
  const moonriseKey = nagoya.days[0].moonrise;
  const moonsetKey = nagoya.days[0].moonset;
  const iconKey = nagoya.days[0].icon;

  let nagoyaWeather = [
    resolvedAddressKey,
    townKey,
    descriptifKey,
    timeKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return nagoyaWeather;
}
// --- SAPPORO ---
async function town_Sapporo() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sapporo,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );
  const sapporo = await res.json();
  const resolvedAddressKey = sapporo.resolvedAddress;
  const townKey = sapporo.address.charAt(0).toUpperCase() + sapporo.address.slice(1)
  const timeKey = sapporo.days[0].datetime;
  const descriptifKey = sapporo.description;
  const temperatureKey = sapporo.days[0].temp;
  const uvIndexKey = sapporo.days[0].uvindex;
  const rainKey = sapporo.days[0].precip;
  const snowKey = sapporo.days[0].snow;
  const sunriseKey = sapporo.days[0].sunrise;
  const sunsetKey = sapporo.days[0].sunset;
  const moonriseKey = sapporo.days[0].moonrise;
  const moonsetKey = sapporo.days[0].moonset;
  const iconKey = sapporo.days[0].icon;

  let sapporoWeather = [
    resolvedAddressKey,
    townKey,
    descriptifKey,
    timeKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return sapporoWeather;
}
// --- KYOTO ---
async function town_Kyoto() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kyoto,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );
  const kyoto = await res.json()
  const resolvedAddressKey = kyoto.resolvedAddress;
  const townKey = kyoto.address.charAt(0).toUpperCase() + kyoto.address.slice(1)
  const timeKey = kyoto.days[0].datetime;
  const descriptifKey = kyoto.description;
  const temperatureKey = kyoto.days[0].temp;
  const uvIndexKey = kyoto.days[0].uvindex;
  const rainKey = kyoto.days[0].precip;
  const snowKey = kyoto.days[0].snow;
  const sunriseKey = kyoto.days[0].sunrise;
  const sunsetKey = kyoto.days[0].sunset;
  const moonriseKey = kyoto.days[0].moonrise;
  const moonsetKey = kyoto.days[0].moonset;
  const iconKey = kyoto.days[0].icon;

  let kyotoWeather = [
    resolvedAddressKey,
    townKey,
    descriptifKey,
    timeKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return kyotoWeather;
}
// --- FUKUOKA ---
let fukuokaWeather = [];
async function town_Fukuoka() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fukuoka,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );
  const fukuoka = await res.json();
  const resolvedAddressKey = fukuoka.resolvedAddress;
  const townKey = fukuoka.address.charAt(0).toUpperCase() + fukuoka.address.slice(1)
  const timeKey = fukuoka.days[0].datetime;
  const descriptifKey = fukuoka.description;
  const temperatureKey = fukuoka.days[0].temp;
  const uvIndexKey = fukuoka.days[0].uvindex;
  const rainKey = fukuoka.days[0].precip;
  const snowKey = fukuoka.days[0].snow;
  const sunriseKey = fukuoka.days[0].sunrise;
  const sunsetKey = fukuoka.days[0].sunset;
  const moonriseKey = fukuoka.days[0].moonrise;
  const moonsetKey = fukuoka.days[0].moonset;
  const iconKey = fukuoka.days[0].icon;

  let fukuokaWeather = [
    resolvedAddressKey,
    townKey,
    descriptifKey,
    timeKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return fukuokaWeather;
}
// --- KOBE ---
async function town_Kobe() {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kobe,Japan/today?unitGroup=metric&key=${randomKey}&include=today&elements=longitude,latitude,datetime,description,temp,humidity,precip,snow,sunrise,sunset,moonrise,moonset,uvindex,windspeed,icon&contentType=json`
  );
  const kobe = await res.json();
  const resolvedAddressKey = kobe.resolvedAddress;
  const townKey = kobe.address.charAt(0).toUpperCase() + kobe.address.slice(1, 4);
  const timeKey = kobe.days[0].datetime;
  const descriptifKey = kobe.description;
  const temperatureKey = kobe.days[0].temp;
  const uvIndexKey = kobe.days[0].uvindex;
  const rainKey = kobe.days[0].precip;
  const snowKey = kobe.days[0].snow;
  const sunriseKey = kobe.days[0].sunrise;
  const sunsetKey = kobe.days[0].sunset;
  const moonriseKey = kobe.days[0].moonrise;
  const moonsetKey = kobe.days[0].moonset;
  const iconKey = kobe.days[0].icon;
  let kobeWeather = [
    resolvedAddressKey,
    townKey,
    descriptifKey,
    timeKey,
    temperatureKey,
    uvIndexKey,
    rainKey,
    snowKey,
    sunriseKey,
    sunsetKey,
    moonriseKey,
    moonsetKey,
    iconKey,
  ];
  return kobeWeather;
}
// --- ANSWER DISPLAY ON MARKERS ---
const execute = async () => {
  let t = await town_Tokyo();
  tokyoMarker.bindPopup(`<div class = "weatherbox">
                            <div class = "ville">
                              <p><strong>${t[1]}</strong></p>
                              <p>${t[4]}°C</p>
                            </div>
                            ${changeIcon(t)}
                         </div>
                         <div class = "description">
                            <p>${t[2]}</p>
                         </div>`, { className: 'cities' });

  let o = await town_Osaka();
  osakaMarker.bindPopup(`<div class = "weatherbox">
                            <div class = "ville">
                              <p><strong>${o[1]}</strong></p>
                              <p>${o[4]}°C</p>
                            </div>
                            ${changeIcon(o)}
                         </div>
                         <div class = "description">
                            <p>${o[2]}</p>
                         </div>`, { className: 'cities' });

  let y = await town_Yokohama();
  yokohamaMarker.bindPopup(`<div class = "weatherbox">
                              <div class = "ville">
                                <p><strong>${y[1]}</strong></p>
                                <p>${y[4]}°C</p>
                              </div>
                              ${changeIcon(y)}
                            </div>
                            <div class = "description">
                              <p>${y[2]}</p>
                            </div>`, { className: 'cities' });

  let n = await town_Nagoya();
  nagoyaMarker.bindPopup(`<div class = "weatherbox">
                            <div class = "ville">
                              <p><strong>${n[1]}</strong></p>
                              <p>${n[4]}°C</p>
                            </div>
                            ${changeIcon(n)}
                          </div>
                          <div class = "description">
                            <p>${n[2]}</p>
                          </div>`, { className: 'cities' });

  let s = await town_Sapporo();
  sapporoMarker.bindPopup(`<div class = "weatherbox">
                              <div class = "ville">
                                <p><strong>${s[1]}</strong></p>
                                <p>${s[4]}°C</p>
                              </div>
                              ${changeIcon(s)}
                            </div>
                            <div class = "description">
                              <p>${s[2]}</p>
                            </div>`, { className: 'cities' });

  let ky = await town_Kyoto();
  kyotoMarker.bindPopup(`<div class = "weatherbox">
                            <div class = "ville">
                              <p><strong>${ky[1]}</strong></p>
                              <p>${ky[4]}°C</p>
                            </div>
                            ${changeIcon(ky)}
                          </div>
                          <div class = "description">
                            <p>${ky[2]}</p>
                          </div>`, { className: 'cities' });

  let f = await town_Fukuoka();
  fukuokaMarker.bindPopup(`<div class = "weatherbox">
                              <div class = "ville">
                                <p><strong>${f[1]}</strong></p>
                                <p>${f[4]}°C</p></div>
                                ${changeIcon(f)}
                                </div>
                              <div class = "description">
                                <p>${f[2]}</p>
                              </div>`, { className: 'cities' });
  let ko = await town_Kobe();
  kobeMarker.bindPopup(`<div class = "weatherbox">
                          <div class = "ville">
                          <p><strong>${ko[1]}</strong></p>
                          <p>${ko[4]}°C</p></div>
                          ${changeIcon(ko)}
                          </div>
                          <div class = "description">
                          <p>${ko[2]}</p>
                          </div>`, { className: 'cities' });
  let randomPhotoUrl = await callUnsplash();

  return data = { t, o, y, n, s, ky, f, ko, randomPhotoUrl };
};
execute();

// --- WEATHER ICONS MANAGEMENT ---
function changeIcon(array) {
  if (array[12] == "rain") {
    return `<img src = "ressources/pluie (2).png">`
  } else if (array[12] == "snow") {
    return `<img src = "ressources/neige (2).png">`
  } else if (array[12] == "clear-day" || array[12] == "clear-night") {
    return `<img src = "ressources/soleil (2).png">`
  } else if (array[12] == "fog" || array[12] == "wind") {
    return `<img src = "ressources/couvert.png">`
  } else if (array[12] == "cloudy" || array[12] == "partly-cloudy-day" || array[12] == "partly-cloudy-night") {
    return `<img src = "ressources/soleil et nuage.png">`
  } else
    return `<img src = "ressources/soleil (2).png">`
}
/* Detailed Info Management */
// --- DETAILED INFO BANNER ---
function openInfo() {
  document.getElementById("moreInfo").style.width = "50%";
}
function closeInfo() {
  document.getElementById("moreInfo").style.width = "0%";
}
// --- BANNER INFO MANAGEMENT ---
function tokyoInfo() {
  execute();
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.t[6] + " Snow "+ data.t[7];
  document.getElementById("sunPhases").innerHTML = "Sunrise " + data.t[8] + " Sunset " + data.t[9];
  document.getElementById("moonPhases").innerHTML = "Moonrise " + data.t[10] + " Moonset " + data.t[11];
};
function osakaInfo() {
  execute()
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.o[6] + " Snow "+ data.o[7];
  document.getElementById("sunPhases").innerHTML = "Sunrise " + data.o[8] + " Sunset " + data.t[9];
  document.getElementById("moonPhases").innerHTML = "Moonrise " + data.o[10] + " Moonset " + data.o[11];
};
function yokohamaInfo() {
  execute()
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.y[6] + " Snow "+ data.y[7];
  document.getElementById("sunPhases").innerHTML = "Sunrise " + data.y[8] + " Sunset " + data.y[9];
  document.getElementById("moonPhases").innerHTML = "Moonrise " + data.y[10] + " Moonset " + data.y[11];
};
function nagoyaInfo() {
  execute()
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.n[6] + " Snow "+ data.n[7];
  document.getElementById("sunPhases").innerHTML =  " Sunrise " + data.n[8] + " Sunset " + data.n[9];
  document.getElementById("moonPhases").innerHTML = " Moonrise " + data.n[10] + " Moonset " + data.n[11];
};
function sapporoInfo() {
  execute()
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.s[6] + " Snow "+ data.s[7];
  document.getElementById("sunPhases").innerHTML = " Sunrise " + data.s[8] + " Sunset " + data.s[9];
  document.getElementById("moonPhases").innerHTML = " Moonrise " + data.s[10] + " Moonset " + data.s[11];
};
function fukuokaInfo() {
  execute()
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.f[6] + " Snow "+ data.f[7];
  document.getElementById("sunPhases").innerHTML = "Sunrise " + data.f[8] + " Sunset " + data.f[9];
  document.getElementById("moonPhases").innerHTML = "Moonrise " + data.f[10] + " Moonset " + data.f[11];
};
function kyotoInfo() {
  execute()
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.ky[6] + " Snow "+ data.ky[7];
  document.getElementById("sunPhases").innerHTML = "Sunrise " + data.ky[8] + " Sunset " + data.ky[9];
  document.getElementById("moonPhases").innerHTML = "Moonrise " + data.ky[10] + " Moonset " + data.ky[11];
};
function kobeInfo() {
  execute()
  document.getElementById("randomImage").innerHTML = `<img class = "cityImages" src=${data.randomPhotoUrl}>`
  document.getElementById("precipitations").innerHTML = "Rain "+ data.ko[6] + " Snow "+ data.ko[7];
  document.getElementById("sunPhases").innerHTML = "Sunrise " + data.ko[8] + " Sunset " + data.ko[9];
  document.getElementById("moonPhases").innerHTML = "Moonrise " + data.ko[10] + " Moonset " + data.ko[11];
};

/*Fetch de l'API unSplash*/
async function callUnsplash() {
  const api_Keys_unSplash = "B8h7TfapDvNH46X6wt-u9eICKGeKoG-xL-ld6p7xmjA";
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Authorization: "Client-ID " + api_Keys_unSplash,
  };
  let response = await fetch(
    "https://api.unsplash.com/photos/random?query=japon",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  return data.urls.regular
}
