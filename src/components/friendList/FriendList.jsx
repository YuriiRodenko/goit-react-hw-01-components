import propTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendList } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            username={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendList>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};