fetchPokemon();

function fetchPokemon (){
    fetch('https://santosnr6.github.io/Data/pokemons.json')
    .then((response) => response.json())
    .then((data) => {
       data.forEach(obj => {
        document.body.innerHTML += `<img src='${obj.image}' /> ${obj.name} </br>`;
       })
    })
    .catch(error => console.log(error));

    
}