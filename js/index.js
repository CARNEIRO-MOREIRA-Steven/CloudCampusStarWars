console.log('script index présent')

onInit();

async function onInit(){
    addDateToMission();
    
    const peoples = await getPeople();
    addPeopleToTexte(peoples)

    const vehicules = await getVehicules();
    addVehiculesToTexte(vehicules)

    const planetes = await getPlanets();
    addPlanetesToTexte(planetes)
}

//HUMAINS
async function getPeople (){
    let response = await fetch(urlPeople);
    let data = await response.json();
    return data.count;
} 

function addPeopleToTexte(peoples){
    const numberUser = document.querySelector('.number-user')
    numberUser.textContent = peoples
}

//VEHICULES
async function getVehicules(){
    let response = await fetch(urlVehicles);
    let data = await response.json();
    return data.count
}

function addVehiculesToTexte(vehicules){
    const numberVehicles = document.querySelector('.number-vehicles')
    numberVehicles.textContent = vehicules
}

//PLANETES
async function getPlanets(){
    let response = await fetch(urlPlanets);
    let data = await response.json();
    return data.count
}

function addPlanetesToTexte(planetes){
    const numberPlanets = document.querySelector('.number-planets')
    numberPlanets.textContent = planetes
}

function addDateToMission(){
const dateMission = document.querySelector('.date-mission')

const today = new Date();
const twoYearsLater = new Date(today);

twoYearsLater.setFullYear(today.getFullYear() + 2);

const formattedDate = twoYearsLater.toLocaleDateString("fr-FR");

console.log(formattedDate);
dateMission.textContent = formattedDate
}
