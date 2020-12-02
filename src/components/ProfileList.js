import Profile from './Profile/Profile';
import PropTypes from 'prop-types';
import s from './Profile/Profile.module.css';

function ProfileList({ items }) {
  return (
    <ul className={s.group}>
      {items.map(item => (
        <li key={item.id}>
          <Profile
            name={item.name}
            tag={item.tag}
            location={item.location}
            imageUrl={item.avatar}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ProfileList;
