import propTypes from 'prop-types';
import {
  FriendItem,
  OnlineStatus,
  Avatar,
  UserName
} from './FriendList.styled';

export const FriendListItem = ({ avatar, username, isOnline }) => {
  return (
    <FriendItem>
      <OnlineStatus status={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{username}</UserName>
    </FriendItem>
  )
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};