import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import friends from './FriendList/friends.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ;
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
