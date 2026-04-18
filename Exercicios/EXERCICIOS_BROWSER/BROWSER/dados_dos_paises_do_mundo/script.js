/* 
Países do Mundo
-----------------------------------------
Neste aplicação vamos usar a API REST Countries para obter dados sobre os países do mundo.
https://restcountries.com/
Vamos carregar a lista de todos os países existentes e vamos adicionar ao select.
Ao escolher um país da lista, vamos carregar dados desse país e exibir na tela.
Vamos exibir o nome do país, a bandeira, a capital e a população, entre outras informações.
*/

const selectCountry = document.querySelector("#selectCountry");

const countryInfo = document.querySelector("#countryInformation");
const countryFlag = document.querySelector("#countryFlag");
const countryName = document.querySelector("#countryName");
const countryCapital = document.querySelector("#countryCapital");
const countryRegion = document.querySelector("#countryRegion");
const countryArea = document.querySelector("#countryArea");
const countryPopulation = document.querySelector("#countryPopulation");
const countryLanguages = document.querySelector("#countryLanguages");

const apiBaseURL = 'https://restcountries.com/v3.1';

fetchCountriesNames();

selectCountry.addEventListener('change', getCountryData);

async function fetchCountriesNames(){
    
    try {
        
        const response = await fetch(`${apiBaseURL}/all?fields=name`);

        // valida a resposta
        if(!response.ok){
            throw new Error('Erro ao buscar os nomes dos países');
        }

        const countries = await response.json();

        // lista de países
        const countriesNames = countries.map(country => country.name.common).sort();

        // preencher o select
        countriesNames.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            selectCountry.appendChild(option);
        });

    } catch (error) {
        console.error('Erro: ', error);
    }

}

async function getCountryData(){

    const selectedCountry = selectCountry.value;

    try {
        const response = await fetch(`${apiBaseURL}/name/${selectedCountry}`);

        if(!response.ok){
            throw new Error('Não foi possível pesquisar os dados do país selecionado.');
        }

        const data = await response.json();
        const countryData = data[0];

        // exibir os dados do país
        countryFlag.src = countryData.flags.svg;
        countryName.innerHTML = countryData.name.common;
        countryCapital.innerHTML = `Capital: <span class="font-bold">${countryData.capital ? countryData.capital[0] : 'N/A'}</span>`;
        countryRegion.innerHTML = `Região: <span class="font-bold">${countryData.region}</span>`;
        countryArea.innerHTML = `Área: <span class="font-bold">${countryData.area} km<sup>2</sup></span>`;
        countryPopulation.innerHTML = `População: <span class="font-bold">${countryData.population}</span>`;
        countryLanguages.innerHTML = `Idiomas: <span class="font-bold">${Object.values(countryData.languages || {}).join(", ") || 'N/A'}</span>`;

        // exibição do espaço no HTML
        countryInfo.classList.remove("hidden");
        
    } catch (error) {
        console.error('Erro: ', error);
    }
}