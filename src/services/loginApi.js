
import uri from '../config/config';

const LoginApi = async (email, password)=>{
    let response = await fetch(`${uri}login`, 
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    let json = await response.json();
    return json;
}

export const CreateAccount = async (email, password)=>{
  let response = await fetch(`${uri}createAccount`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  if (response !== 'error'){
    return response
  }
};

export default LoginApi;