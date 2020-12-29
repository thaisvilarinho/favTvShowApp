import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';
import colors from '../../../styles/colors';


const {width, height} = Dimensions.get('screen');

export const Container = styled.ScrollView`
    background-color: ${colors.background};
    flex: 1;
`;

export const ImageHeader = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 100%;
`;

export const GradientHeader = styled(LinearGradient)`
    position: absolute;
    bottom: 0px;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`;

export const HeaderContent = styled.View`
    height: ${`${height - 200}px`};
    width: ${`${width}px`};
`;

export const Summary = styled.Text`
    color: ${colors.white};
    margin: 10px;
`;


export const ContentColumnInfo = styled.View`
    flex-direction: column;
    align-items: flex-start;
    margin: 10px

`;

export const Title = styled.Text`
    color: ${colors.white};
    font-size: 28px;
    margin-bottom: 4px
`;

export const InfoText = styled.Text`
    color: ${colors.infoText};
    font-size: 14px;
`;

export const ContentRowInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 10px
`;

export const BoxInfoDetail = styled.View`
    background-color: ${colors.button};
    border-radius: 4px;
    margin: 5px;
`;

export const InfoDetail = styled.Text`
    color: ${colors.white};
    font-size: 14px;
    padding: 3px;
`;

export const FavoriteIconButton = styled.TouchableOpacity`
    border-radius: 4px;
    padding: 3px;
    margin-left: 30px;
`;



