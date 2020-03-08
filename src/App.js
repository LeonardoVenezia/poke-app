import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import CantidadPokemon from './components/CantidadPokemon';
// import ComprarPokemon from './components/ComprarPokemon';
import {Provider} from 'react-redux';
import store from './redux/store';
import CantidadPokemonHook from './components/CantidadPokemon.hook';
import ComprarPokemonHook from './components/ComprarPokemon.hook';
import BuscadorPokemon from './components/buscador/ResultadoPokemon';
import ResultadoPokemon from './components/buscador/BuscadorPokemon';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{maxWidth: '370px'}}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={require('./img/pokemon.jpg')} alt='Pokemon' className='card-img' />
                </div>
                <div className="col-8">
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <CantidadPokemonHook/>
                      <ComprarPokemonHook/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <ResultadoPokemon></ResultadoPokemon>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon></BuscadorPokemon>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
