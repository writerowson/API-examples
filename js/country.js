const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        // fetch('https://restcountries.com/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }   
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick ="loadCountryByNAme('${country.name}')"> Details
        `;
        countriesDiv.appendChild(div)

    });
    //------------- or ---------->
    // const countriesDiv = document.getElementById('countries')
    // countries.forEach(country => {
    //     console.log(country)
    //     const div = document.createElement('div');
    //     div.classList.add('country')
    //     const h3 = document.createElement('h3');
    //     h3.innerText = country.name;
    //     div.appendChild(h3);
    //     const p = document.createElement('p');
    //     p.innerText = country.capital;
    //     div.appendChild(p)
    //     countriesDiv.appendChild(div)

    // });
}

const loadCountryByNAme = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    const countryDiv = document.getElementById('Country-details');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>population: ${country.population}</p>\
    <img width="200px" src= "${country.flag}">
    
    `

}

