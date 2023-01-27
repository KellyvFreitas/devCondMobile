/* eslint-disable */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';
import C from './styles';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [cpf, setCpf] = useState();
  const [password, setPassword] = useState();

  const handleLoginButton = async () => {
    if (cpf && password) {
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
        placeholder="Digite sua SENHA"
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
