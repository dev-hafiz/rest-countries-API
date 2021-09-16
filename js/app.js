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
     console.log(countries);
     const countriesParant = document.getElementById('countries');
     const UiUpdate = countries.map(country => makeHTMlComponant(country));
     countriesParant.innerHTML = UiUpdate.join(' ');
}


// Makes componant 
const makeHTMlComponant = country => {
     const {
          name,
          capital,
          population,
          borders,
          flag
     } = country;
     return `
     <div class = "country-style">
     <h2>Country : ${name}</h2>
     <h4>City Name : ${capital}</h4>
     <h5>Population : ${population}</h5>
     <h5>Country Borders : ${borders}</h5>
     <img src = "${flag}">
     </div>

      `
}