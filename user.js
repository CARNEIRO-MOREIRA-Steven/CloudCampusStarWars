console.log('script présent')

const url = "https://swapi.py4e.com/api/people"

const numberUser = document.querySelector('.number-user')

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.count)
        numberUser.textContent = data.count
    })
