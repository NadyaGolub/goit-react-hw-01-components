import PropTypes from 'prop-types';
import { Container, Box, Img, List, Item, Title, Value, Name } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Container>
      <Box>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>{tag}</p>
        <p>{location}</p>
      </Box>
      <List>
        <Item>
          <Title>Followers</Title>
          <Value>{followers}</Value>
        </Item>
        <Item>
          <Title>Views</Title>
          <Value>{views}</Value>
        </Item>
        <Item>
          <Title>Likes</Title>
          <Value>{likes}</Value>
        </Item>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
