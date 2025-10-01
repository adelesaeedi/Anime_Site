import Anime from "./Anime";

function AnimeList({series,onItemClick}) {
    const renderedList = series.map((anime) => (<Anime anime={anime} onAnimeClick={onItemClick} key={anime.mal_id}/>));
       return(<div>{renderedList}</div>) 
}

export default AnimeList;