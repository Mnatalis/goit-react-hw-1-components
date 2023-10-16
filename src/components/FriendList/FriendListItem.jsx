export const FriendListItem = ({ friends }) => {
  const items = friends.map(item => {
    return (
      <li className="item" key={item.id}>
        <span></span>
        <img
          className="avatar"
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{item.name}</p>
      </li>
    );
  });
  return items;
};

// className={item.isOnline ? style.statuson : style.statusoff}
