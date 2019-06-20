import React from 'react';
import { Store } from './Store';

import EpisodesList from './EpisodeList'

export default function FavPage() {
    const { state, dispatch } = React.useContext(Store);

    const toggleFavAction = episode => {
        // boolean to check if the the episode object is already in fav
        const episodeInFavourites = state.favourites.includes(episode);
        // declare object that we are going to dispatch with add_fav at default
        let dispatchObj ={
          type: 'ADD_FAV',
          // payload is the episode that we clicked on
          payload: episode
        };
    
        if(episodeInFavourites) {
          //  make a array which have every element except the one with was already in fav and being clicked on right now (passed into the function as 'episode')
          const favouriteWithoutEpisodes = state.favourites.filter(fav => fav.id !== episode.id)
          dispatchObj = {
            type: 'REMOVE_FAV',
            // payload is the array,replace favourite array with the new array that we just made above
            payload: favouriteWithoutEpisodes
          }
        }
        return dispatch(dispatchObj);
      }

    const props = {
        episodes: state.favourites,
        toggleFavAction: toggleFavAction,
        favourites: state.favourites
    };
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        <div className='episode-layout'>
            <EpisodesList {...props} />
        </div>
        </React.Suspense>
    );
}