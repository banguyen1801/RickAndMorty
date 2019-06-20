import React,{useEffect} from 'react';
import { Store } from './Store';
import EpisodeList from './EpisodeList';


export default function App() {

  const {state, dispatch} = React.useContext(Store);


  const fetchDataAction = async () => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  };

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
  useEffect( () => {
    state.episodes.length === 0 && fetchDataAction();
  }, [])

  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  };
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        {console.log(state)}      
          <section className="episode-layout">
            <EpisodeList {...props}/>
          </section>
      </React.Suspense>
    </React.Fragment>
  );
}