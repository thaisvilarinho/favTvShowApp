import React from 'react';
import {FlatList } from 'react-native';

import { ImageHeader, Icon, 
  GradientHeader, ButtonWatch, TextButton, 
  ItemSerie } from './styles';

const Carousel = ({list}) => {
  return (
    <FlatList 
          data={list}
          keyExtractor={(item, index)=>`${item}_${index}`}
          horizontal
          pagingEnabled
          renderItem={({item})=>{
            return (
            <ItemSerie>
              <ImageHeader source={{uri: 'https://www.mobygames.com/images/covers/l/358976-friends-the-one-with-all-the-trivia-windows-front-cover.jpg'}}/>
              <GradientHeader
                colors={["transparent","rgba(0,0,0, 0.9)", "rgba(0,0,0, 1)"]}
                start={{x:0, y:0}}
                end={{x:0, y:1}}        
              >
                <Icon name='share' size={32} color='white'/>
                <ButtonWatch>
                  <Icon name='controller-play' size={20} color='black' style={{marginRight: 5}}/>
                  <TextButton>Assitir</TextButton>
                </ButtonWatch>
                <Icon name='info-with-circle' size={32} color='white'/>
              </GradientHeader>
          </ItemSerie>
          )
        }}
      />
  );
};

export default Carousel;
