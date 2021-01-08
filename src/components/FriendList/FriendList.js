import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Friends:</h2>
      <ul className={s.group}>
        {friends.map(friend => (
          <li key={friend.id} className={s.item}>


            {/* <span
              className={s.status}
              style={
                friend.isOnline >= true
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'red' }
              }
            ></span> */}

      <span className={friend.isOnline ? s.online : s.offline}></span>


            <img className={s.avatar} src={friend.avatar} alt="" width="48" />
            <p className={s.name}>{friend.name}</p>
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
