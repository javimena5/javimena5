'use strict'
let capa = document.querySelector(".pokemon");
var actualPokemon = Math.floor(Math.random() * 897);
class Pokemon {
    constructor(imagen,nombre,exp,ataque){
        this.imagen = imagen;
        this.nombre = nombre;
        this.exp = exp;
        this.ataque = ataque;
    }
}
function getPokemon(numPokemon) {
    let shiny = Math.floor(Math.random() * 4095); // 1/4096
    return HTTP.ajax('GET',`https://pokeapi.co/api/v2/pokemon/`+ numPokemon).then(
        data => {
            let p;
            if(shiny==1) p = new Pokemon(data.sprites.front_shiny,data.name,data.base_experience,data.stats[1].base_stat);
            else p = new Pokemon(data.sprites.front_default,data.name,data.base_experience,data.stats[1].base_stat)
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

function PintaPokemon(pokemon){
    let cadena = "";
    const nombreBien = pokemon.nombre.charAt(0).toUpperCase() + pokemon.nombre.slice(1) + " [ "+actualPokemon+" ]";
    cadena += "<div class=\"card\">";
    cadena += "<img class=\"card-img-top\" src=\""+pokemon.imagen+"\">"
    cadena+= "<div class=\"card-body\">"
    cadena+= "<h5 class=\"card-title\">"+nombreBien+"</h5>"
    cadena+= "<div class=\"card-text\">EXP - "+pokemon.exp+"</div>"
    cadena+= "<div class=\"card-text\">ATTACK - "+pokemon.ataque+"</div>"
    cadena += "</div></div>"
    capa.innerHTML = cadena;
    console.log(pokemon.nombre)
}
PintaPokemon(getPokemon(actualPokemon));
buscaPokemon();