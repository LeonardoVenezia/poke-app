import React, {Component} from 'react';
import {connect, useSelector} from 'react-redux';

const CantidadPokemonHook = () => {

    const game_shop = useSelector((state) => state.game_shop)

    return (
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>
    )
}

const mapStaetToProps = (state) => {
    return {
        game_shop: state.game_shop
    }
}

export default CantidadPokemonHook;