import React, {useState} from 'react';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import api from '../services/api';

const Box = styled.TouchableOpacity`
  background-color: #fff;
  border-width: 2px;
  border-color: #e8e9ed;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
`;

//A função abaixo pode ser feita direto pelo react native, importando apenas o Linking. Serve para baixar um PDF
export default ({data}) => {
  const handleClick = async () => {
    const supported = await Linking.canOpenURL(data.fileurl);
    if (supported) {
      await Linking.openURL(data.fileurl);
    }
  };

  return (
    <Box onPress={handleClick}>
      <Icon name="fileText" size={30} color="#8B63E7" />
      <Title>{data.title}</Title>
    </Box>
  );
};
