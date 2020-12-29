
import uri from '../config/config';

const SeriesApi = async ()=>{
  const api = await fetch(`${uri}getShows`, 
  {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  let json = await api.json();
  if (json === 'error'){
    console.log('error')
  }else{
    return json.sort((a, b) => a.name < b.name ? -1 : 1);
  }
};

export const SearchTvShowApi = async (show)=>{
  let api = await fetch(`${uri}searchShows`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      show: show
    })
  });
  let json = await api.json();
  if (json === 'error'){
    console.log('error')
  }else{
    return json.sort((a, b) => a.name < b.name ? -1 : 1);
  }
};

export const GetFavoriteShow = async (id)=>{

  let api = await fetch(`${uri}getFavoriteShow`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      showId: id
    })
  });
  let json = await api.json();
  if (json === 'error'){
    console.log('error')
  }else{
    return json
  }
};

export const GetIsFavorite = async ()=>{
  let api = await fetch(`${uri}getIsFavorite`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: 2
    })
  });
  let json = await api.json();
  if (json === 'error'){
    console.log('error')
  }else{
    return json
  }
};

export const AddFavoriteShow = async (id)=>{
  let api = await fetch(`${uri}addFavoriteShow`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      showId: id,
      userId: 2
    })
  });
  let json = await api.json();
  if (json === 'error'){
    console.log('error')
  }else{
    return json
  }
};

export const DeleteFavoriteShow = async (id)=>{
  let api = await fetch(`${uri}deleteFavoriteShow`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      showId: id,
      userId: 2
    })
  });
  let json = await api.json();
  if (json === 'error'){
    console.log('error')
  }else{
    return json
  }
};

const FullGenresList = async (list)=>{
  const allGenres = []
  const allShows = list;
  allShows.map((show) => {
    const {genres} = show
    genres.filter(item => allGenres.push(item))

  });
  const setUniqueGenre = new Set(allGenres);
  const arrayUniqueGenre = [...setUniqueGenre].sort((a, b) => a < b ? -1 : 1);
  
  return arrayUniqueGenre

};


const ShowsByGenre = async ()=>{   

  const allShowsByGenre = [];
  const allShows = await SeriesApi();
  const genresList = await FullGenresList(allShows);
  genresList.filter((genre)=>{
    let objetoShowByGenre = {
      genre: genre,
      shows: allShows.filter((show)=>{
        let genres = show.genres
        if(genres.includes(genre) === true && show !== undefined){
          return show
        }
      })  
    }
    allShowsByGenre.push(objetoShowByGenre)
  })
    return allShowsByGenre


};



export default ShowsByGenre;


