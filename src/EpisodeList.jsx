import React from 'react';
import defaultImg from './assets/defaultImg.jpg';

export default function EpisodeList (props) {
    const {episodes, toggleFavAction, favourites} = props;
     return episodes.map(episode => {
        return (
          
          <section className="episode-box" key={episode.id}>

            {episode.image !== null ? <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/> :
                                      <img src={defaultImg} style={{height: '150px', width:'150px'}} alt="Default" /> } 


            <div>{episode.name}</div>
            <section>
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
            <button type='button' onClick={() => toggleFavAction(episode)}>
              {/* find fav item in array favourites and if fav item id is equal to the episode id = then the episode is already in the fav array -> turn the fav text to unfar */}
              {favourites.find(fav => fav.id === episode.id) ? 'Unfav' : 'Fav'}
            </button>
            </section>
          </section>
        );
    })
}