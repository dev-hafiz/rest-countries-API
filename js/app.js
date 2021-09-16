// Load Countries API
const loadRestDaat = () => {
     fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(data => showInUiDisplay(data))
}
//Call This Function
loadRestDaat()


// UI show DATA 
const showInUiDisplay = countries => {
     const countriesParant = document.getElementById('countries');

     const UiUpdate = countries.map(country => makeHTMlComponant(country));
     countriesParant.innerHTML = UiUpdate.join(' ');
}


// Makes componant 
const makeHTMlComponant = country => {
     return `
     <div class = "country-style">
     
     <h2>${country.name}</h2>
     <h4>${country.capital}</h4>
     <h5>${country.population}</h5>
     <h5>${country.borders}</h5>
     <img src = "${country.flag}">
     </div>

      `
}