import React, { useState, useEffect } from 'react';

import { Container, HeaderContent, SearchInput, ButtonIconArea, SearchIcon} from './styles';

import ShowsByGenre, { SearchTvShowApi, GetIsFavorite } from '../../../services/seriesApi';

import List from '../../../components/List';


const Home = ({ navigation }) => {

  const listHandler = (item)=> {
    navigation.navigate('ShowInfo', item);};

  const [ searchShow, setSearchShow ] = useState(null);
  const [ listShowsByGenre, setListShowsByGenre ] = useState([]);
  const [ listShowsBySearch, setListShowsBySearch ] = useState([]);
  const [ loadIsFavorite, setLoadIsFavorite ] = useState([]);

  useEffect(()=>{
    getShowsByGenre()
    return() =>{
    }
  },[]);

  useEffect(()=>{
    getIsFavorite()
    return() =>{
    }
  },[]);

  async function getShowsByGenre(){
    const response = await ShowsByGenre();
    setListShowsByGenre(response);
  }; 
 

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

  async function sendForm(){
    const response = await SearchTvShowApi(searchShow);
    if (response !== 'error'){
      const allShowsBySearch = []
      response.filter((item) =>{
        let shows = item.show
        allShowsBySearch.push(shows)
      })
      setListShowsBySearch(allShowsBySearch)
    }
  }

  return (
    <Container>

      <HeaderContent>
        <SearchInput 
            placeholder='Search for your favorite tv show'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={text => setSearchShow(text)}
          />
          <ButtonIconArea onPress={()=> sendForm()}>
            <SearchIcon />
          </ButtonIconArea>
      </HeaderContent> 
      { 
        searchShow ?
        <List list={listShowsBySearch} title={'Search'} key={'Search'} onPress={listHandler} isFavorite={loadIsFavorite} isHorizontal={true}/>
       
        :
        listShowsByGenre.map((array, index)=>{
          const { genre, shows } = array
          return (
            <List list={shows} title={genre} key={index} onPress={listHandler} isFavorite={loadIsFavorite} isHorizontal={true}/>
          )
        })

      }
      

  </Container>
  );
};



export default Home;




