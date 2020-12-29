import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ContainerItem = styled.TouchableOpacity`
    height: 210px;
    width: 120px;
    margin: 5px;
    padding-bottom: 10px;
    background-color: ${colors.input};
    border-radius: 20px;
`;

export const ContainerList = styled.SafeAreaView `
    margin-left: 10px;
    margin-top: 10px;
`;
    
export const Image = styled.ImageBackground.attrs({
    reziseMode: 'cover',
})`
    height: 80%;
    width: 100%;
    border-radius: 20px;
    margin-bottom: 15px;
    flex-direction: row; 
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ListText = styled.Text`
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 4px
`;

export const ItemText = styled.Text`
    color: ${colors.white};
    font-size: 12px;
    text-align: center;
`;


export const FavoriteIcon = styled.View`
    background-color: ${colors.transparent};
    border-radius: 4px;
    margin: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px;

`;





