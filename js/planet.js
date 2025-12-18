console.log('script présent')
console.log(urlPlanets)

onInit();

async function onInit(){
    const planets = await getPlanets(urlPlanets)
    numberPlanets(planets)
    nameAndTerrainPlanets(planets)
    console.log(planets)

    detailsPlanets(planets)

    filterPopulationPlanet(planets)
}

async function getPlanets(urlPlanets){
    let planets = []

    while(urlPlanets){
        const response = await fetch(urlPlanets);
        const data = await response.json();
        planets.push(...data.results)

        urlPlanets = data.next
    }
    return planets
}

function numberPlanets(planets){
    const numberResult = document.querySelector('.number-result')
    numberResult.innerHTML = (`${planets.length} résultat(s)`)
}

function nameAndTerrainPlanets(planets){
    const tbodyPlanet = document.querySelector('.tbody-planet')
    console.log(planets)
    const planetsDetails = planets.map(planet => ({
        name : planet.name,
        terrain : planet.terrain}));

    for (let i = 0; i < planetsDetails.length; i++){
        console.log(planetsDetails[i].name, planetsDetails[i].terrain);
        
        const tr = document.createElement('tr')
        tr.className = planetsDetails[i].name
        
        const namePlanets = document.createElement('th')
        namePlanets.textContent = planetsDetails[i].name;

        const terrainPlanets = document.createElement('td')
        terrainPlanets.textContent = planetsDetails[i].terrain

        tr.appendChild(namePlanets)
        tr.appendChild(terrainPlanets)

        tbodyPlanet.appendChild(tr)
    }
}

async function detailsPlanets(planets){
    console.log(planets)
    const trPlanets = document.querySelectorAll('.tbody-planet tr')
    console.log(trPlanets.length)
    let trPlanetsDetails = " "
    for(let i = 0; i < trPlanets.length; i++){
        trPlanets[i].addEventListener('click', function(){
            document.querySelector('.last-title').classList.add('off');
            document.querySelector('.details-planetes').classList.add('on');
            const trPlanetsName = this.className  
            console.log(trPlanetsName)

            const planet = planets.find(element => element.name === trPlanetsName)

            if(planet){
                console.log('Planète cliqué :', planet.name);
                console.log('Population :', planet.population)
                console.log('Diamètre :', planet.diameter)
                console.log('Terrain :', planet.terrain)
                console.log('Gravité :', planet.gravity)
                console.log('Climat :', planet.climate)

                document.querySelector('.title-planete').textContent = planet.name
                document.querySelector('.population-planete').textContent = planet.population
                document.querySelector('.diametre-planete').textContent = planet.diameter
                document.querySelector('.terrain-planete').textContent = planet.terrain
                document.querySelector('.gravite-planete').textContent = planet.gravity
                document.querySelector('.climat-planete').textContent = planet.climate
            } 
        });   
    }    
}
async function filterPopulationPlanet(planets) {
    const filter = document.getElementById('filter')
    filter.addEventListener('click', function () {
        const selectedValue = filter.value
        console.log(selectedValue)

        let filterPlanets = planets

        if (selectedValue === '0 à 100.000') {
            console.log('Sélection de 0 à 100.000')
            filterPlanets = planets.filter(planet =>
                planet.population >= 0 && planet.population <= 100000
            )

            console.log(filterPlanets)
        } else if (selectedValue === '100.000 à 100.000.000') {
            console.log('Sélection de 100.000 à 100.000.000')
            filterPlanets = planets.filter(planet => planet.population
                >= 100000 && planet.population <= 100000000
            )
            console.log(filterPlanets)
        } else if (selectedValue === '+100.000.000') {
            console.log('Sélection de +100.000.000')
            filterPlanets = planets.filter(planet => planet.population
                >= 100000000
            )
            console.log(filterPlanets)
        } else if (selectedValue === 'unknown') {
            console.log('unknown')
            filterPlanets = planets.filter(planet => planet.population
                === "unknown"
            )
            console.log(filterPlanets)
        }

        const tbodyPlanet = document.querySelector('.tbody-planet')
        tbodyPlanet.innerHTML = ''

        nameAndTerrainPlanets(filterPlanets)
        detailsPlanets(filterPlanets)
        numberPlanets(filterPlanets)
    })
}