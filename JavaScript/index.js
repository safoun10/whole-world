const asia = "asia";
const africa = "africa";
const europe = "europe";
const america = "americas";
const oceania = "oceania";

function getAPI(region) {
    const countryContainer = document.getElementById("country-container");
    countryContainer.innerHTML = "";
    fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(data => data.json())
        .then(json => processData(json))
        .catch(error => console.log(error))
}

const processData = data => {
    const countryContainer = document.getElementById("country-container")
    data.forEach(element => {
        const country = document.createElement("div");
        country.classList.add("fs-6", "card", "col-10", "col-md-6", "col-lg-4", "mx-auto", "custom-card", "p-0")
        const currencies = Object.keys(element.currencies).join(", ");
        country.innerHTML = `
            <img class="img-fluid h-100 rounded-top-2" src=${element.flags.png}>
            <div class="card-body">
                <div>Country Name : ${element.name.common}</div>
                <div>Capital : ${element.capital[0]}</div>
                <div>Currency : ${currencies}</div>
            </div>
        `
        countryContainer.appendChild(country);
    });
}