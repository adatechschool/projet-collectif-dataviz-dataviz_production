const liste_Country = [
  "Tokyo",
  "Osaka",
  "Yokohama",
  "Nagoya",
  "Sapporo",
  "Kyoto",
  "Fukuoka",
  "Kobe, Japan",
];

for (let i = 0; i < liste_Country.length; i++) {
  //console.log(liste_Country[i]);
  displayTown(liste_Country[i]);
}

async function displayTown(townName) {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${townName}?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json`
  );
  const city = await res.json();
  const town = city.address;
  const descriptif = city.description;
  const the_Day = city.days[0].datetime;
  const temperature = city.days[0].temp;
  const lever_Soleil = city.days[0].sunrise;
  const coucher_Soleil = city.days[0].sunset;
  const neige = city.days[0].snow;
  const rain = city.days[0].precip;

  console.log(town);
  console.log(descriptif);
  console.log(the_Day);
  console.log(temperature);
  console.log(lever_Soleil);
  console.log(coucher_Soleil);
  console.log(neige);
  console.log(rain);
}
