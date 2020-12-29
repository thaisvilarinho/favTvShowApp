import React, { useState, useEffect } from 'react';
import colors from '../../../styles/colors';
import { Ionicons } from '@expo/vector-icons';


import { 
  Container, HeaderContent, ImageHeader, 
  GradientHeader, Summary,
  ContentColumnInfo, Title, InfoText,
  ContentRowInfo, BoxInfoDetail, InfoDetail,
  FavoriteIconButton} from './styles';
  
import { AddFavoriteShow, GetIsFavorite, DeleteFavoriteShow } from '../../../services/seriesApi';

const ShowInfo = ({ route }) => {

  const { image, name, summary, 
    premiered, genres, language, 
    rating, network, id } = route.params.item
  
  const premieredYear = premiered.split('-')
  const sumarryText = summary.replace('<p>', '').replace('</p>','').replace('.<p>', '.').replace('.</p>', '.').replace('<b>','').replace('</b>','')
  
  const [favoriteShow, setFavoriteShow] = useState(false);
  const [loadComponent, setLoadComponent] = useState('');
  const [loadIsFavorite, setLoadIsFavorite] = useState([]);

  useEffect(()=>{
    const response =  route.params.item ? route.params.item : ''
    setLoadComponent(response)
    return() =>{
    }
  },[]);

  useEffect(()=>{
    getIsFavorite()
    return() =>{
    }
  },[]);

    
  async function sendForm(){
    getIsFavorite()
    if(loadIsFavorite.includes(id)){
      const responseDelete = await DeleteFavoriteShow(id);
      if (responseDelete !== 'error'){
        setFavoriteShow(false)
      };
    }
    const responseAdd = await AddFavoriteShow(id);
    if (responseAdd !== 'error'){
      setFavoriteShow(true)
    };
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
  return (
    <Container>
      {
        loadComponent ?
        <>
          <HeaderContent>
            <ImageHeader source={{uri: image.original}}/>
            <GradientHeader
              colors={["transparent","rgba(0,0,0, 0.9)", `${colors.background}`]}
              start={{x:0, y:0}}
              end={{x:0, y:1}}        
            >
              <ContentColumnInfo>
                <Title>{name}</Title>
                <InfoText>{`${premieredYear[0]} • ${genres}`}</InfoText>
              </ContentColumnInfo>

              <ContentRowInfo>

                <BoxInfoDetail>
                  <InfoDetail>{rating.average ? rating.average : ''}</InfoDetail>
                </BoxInfoDetail>

                <BoxInfoDetail>
                  <InfoDetail>{language ? language : ''}</InfoDetail>
                </BoxInfoDetail>

                <BoxInfoDetail>
                  <InfoDetail>{network.name ? network.name : ''}</InfoDetail>
                </BoxInfoDetail>

                <BoxInfoDetail>
                  <InfoDetail>{network.country.name ? network.country.name : ''}</InfoDetail>
                </BoxInfoDetail>

                <FavoriteIconButton onPress={()=> sendForm()}>

                  <Ionicons 
                    name={ loadIsFavorite.includes(id) ? 'heart' : 'heart-outline'}
                    size = {28}
                    color={ loadIsFavorite.includes(id) ? `${colors.button}` : `${colors.white}`}
                  />


                  </FavoriteIconButton>

              </ContentRowInfo>

            </GradientHeader>
          </HeaderContent>
          <Summary>{sumarryText}</Summary>
        </>
          :
        <>
        </>
      }

    </Container>

  );
};

export default ShowInfo;
