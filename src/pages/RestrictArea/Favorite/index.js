import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { GetIsFavorite, GetFavoriteShow } from '../../../services/seriesApi';
import List from '../../../components/List';

const Favorite = ({ navigation }) => {
  
  const listHandler = (item)=> {
    navigation.navigate('ShowInfo', item);};

  const [ loadIsFavorite, setLoadIsFavorite ] = useState([]);
  const [ listAllFavoriteShows, setListAllFavoriteShows ] = useState([]);

  useEffect(()=>{
    getIsFavorite()
    return() =>{
    }
  },[]);

  useEffect(()=>{
    getAllFavoriteShows()
    return() =>{
    }
  },[]);


  async function getIsFavorite(){
    const response = await GetIsFavorite();
    if (response !== 'error'){
      const idFavoritedShows = []
      response.filter((item)=>{
        let showId = item.idShow
        idFavoritedShows.push(showId)
      })
      setLoadIsFavorite(idFavoritedShows)
    }
  };

  async function getAllFavoriteShows(){
    const arrayAllFavoritedShows = []
    loadIsFavorite.map(async (id)=>{
      const response = await GetFavoriteShow(id);
      if (response){  
        arrayAllFavoritedShows.push(response)
      }
      setListAllFavoriteShows(arrayAllFavoritedShows)

    })
  };
 
  return (
    <Container>
      <List list={listAllFavoriteShows} title={'Favorite Shows'} key={'Favorite'} onPress={listHandler} isFavorite={loadIsFavorite} isHorizontal={false}/>
    </Container>
  );
};

export default Favorite;
