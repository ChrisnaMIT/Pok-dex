const boutonPoke = document.querySelector('.boutonPokemon')
const colonne =document.querySelector('.colonne')
const choisisUnPokemon = document.querySelector('.pokemonName')


//boutonPoke.addEventListener('click',);
console.log('test1')

let header = {
    'Content-Type': 'application/json'
}

let bodyEnJavaScript = {
    name: "",              // PUT
    body:"Il était une fois",
    userId: 21
}

const namePokemon = document.querySelector('.namePokemon')
const abilitiesNamePokemonOne =document.querySelector('.abilitiesNamePokemonOne')
const abilitiesNamePokemonTwo =document.querySelector('.abilitiesNamePokemonTwo')
const imagePokemon = document.querySelector('#imagePokemon')

function choisisUnPokemonAleatoir(){


}




function recupereLesDonneesPokemon(){

    const randomPoke = [Math.floor(Math.random() * 1010) + 1];

    fetch(`https://pokeapi.co/api/v2/pokemon/` + randomPoke)
        .then(res => res.json())
        .then(data => {


            console.log(data)

            namePokemon.innerHTML = data.name;
            abilitiesNamePokemonOne.innerHTML = data.abilities[0].ability.name;
            abilitiesNamePokemonTwo.innerHTML = data.abilities[1].ability.name;
            imagePokemon.src = data.sprites.front_default;


        })

}
recupereLesDonneesPokemon()




