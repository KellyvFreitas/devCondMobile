import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';
import C from './styles';
import DocItem from '../../components/DocItem';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);
  const [docList, setDocList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Boletos',
    });
    getBillets();
  }, []);
  //A função fica Async (assincrona), pq é feito requisição na api
  const getBillets = async () => {
    setDocList([]);
    setLoading(true);
    const result = await api.getBillets();
    setLoading(false);
    if (result.error === '') {
      setDocList(result.list);
    } else {
      alert(result.error);
      s;
    }
  };

  return (
    <C.Container>
      {!loading && docList.length === 0 && (
        <C.NoListArea>
          <C.NoListText>Não há boletos.</C.NoListText>
        </C.NoListArea>
      )}

      <C.List
        data={docList}
        onRefresh={getBillets}
        refreshing={loading}
        renderItem={({item}) => <DocItem data={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </C.Container>
  );
};
