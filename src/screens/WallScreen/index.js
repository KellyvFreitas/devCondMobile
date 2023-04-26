import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';
import C from './styles';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);

  return (
    <C.Container>
      <C.Scroller>
        {loading && <C.LoadingIcon color="#8863E6" size="large" />}
      </C.Scroller>
    </C.Container>
  );
};
