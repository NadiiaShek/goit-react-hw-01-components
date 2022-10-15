import PropTypes from 'prop-types';
import { FriendsList} from './Friends.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) =>{
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendsList>
  );
}


FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
