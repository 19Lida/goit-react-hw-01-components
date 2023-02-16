import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  const getColor = index => {
    if (index === 0) {
      return '#3352F0';
    }
    if (index === 1) {
      return '#F033EA';
    }
    if (index === 2) {
      return '#33F059';
    }
    if (index === 3) {
      return '#F08533';
    }
    if (index === 4) {
      return '#F03333';
    }
    return '#3B5252';
  };
  return (
    <section className={styles.statistics}>
      {props.title && <h2 className="title">{props.title}</h2>}

      <ul className={styles.statList}>
        {props.stats.map((stat, index) => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: getColor(index) }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
export default Statistics;
