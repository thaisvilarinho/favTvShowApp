import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

export const ImageHeader = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 100%;
`;

export const Icon = styled(Entypo)`

`;

export const ButtonWatch = styled.TouchableOpacity`
    background-color: white;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    padding: 10px;

`;

export const TextButton = styled.Text`

`; 

export const GradientHeader = styled(LinearGradient)`
    position: absolute;
    bottom: 0px;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const ItemSerie = styled.TouchableOpacity.attrs({
    activeOpacity: 1
})`
    height: 100%;
    width: ${`${width}px`};
`;
