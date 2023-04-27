import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import api from '../services/api';

const Box = styled.View`
  background-color: #fff;
  border-width: 2px;
  border-color: #e8e9ed;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 10px;
`;
const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
`;
const InfoArea = styled.View`
  margin-left: 15px;
  flex: 1;
`;
const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;
const Date = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #9c9db9;
`;
const Body = styled.Text`
  font-size: 15px;
  color: #000;
  margin: 15px 0;
`;
const FooterArea = styled.View``;
const LikeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
const LikeText = styled.Text`
  font-size: 13px;
  color: #9c9db9;
`;

export default ({data}) => {
  const [likeCount, setLikeCount] = useState(data.likes);
  const [liked, setLiked] = useState(data.liked);

  const handleLike = async () => {
    setLiked(!liked);
    const result = await api.likeWallPost(data.id);
    if (result.error === '') {
      setLikeCount(result.likes);
      setLiked(result.liked);
    } else {
      alert(result.error);
    }
  };
  return (
    <Box>
      <HeaderArea>
        <Icon name="newspaper-0" size={30} color="#8B63E7" />
        <InfoArea>
          <Title>{data.title}</Title>
          <Date>{data.datecreated}</Date>
        </InfoArea>
      </HeaderArea>
      <Body>{data.body}</Body>
      <FooterArea>
        <LikeButton onPress={handleLike}>
          {liked ? (
            <Icon name="faheart" size={17} color="ff0000" />
          ) : (
            <Icon name="heart-o" size={17} color="ff0000" />
          )}
          <LikeText>
            {likeCount} Pessoa{likeCount == 1 ? '' : 's'} curti
            {likeCount == 1 ? 'u' : 'ram'}
          </LikeText>
        </LikeButton>
      </FooterArea>
    </Box>
  );
};
