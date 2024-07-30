console.log(fetchPokemon())

function fetchPokemon (){
    fetch('https://santosnr6.github.io/Data/pokemons.json')
    .then((response) => response.json())
    .then((data) => {
       data.forEach(obj => {
        console.log(obj);
       })
    })
    .catch(error => console.log(error));

    
}