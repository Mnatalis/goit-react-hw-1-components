import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const renderItems = items.map(item => {
    return (
      <tr key={item.id} className={css.tbodylist}>
        <td className={css.tbodyitem}>{item.type}</td>
        <td className={css.tbodyitem}>{item.amount}</td>
        <td className={css.tbodyitem}>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.theadrow}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>{renderItems}</tbody>
    </table>
  );
};
