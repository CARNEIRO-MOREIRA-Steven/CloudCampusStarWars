console.log('script présent')

const url = ('https://swapi.py4e.com/api/planets/');
const tbodyPlanet = document.querySelector('.tbody-planet')
const numberResult = document.querySelector('.number-result')

fetch(url)
.then((response) => response.json())
.then((data) => {
    const planetsDetails = data.results.map(planet => ({
        name : planet.name,
        terrain : planet.terrain}));

    for (let i = 0; i < planetsDetails.length; i++){
        console.log(planetsDetails[i].name, planetsDetails[i].terrain);
        
        const tr = document.createElement('tr')

        const namePlanets = document.createElement('th')
        namePlanets.textContent = planetsDetails[i].name;

        const terrainPlanets = document.createElement('td')
        terrainPlanets.textContent = planetsDetails[i].terrain

        tr.appendChild(namePlanets)
        tr.appendChild(terrainPlanets)

        tbodyPlanet.appendChild(tr)
    }
    console.log(data)
    const numberPlanets = data.count
    numberResult.innerHTML = (`${numberPlanets} résultat(s)`)
});