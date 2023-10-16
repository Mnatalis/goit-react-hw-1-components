import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const allLabels = stats.map(item => {
    return (
      <li
        key={item.id}
        className={css.item}
        style={{ backgroundColor: getRandomHexColor() }}
      >
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
