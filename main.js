// async function country_Japan() {
//     const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&locations=[Tokyo, Osaka, Yokohama, Nagoya, Sapporo, Kobe, Kyoto, Fukuoka]");
//     const japon = await response.json();
//     console.log(japon);
//   }

//   country_Japan()

// const liste_Country = [
//   "Tokyo",
//   "Osaka",
//   "Yokohama",
//   "Nagoya",
//   "Sapporo",
//   "Kobe",
//   "Kyoto",
//   "Fukuoka",
// ];

// for (let i = 0; i < liste_Country.length; i++) {
//   console.log(liste_Country[i]);

//  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${liste_Country[i]}?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json`;
//  }

async function town_Tokyo() {
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tokyo?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json"
  );
  const tokyo = await res.json();
  const town = tokyo.address;
  const descriptif = tokyo.description;
  const the_Day = tokyo.days[0].datetime;
  const temperature = tokyo.days[0].temp;
  const lever_Soleil = tokyo.days[0].sunrise;
  const coucher_Soleil = tokyo.days[0].sunset;
  const neige = tokyo.days[0].snow;

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
}

town_Tokyo();

async function town_Osaka() {
  //res=response
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Osaka?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json"
  );
  const osaka = await res.json();
  //console.log(osaka);
  const town = osaka.address;
  const descriptif = osaka.description;
  const the_Day = osaka.days[0].datetime;
  const temperature = osaka.days[0].temp;
  const lever_Soleil = osaka.days[0].sunrise;
  const coucher_Soleil = osaka.days[0].sunset;
  const neige = osaka.days[0].snow;

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
}

town_Osaka();

async function town_Yokohama() {
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Yokohama?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json"
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

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
}

town_Yokohama();

async function town_Nagoya() {
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Nagoya?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json"
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

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
}

town_Nagoya();

async function town_Sapporo() {
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sapporo?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json"
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

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
}

town_Sapporo();
// L'API KOBE ne fonctionne pas le 20-03-24
// async function town_Kobe() {
//   const res = await fetch(Bad API Request:Invalid location parameter value..);
//   const kobe= await res.json();
//   //console.log(kobe);
// }

// town_Kobe();

async function town_Kyoto() {
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kyoto?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json"
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

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
}

town_Kyoto();

async function town_Fukuoka() {
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/fukuoka?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json"
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

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
}

town_Fukuoka();
