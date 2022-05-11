'use strict'

let pintaShiny;
var actualPokemon = Math.floor(Math.random() * 897);
class Pokemon {
    constructor(imagen,imagenShiny,nombre,exp,ataque,shiny){
        this.imagen = imagen;
        this.imagenShiny = imagenShiny;
        this.nombre = nombre;
        this.exp = exp;
        this.ataque = ataque;
        this.shiny = shiny;
    }
}
let p;
function getPokemon(numPokemon) {
    let RandShiny = Math.floor(Math.random() * 2); // 1/4096
    let esShiny = true;
    return HTTP.ajax('GET',`https://pokeapi.co/api/v2/pokemon/`+ numPokemon).then(
        data => {
            if(RandShiny==1) esShiny = true;
            else esShiny = false;
            pintaShiny = esShiny;
            p = new Pokemon(data.sprites.front_default, data.sprites.front_shiny, data.name, data.base_experience, data.stats[1].base_stat, esShiny);
            PintaPokemon(p);
        }
    )
}



let botonSiguiente = document.querySelector(".siguiente")
botonSiguiente.addEventListener("click", function( event ) {
    if(actualPokemon != 898) actualPokemon++;
    else actualPokemon = 1;
    getPokemon(actualPokemon);
}, true);

let botonAnterior = document.querySelector(".anterior")
botonAnterior.addEventListener("click", function( event ) {
    if(actualPokemon != 1) actualPokemon--;
    else actualPokemon = 898;
    getPokemon(actualPokemon);
}, true);

let botonBuscar = document.querySelector(".buscar")
botonBuscar.addEventListener("click", function( event ) {
    let busqueda = document.querySelector(".idPokemon");
    if(busqueda.value > 0 && busqueda.value <= 898) {
        getPokemon(busqueda.value);
        actualPokemon = busqueda.value;
    }
}, true);

let botonCambio = document.querySelector(".shiny");
botonCambio.addEventListener("click", function( event ) {
    pintaShiny = !pintaShiny;
    if (pintaShiny) document.querySelector(".card-img-top").setAttribute("src",p.imagenShiny);
    else document.querySelector(".card-img-top").setAttribute("src",p.imagen);
    }, true);


let capa = document.querySelector(".pokemon");
function PintaPokemon(pokemon){
    const nombreBien = pokemon.nombre.charAt(0).toUpperCase() + pokemon.nombre.slice(1) + " [ "+actualPokemon+" ]";
    
    document.querySelector(".card-title").innerHTML=nombreBien;
    document.getElementById("exp").innerHTML="EXPERIENCE - "+pokemon.exp;
    document.getElementById("att").innerHTML="ATTACK - "+pokemon.ataque;
    let botonShiny;
    if (pokemon.shiny) {
        document.querySelector(".card-img-top").setAttribute("src",pokemon.imagenShiny);
        botonShiny="Ver Normal";
    }
    else {
        document.querySelector(".card-img-top").setAttribute("src",pokemon.imagen);
        botonShiny="Ver Shiny";
    }
    document.querySelector(".shiny").innerHTML=botonShiny;

    
}
PintaPokemon(getPokemon(actualPokemon));
buscaPokemon();