async function afficherCity() {
    const response = await fetch ("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${$filter=adress eq 'Tokyo,Japan' or adress eq 'Osaka,Japan' or adress eq 'Yokohama,Japan' or adress eq 'Nagoya,Japan' or adress eq 'Sapporo,Japan' or adress eq 'Kobe,Japan' or adress eq 'Kyoto,Japan' or adress eq 'Fukuoka,Japan'}?unitGroup=metric&key=EMMSPMZNCSEFKYYZ3GZ8LYVBR&contentType=json");
    const city = await response.json();

    city.resolvedAddress.forEach(city => { 
        console.log(city);
    })
}

afficherCity();