/////Exercise 1

// fetchPokemon();

// function fetchPokemon() {
//   fetch("https://santosnr6.github.io/Data/pokemons.json")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((obj) => {
//         document.body.innerHTML += `<img src='${obj.image}' /> ${obj.name} </br>`;
//       });
//     })
//     .catch((error) => console.log(error));
// }

//Exercise 2
renderDogs();

async function renderDogs(){
    let dogs = await fetchDogs();
    dogs.forEach(dog => {
        console.log(dog);
    });


}

async function fetchDogs(){
    try {
    let response = await fetch('https://majazocom.github.io/Data/dogs.json');
    let data = await response.json();
    return data;
    } catch(error){
        console.log(error);
    }
}
