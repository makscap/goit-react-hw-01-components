import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'

import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (


    <section className={s.section}>
      <h2 className={s.title}>Friends:</h2>
      <ul className={s.group}>
        {friends.map(friend => (
          <li key={friend.id} className={s.item}>
    <FriendListItem
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
          </li>
        ))}
      </ul>
    </section>
  );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
