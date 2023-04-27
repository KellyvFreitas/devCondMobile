import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';
import C from './styles';
import WallItem from '../../components/WallItem';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);
  const [wallList, setWallList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Mural de Avisos',
    });
    getWall();
  }, []);
  //A função fica Async (assincrona), pq é feito requisição na api
  const getWall = async () => {
    setWallList([]);
    setLoading(true);
    const result = await api.getWall();
    setLoading(false);
    if (result.error === '') {
      setWallList(result.list);
    } else {
      alert(result.error);
      s;
    }
  };

  return (
    <C.Container>
      {!loading && wallList.length === 0 && (
        <C.NoListArea>
          <C.NoListText>Não há avisos!</C.NoListText>
        </C.NoListArea>
      )}

      <C.List
        data={wallList}
        onRefresh={getWall}
        refreshing={loading}
        renderItem={({item}) => <WallItem data={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </C.Container>
  );
};
