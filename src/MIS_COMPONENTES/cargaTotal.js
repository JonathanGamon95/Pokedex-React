const LIMITE_DE_CARGA = 150;

function eliminacion() {
    const GALERIA = document.getElementById("contenedorApi");
    let lista = GALERIA.children;

    while (lista.length > 0) {
        lista[0].remove();
    }
}





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



const agregarOpciones = (nombre) => {
    const DATALIST = document.getElementById("dataList");

    const OPCION = document.createElement("option");
    OPCION.textContent = nombre;
    DATALIST.appendChild(OPCION);
}


const eliminacion_opciones = () => {
    const DATALIST = document.getElementById("dataList");
    let LISTA = DATALIST.children;

    while (LISTA.length > 0) {
        LISTA[0].remove();
    }
}




const Cargatotal = () => {
    const GALERIA = document.getElementById("contenedorApi");
    eliminacion();
    eliminacion_opciones();

    for (let i = 0; i <= LIMITE_DE_CARGA; i++) {
        const URL = "https://pokeapi.co/api/v2/pokemon/" + i;

        fetch(URL)
            .then(Response => Response.json())
            .then(dato => {
                const imagen = dato.sprites.other.dream_world.front_default;
                const nombrePokemon = dato.name;
                const tipo = dato.types[0].type.name;
                const posicion = dato.id;


                const salud = dato.stats[0].base_stat;
                const ataque = dato.stats[1].base_stat;
                const defensa = dato.stats[2].base_stat;
                const ataque_especial = dato.stats[3].base_stat;
                const defensa_especial = dato.stats[4].base_stat;
                const velocidad = dato.stats[5].base_stat;




                const DIV_PADRE = document.createElement("div");
                DIV_PADRE.setAttribute("class", "pokeApi");

                const DIV_CONT_IMAGEN = document.createElement("div");
                DIV_CONT_IMAGEN.setAttribute("class", "cont_imagen");

                const IMAGEN = document.createElement("img");
                IMAGEN.setAttribute("src", imagen);



                const DIV_CONT_DATOS = document.createElement("div");
                DIV_CONT_DATOS.setAttribute("className", "cont_datos");

                const h1 = document.createElement("h1");
                const p1 = document.createElement("p");
                const p2 = document.createElement("p");

                h1.textContent = nombrePokemon;
                p1.textContent = tipo;
                p2.textContent = "N°: " + posicion;

                // introduccion
                DIV_CONT_IMAGEN.appendChild(IMAGEN);
                DIV_CONT_DATOS.append(h1, p1, p2);
                DIV_PADRE.append(DIV_CONT_IMAGEN, DIV_CONT_DATOS);
                DIV_PADRE.addEventListener("click", () => ventana_modal(salud, ataque, defensa, ataque_especial, defensa_especial, velocidad, imagen, nombrePokemon))
                GALERIA.appendChild(DIV_PADRE);
                agregarOpciones(nombrePokemon);
            })
    }
}

export default Cargatotal;