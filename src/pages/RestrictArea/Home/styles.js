import styled from 'styled-components/native';
import colors from '../../../styles/colors';

import { FontAwesome } from '@expo/vector-icons'; 
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

export const Container = styled.ScrollView`
    background-color: ${colors.background};
    flex: 1;
`;

export const HeaderContent = styled.View`
    height: ${`${height/4}px`};
    padding-top: ${`${height/6}px`};
    flex-direction: row;
    justify-content: center;
    align-items: center;
`; 

export const SearchInput = styled.TextInput`

    background-color: ${colors.white};
    margin-left: 10px;
    margin-right: 10px;
    width: 80%;
    color: ${colors.inputText};
    font-size: 16px;
    border-radius: 10px;
    padding: 8px
`;

export const ButtonIconArea = styled.TouchableOpacity`

`;
export const SearchIcon = styled(FontAwesome).attrs({
    name:'search',
    size: 28,
    color: `${colors.white}`,
})`    
`;







