import React, {useState, useEffect} from 'react';
import {FlatList, LogBox} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';

import NoImage from '../../image/no-image.jpg';


import { 
  ContainerItem, Image, ContainerList, 
  ListText, ItemText, FavoriteIcon } from './styles';

const List = ({ list, title, onPress, isFavorite, isHorizontal }) => { 



  const itemHandler = (item) =>{
    if (onPress) {
      onPress(item);
    }
  }

  function renderShows(item){
    const {name, image} = item.item;
    let {id} = item.item
    
    return (
      <ContainerItem onPress={()=> itemHandler(item)}>
        <Image source={ image ? {uri: image.medium} : NoImage}>
          <FavoriteIcon>
          <Ionicons 
                name={ isFavorite.includes(id) ? 'heart' : 'heart-outline'}
                size = {28}
                color={ isFavorite.includes(id) ? `${colors.button}` : `${colors.white}`}
              />            
          </FavoriteIcon>
        </Image>
        <ItemText>{name ? name : 'null'}</ItemText>
      </ContainerItem>
    )
  }

  return(
    <ContainerList key={title}>
      <ListText>{title}</ListText>
      
      {
        isHorizontal ?

        <FlatList 
          data={list}
          horizontal={true}
          showsHorizontalScrollIndicator={false}         
          style={{marginTop: 10}}
          keyExtractor={(show)=> `${show.id}_${title}`}
          renderItem={renderShows}
        />
        :
        <FlatList 
        data={list}  
        showsVerticalScrollIndicator={false}      
        style={{marginTop: 20}}
        keyExtractor={(show)=> `${show.id}_${title}`}
        renderItem={renderShows}

      />
      }


    </ContainerList>
  );
};

export default List;


