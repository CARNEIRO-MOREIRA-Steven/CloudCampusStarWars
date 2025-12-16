console.log('script index présent')

const urlPeople = "https://swapi.py4e.com/api/people";
const urlVehicles = "https://swapi.py4e.com/api/starships";
const urlPlanets = "https://swapi.py4e.com/api/planets";

const numberUser = document.querySelector('.number-user')
const numberVehicles = document.querySelector('.number-vehicles')
const numberPlanets = document.querySelector('.number-planets')
const dateMission = document.querySelector('.date-mission')

fetch(urlPeople)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.count)
        numberUser.textContent = data.count
})

fetch(urlVehicles)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.count)
        numberVehicles.textContent = data.count
})

fetch(urlPlanets)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.count)
        numberPlanets.textContent = data.count
})

const today = new Date();
const twoYearsLater = new Date(today);

twoYearsLater.setFullYear(today.getFullYear() + 2);

const formattedDate = twoYearsLater.toLocaleDateString("fr-FR");

console.log(formattedDate);
dateMission.textContent = formattedDate

