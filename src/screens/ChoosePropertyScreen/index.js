/* eslint-disable */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';
import C from './styles';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginButton = async () => {
    if (cpf && password) {
      let result = await api.login(cpf, password);
      if (result.error === '') {
        dispatch({type: 'setToken', payload: {token: result.token}});
        dispatch({type: 'setUser', payload: {user: result.user}});
        navigation.reset({index: 1, routes: [{name: 'ChoosePropertyScreen'}]});
      } else {
        alert(result.error);
      }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const handleRegisterButton = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <C.Container>
      <C.Logo
        source={require('../../assets/logocondominio.png')}
        resizeMode="contain"
      />
      <C.Field
        placeholder="Digite seu CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={t => setCpf(t)}
      />
      <C.Field
        placeholder="Digite sua Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={t => setPassword(t)}
      />
      <C.ButtonArea onPress={handleLoginButton}>
        <C.ButtonText>ENTRAR</C.ButtonText>
      </C.ButtonArea>

      <C.ButtonArea onPress={handleRegisterButton}>
        <C.ButtonText>CADASTRAR-SE</C.ButtonText>
      </C.ButtonArea>
    </C.Container>
  );
};
