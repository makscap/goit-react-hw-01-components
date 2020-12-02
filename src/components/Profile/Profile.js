import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImage from './default.jpg';

console.log(defaultImage);
function Profile({
  name = 'не известно',
  tag,
  location,
  imageUrl = defaultImage,
  stats,
  id,
}) {
  return (
    <div className={s.profile}>
      <div class={s.description}>
        <img src={imageUrl} alt={name} class={s.avatar} />
        <p class={s.name}>{name}</p>
        <p class={s.tag}>{tag}</p>
        <p class={s.location}>{location}</p>
      </div>

      <ul class={s.stats}>
        <li className={s.item}>
          <span class={s.label}>Followers: </span>
          <span class={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span class={s.label}>Views: </span>
          <span class={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span class={s.label}>Likes: </span>
          <span class={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  stats: PropTypes.object,
  // views: PropTypes.number.isRequired,
  // likes: PropTypes.number.isRequired,
  // id: PropTypes.string.isRequired,
};

export default Profile;
