import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${colors.background};
    align-items: center;
    justify-content: center;
`;

export const LogoContent = styled.View`
    flex: 1;
    justify-content: center;
`;

export const LoginMessageContent = styled.View`
    width: 80%;
`;

export const ErrorMessage = styled.Text`
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin-top: 4px;
    margin-bottom: 8px
    color: ${colors.warning};
    display: ${props => props.display};
`;


export const LoginContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 90%
    padding-bottom: 40px;
`;

export const InputContent = styled.TextInput`
    background-color: ${colors.white};
    width: 90%;
    margin-bottom: 15px;
    color: ${colors.inputText};
    font-size: 16px;
    border-radius: 8px;
    padding: 10px
`;

export const ButtonSumit = styled.TouchableOpacity`
    background-color: ${colors.button};
    width: 90%
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const TextSubmit = styled.Text`
    color: ${colors.white};
    font-size: 16px;
`;


export const ButtonRegister = styled.TouchableOpacity`
    margin-top: 10px;
`;

export const TextRegister = styled.Text`
    color: ${colors.white};
`;