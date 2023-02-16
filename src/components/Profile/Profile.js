import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{props.username}</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.location}>{props.location} </p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={styles.quantity}>{props.stats.followers} </span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={styles.quantity}>{props.stats.views} </span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={styles.quantity}>{props.stats.likes} </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  Location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
