const loadCountres = () =>{
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => displayCountres(data));
}
const displayCountres = countres =>{
    const countresContainer = document.getElementById("country-container");
    // for(const country of countrys){
    //     console.log(country);
    // }
    countres.forEach(country =>{
        // console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country Name- ${country.name.common}</h3>
        <p>Country Capital- ${
          country.capital ? country.capital[0] : "No Capital"
        } </p>
        <p>Is Independent- ${
          country.independent
            ? "Yes it is a independent Country"
            : "It not a Independenet Country"
        }</p>
        <button onclick="loadCountryDetalis('${country.cca2}')">Detalis</button>
        `;
        countresContainer.appendChild(countryDiv)
    });
}

const loadCountryDetalis = (code) =>{
  //https://restcountries.com/v3.1/alpha/{code}
    const url = ` https://restcountries.com/v3.1/alpha/${code}`;
//   console.log("Country Detail", code);
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayCountryDetalis(data[0]));
}

const displayCountryDetalis = country =>{
    console.log(country)
    const countryDetail = document.getElementById("country-detail")
    countryDetail.innerHTML = `
    <h2>Detalis -${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;
}

loadCountres()