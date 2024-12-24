import './App.css';
import './CSS/ventana_modal.css'
import Cargatotal from './MIS_COMPONENTES/cargaTotal';
import CargaPersonalizada from './MIS_COMPONENTES/cargaPersonalizada';
import Buscador from './MIS_COMPONENTES/barraBuscador';
import { useState } from 'react';
function App() {

  const [componente, setComponente] = useState(null);

  function componente1() {
    setComponente(<Cargatotal />)
  }

  function componente2(valor) {
    setComponente(<CargaPersonalizada props={valor} />)
  }


  function componente3() {
    setComponente(<Buscador />)
  }


  return (
    <div className="App">
      <header>
        <h1>Mi Pokedex con React</h1>

        <nav className='cont_botonesApi'>
          <button className='botonApi' onClick={() => componente1()}>Todos</button>
          <button className='botonApi' onClick={() => componente2('fire')}>Fuego</button>
          <button className='botonApi' onClick={() => componente2('water')}>Agua</button>
          <button className='botonApi' onClick={() => componente2('electric')}>Electro</button>
          <button className='botonApi' onClick={() => componente2('grass')}>Hierba</button>
          <button className='botonApi' onClick={() => componente2('bug')}>Insecto</button>
          <button className='botonApi' onClick={() => componente2('poison')}>Veneno</button>
          <button className='botonApi' onClick={() => componente2('ground')}>Tierra</button>
          <button className='botonApi' onClick={() => componente2('fairy')}>Magia</button>
          <button className='botonApi' onClick={() => componente2('psychic')}>Psiquico</button>
          <button className='botonApi' onClick={() => componente2('fighting')}>Lucha</button>
          <button className='botonApi' onClick={() => componente2('rock')}>Roca</button>
          <button className='botonApi' onClick={() => componente2('ghost')}>Fantasma</button>
          <button className='botonApi' onClick={() => componente2('ice')}>Hielo</button>
          <button className='botonApi' onClick={() => componente2('normal')}>Normal</button>
        </nav>


        <div className='cont_buscador'>
          <input id='buscador' className='buscador' list='dataList' placeholder='Buscar...'></input>
          <datalist id='dataList'></datalist>
          <button id='barra_buscador' className='boton_buscador' onClick={() => componente3()}>Buscar</button>
        </div>
      </header>

      <section id='contenedorApi' className='contenedorApi'></section>
      <h1>Hecho Por Jonathan Gamon</h1>






      {/* ventana modal */}
      <div className='cont_ventana_modal' id='cont_ventana_modal'>
        <div className='ventana_modal' id='ventana_modal'>
          <img id='imagen_pokemon' src='' alt='img_pokemon' />

          <div className='datos'>
            <h1 id='nombre_pokemon'>nombre:</h1>
            <p id="dalud">salud:</p>
            <p id="ataque">ataque:</p>
            <p id="defensa">defensa:</p>
            <p id="ataque_especial">ataque especial:</p>
            <p id="defensa_especial">defensa especial:</p>
            <p id="velocidad">velocidad:</p>
          </div>


          <button id='boton_modal'>X</button>
        </div>
      </div>
      {componente}
    </div>
  );
}

export default App;