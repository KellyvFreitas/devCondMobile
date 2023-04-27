import styled from 'styled-components';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #f5f6fa;
    padding: 20px;
  `,
  LoadingIcon: styled.ActivityIndicator``,
  NoListArea: styled.View`
    justify-content: center;
    align-items: center;
    padding: 30px;
    font-size: 15px;
    color: #000;
  `,
  NoListText: styled.Text``,
  List: styled.FlatList`
    flex: 1;
  `,
};
