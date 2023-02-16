import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = props => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: props.isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{props.name}</p>
    </li>
  );
};

export default FriendListItem;
