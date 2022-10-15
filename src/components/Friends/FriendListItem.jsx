import PropTypes from 'prop-types';
import { Avatar, Name, Status, FriendsListItem } from './Friends.styled';


export const FriendListItem = ({isOnline, avatar, name}) => {
  return (
    <FriendsListItem>
      <Status
              style={{
                backgroundColor: getBgColor(isOnline),
              }}
            >
              {isOnline}
            </Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsListItem>
  );
}

const getBgColor = isOnline => {
  switch (isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'pink';
  }
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

