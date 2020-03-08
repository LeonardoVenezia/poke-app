import Axios from "axios";

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCES = 'FETCH_POKEMON_SUCCES';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemonRequest = () => {
    return {
        type: 'FETCH_POKEMON_REQUEST'
    }
}

export const fetchPokemonSucces = (Pokemon) => {
    return {
        type: 'FETCH_POKEMON_SUCCES',
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return {
        type: 'FETCH_POKEMON_FAILURE',
        payload: error
    }
}

const fetchPokemon = (valor) => {
 return (dispatch) => {
    dispatch(fetchPokemonRequest())
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    .then(response => {
        dispatch(fetchPokemonSucces([response.data]))
    })
    .catch(error => {
        dispatch(fetchPokemonFailure('No se ecnontró el pokemon'))
    })
 }
}

export default fetchPokemon;