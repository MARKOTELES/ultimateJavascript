let nombre = "Gohan";
let anime = "Goku";
let edad = 14;

let personaje = {
    nombre: "Gohan",
    anime: "Goku",
    edad: 14, 
};
console.log(personaje);
console.log(personaje.nombre); //llama a una propiedad en especifico
console.log(personaje ['anime']); //otra forma de llamar a una propiedad en especifico

delete personaje.anime;
console.log(personaje);

