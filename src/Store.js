import React from 'react'

export const Store = React.createContext();

const initialState = {
    episodes: [],
    favourites: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_DATA':
          return { ...state, episodes: action.payload };
          // add_fav REPLACE the favourites array with a new array with the new favourite array with new fav episode added in
        case 'ADD_FAV':
          return {...state,
            favourites:[...state.favourites, action.payload]};
          // remove_fav REPLACE the favourite array with the new favourite array that got the target episode removed
        case 'REMOVE_FAV':
          return {...state,
            favourites: action.payload}
        default:
          return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}