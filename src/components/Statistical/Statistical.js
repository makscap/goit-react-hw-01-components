import PropTypes from 'prop-types';
import s from './Statistical.module.css';

function Statistical({ options }) {
  return (
    <section className={s.statistics}>
      <div className={s.container}>
        <h2 className={s.title}>Upload stats</h2>
        <ul className={s.statList}>
          {options.map(option => (
            <li
              key={option.id}
              className={s.item}
              style={{ backgroundColor: option.color }}
            >
              <span className={s.label}>{option.label}</span>
              <span className={s.percentage}>{option.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistical.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistical;
