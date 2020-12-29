import React, {useState, useEffect} from 'react';
import { Image, Platform } from 'react-native';

import CreateAccount from '../../services/loginApi';;

import { 
  Container, LogoContent, LoginContent, 
  InputContent, ButtonSumit, TextSubmit,
 LoginMessageContent, ErrorMessage } from './styles';

const SignUp = ({navigation}) => {

  const [ display, setDisplay] = useState('none');
  const [ email, setEmail] = useState(null);
  const [ password, setPassword] = useState(null);
  const [ doubleCheckPassword, setDoubleCheckPassword] = useState(null);

    
  async function sendForm(){
    if (password !== doubleCheckPassword){
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 5000);
    }else{
      const response = await CreateAccount(email, password);
      console.log(response)
      navigation.navigate('Login')
    }
  }

  return (
    <Container behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <LogoContent>
        <Image source={require('../../../assets/logo.png')}/>
      </LogoContent>

      <LoginMessageContent>
          <ErrorMessage display={display}>Please enter the same value</ErrorMessage>
      </LoginMessageContent>

      <LoginContent>
        <InputContent 
          placeholder='Email'
          autoCorrect={false}
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={text => setEmail(text)}
        />

        <InputContent 
          placeholder='Password'
          autoCorrect={false}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <InputContent 
          placeholder='Confirm Password'
          autoCorrect={false}
          onChangeText={text => setDoubleCheckPassword(text)}
          secureTextEntry={true}
        />

        <ButtonSumit onPress={()=> sendForm()}>
          <TextSubmit>Register</TextSubmit>
        </ButtonSumit>

      </LoginContent>

    </Container>
  );
};

export default SignUp;
