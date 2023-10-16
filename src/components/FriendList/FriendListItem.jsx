import css from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  const items = friends.map(item => {
    return (
      <li className={css.item} key={item.id}>
        <span className={item.isOnline ? css.statuson : css.statusoff}></span>
        <img
          className={css.avatar}
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{item.name}</p>
      </li>
    );
  });
  return items;
};
