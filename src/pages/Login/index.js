import React, {useState, useEffect} from 'react';
import { Image, Platform } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';


import LoginApi from '../../services/loginApi';

import { 
  Container, LogoContent, LoginContent, 
  InputContent, ButtonSumit, TextSubmit,
  ButtonRegister, TextRegister, LoginMessageContent, 
  ErrorMessage } from './styles';

export default function Login({navigation}) {

  const [ display, setDisplay] = useState('none');
  const [ email, setEmail] = useState(null);
  const [ password, setPassword] = useState(null);
  const [ login, setLogin] = useState(null);

  useEffect(()=>{
    verifyLogin();
  },[]);
  
  useEffect(()=>{
    if(login === true){
      biometric();
    }
  }, [login]);

  async function verifyLogin(){
    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    if (json !== null){
      setEmail(json.email);
      setPassword(json.password);
      setLogin(true);
    }
  };
  
  async function biometric(){
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible){
      let biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if (!biometricRecords){
        alert('Biometria não cadastrada');
      }else{
        let result = await LocalAuthentication.authenticateAsync();
        if (result.success){
          sendForm();
        }else{
          setEmail(null);
          setPassword(null);
        }
      }
    }
  };

  
  async function sendForm(){
    const response = await LoginApi(email, password);
    if (response === 'error'){
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 5000);
      await AsyncStorage.clear();
    }else{
      let userData = await AsyncStorage.setItem('userData', JSON.stringify(response));
      navigation.navigate('RestrictArea');
    }
  }

   return (
    <Container behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <LogoContent>
        <Image source={require('../../../assets/logo.png')}/>
      </LogoContent>

      <LoginMessageContent>
          <ErrorMessage display={display}>Invalid email or password</ErrorMessage>
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

        <ButtonSumit onPress={()=> sendForm()}>
          <TextSubmit>Login</TextSubmit>
        </ButtonSumit>

        <ButtonRegister onPress={()=> navigation.navigate('SignUp')}>
          <TextRegister>Create your free account</TextRegister>
        </ButtonRegister>
      </LoginContent>

    </Container>
  );
}
