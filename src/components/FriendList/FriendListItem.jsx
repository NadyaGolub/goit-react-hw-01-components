import PropTypes from 'prop-types';
import { Item, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
        <Status activity={isOnline}>{isOnline}</Status>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{ name}</p>
</Item>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string,
};
