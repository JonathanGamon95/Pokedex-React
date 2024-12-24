const ventana_modal = (salud, ataque, defensa, ataque_especial, defensa_especial, velocidad, imagen, nombrePokemon) => {
    const CONT_VETANA_MODAL = document.getElementById("cont_ventana_modal");
    const VENTANA_MODAL = document.getElementById("ventana_modal");
    const IMAGEN_POKEMON = document.getElementById("imagen_pokemon");
    const BOTON_MODAL = document.getElementById("boton_modal");

    const NOMBRE_POKEMON = document.getElementById("nombre_pokemon");
    const SALUD = document.getElementById("dalud");
    const ATAQUE = document.getElementById("ataque");
    const DEFENSA = document.getElementById("defensa");
    const ATAQUE_ESPECIAL = document.getElementById("ataque_especial");
    const DEFENSA_ESPECIAL = document.getElementById("defensa_especial");
    const VELOCIDAD = document.getElementById("velocidad");

    NOMBRE_POKEMON.textContent = nombrePokemon;
    SALUD.textContent = "Salud: " + salud;
    ATAQUE.textContent = "Ataque: " + ataque;
    DEFENSA.textContent = "Defensa: " + defensa;
    ATAQUE_ESPECIAL.textContent = "Ataque Especial: " + ataque_especial;
    DEFENSA_ESPECIAL.textContent = "Defensa Especial: " + defensa_especial;
    VELOCIDAD.textContent = "Velocidad: " + velocidad;

    IMAGEN_POKEMON.setAttribute("src", imagen);
    CONT_VETANA_MODAL.style.visibility = "visible";
    VENTANA_MODAL.style.opacity = "100%";

    BOTON_MODAL.addEventListener("click", () => {
        VENTANA_MODAL.style.opacity = "0%"
        CONT_VETANA_MODAL.style.visibility = "hidden"
    })
}





const Buscador = () => {
    const INPUT_BUSCADOR = document.getElementById("buscador");
    const LIMITE_DE_CARGA = 150;

    for (let i = 0; i <= LIMITE_DE_CARGA; i++) {
        const URL = "https://pokeapi.co/api/v2/pokemon/" + i;

        fetch(URL)
            .then(Response => Response.json())
            .then(dato => {
                //datos obtenidos:
                const imagen = dato.sprites.other.dream_world.front_default;
                const nombrePokemon = dato.name;
                // const tipo = dato.types[0].type.name;
                // const posicion = dato.id;

                const salud = dato.stats[0].base_stat;
                const ataque = dato.stats[1].base_stat;
                const defensa = dato.stats[2].base_stat;
                const ataque_especial = dato.stats[3].base_stat;
                const defensa_especial = dato.stats[4].base_stat;
                const velocidad = dato.stats[5].base_stat;

                if (nombrePokemon === INPUT_BUSCADOR.value) {
                    ventana_modal(salud, ataque, defensa, ataque_especial, defensa_especial, velocidad, imagen, nombrePokemon);
                    INPUT_BUSCADOR.value = "";
                }
            })
    }
}

export default Buscador;