import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const allLabels = stats.map(item => {
    return (
      <li key={item.id} className={css.item}>
        <p className={css.label}>{item.label}</p>
        <span className={css.percentage}>{item.percentage}%</span>
      </li>
    );
  });

  return (
    <div className={css.wrapper}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>{allLabels}</ul>
    </div>
  );
};
