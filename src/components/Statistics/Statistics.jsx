import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.stats}>
        {stats.map((stat, index) => (
          <li key={stat.id} className={css.list}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
